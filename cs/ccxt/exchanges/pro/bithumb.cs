namespace ccxt.pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class bithumb { public bithumb(object args = null) : base(args) { } }
public partial class bithumb : ccxt.bithumb
{
    public override object describe()
    {
        return this.deepExtend(base.describe(), new Dictionary<string, object>() {
            { "has", new Dictionary<string, object>() {
                { "ws", true },
                { "watchBalance", false },
                { "watchTicker", true },
                { "watchTickers", true },
                { "watchTrades", true },
                { "watchOrderBook", true },
                { "watchOHLCV", false },
            } },
            { "urls", new Dictionary<string, object>() {
                { "api", new Dictionary<string, object>() {
                    { "ws", "wss://pubwss.bithumb.com/pub/ws" },
                } },
            } },
            { "options", new Dictionary<string, object>() {} },
            { "streaming", new Dictionary<string, object>() {} },
            { "exceptions", new Dictionary<string, object>() {} },
        });
    }

    /**
     * @method
     * @name bithumb#watchTicker
     * @description watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
     * @see https://apidocs.bithumb.com/v1.2.0/reference/%EB%B9%97%EC%8D%B8-%EA%B1%B0%EB%9E%98%EC%86%8C-%EC%A0%95%EB%B3%B4-%EC%88%98%EC%8B%A0
     * @param {string} symbol unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.channel] the channel to subscribe to, tickers by default. Can be tickers, sprd-tickers, index-tickers, block-tickers
     * @returns {object} a [ticker structure]{@link https://github.com/ccxt/ccxt/wiki/Manual#ticker-structure}
     */
    public async override Task<object> watchTicker(object symbol, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        object url = getValue(getValue(this.urls, "api"), "ws");
        await this.loadMarkets();
        object market = this.market(symbol);
        object messageHash = add("ticker:", getValue(market, "symbol"));
        object request = new Dictionary<string, object>() {
            { "type", "ticker" },
            { "symbols", new List<object>() {add(add(getValue(market, "base"), "_"), getValue(market, "quote"))} },
            { "tickTypes", new List<object> {this.safeString(parameters, "tickTypes", "24H")} },
        };
        return await this.watch(url, messageHash, this.extend(request, parameters), messageHash);
    }

    /**
     * @method
     * @name bithumb#watchTickers
     * @description watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list
     * @see https://apidocs.bithumb.com/v1.2.0/reference/%EB%B9%97%EC%8D%B8-%EA%B1%B0%EB%9E%98%EC%86%8C-%EC%A0%95%EB%B3%B4-%EC%88%98%EC%8B%A0
     * @param {string[]} symbols unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    public async override Task<object> watchTickers(object symbols = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object url = getValue(getValue(this.urls, "api"), "ws");
        object marketIds = new List<object>() {};
        object messageHashes = new List<object>() {};
        symbols = this.marketSymbols(symbols, null, false, true, true);
        for (object i = 0; isLessThan(i, getArrayLength(symbols)); postFixIncrement(ref i))
        {
            object symbol = getValue(symbols, i);
            object market = this.market(symbol);
            ((IList<object>)marketIds).Add(add(add(getValue(market, "base"), "_"), getValue(market, "quote")));
            ((IList<object>)messageHashes).Add(add("ticker:", getValue(market, "symbol")));
        }
        object request = new Dictionary<string, object>() {
            { "type", "ticker" },
            { "symbols", marketIds },
            { "tickTypes", new List<object> {this.safeString(parameters, "tickTypes", "24H")} },
        };
        object message = this.extend(request, parameters);
        object newTicker = await this.watchMultiple(url, messageHashes, message, messageHashes);
        if (isTrue(this.newUpdates))
        {
            object result = new Dictionary<string, object>() {};
            ((IDictionary<string,object>)result)[(string)getValue(newTicker, "symbol")] = newTicker;
            return result;
        }
        return this.filterByArray(this.tickers, "symbol", symbols);
    }

    public virtual void handleTicker(WebSocketClient client, object message)
    {
        //
        //    {
        //        "type" : "ticker",
        //        "content" : {
        //            "symbol" : "BTC_KRW",           // 통화코드
        //            "tickType" : "24H",                 // 변동 기준시간- 30M, 1H, 12H, 24H, MID
        //            "date" : "20200129",                // 일자
        //            "time" : "121844",                  // 시간
        //            "openPrice" : "2302",               // 시가
        //            "closePrice" : "2317",              // 종가
        //            "lowPrice" : "2272",                // 저가
        //            "highPrice" : "2344",               // 고가
        //            "value" : "2831915078.07065789",    // 누적거래금액
        //            "volume" : "1222314.51355788",  // 누적거래량
        //            "sellVolume" : "760129.34079004",   // 매도누적거래량
        //            "buyVolume" : "462185.17276784",    // 매수누적거래량
        //            "prevClosePrice" : "2326",          // 전일종가
        //            "chgRate" : "0.65",                 // 변동률
        //            "chgAmt" : "15",                    // 변동금액
        //            "volumePower" : "60.80"         // 체결강도
        //        }
        //    }
        //
        object content = this.safeDict(message, "content", new Dictionary<string, object>() {});
        object marketId = this.safeString(content, "symbol");
        object symbol = this.safeSymbol(marketId, null, "_");
        object ticker = this.parseWsTicker(content);
        object messageHash = add("ticker:", symbol);
        ((IDictionary<string,object>)this.tickers)[(string)symbol] = ticker;
        callDynamically(client as WebSocketClient, "resolve", new object[] {getValue(this.tickers, symbol), messageHash});
    }

    public virtual object parseWsTicker(object ticker, object market = null)
    {
        //
        //    {
        //        "symbol" : "BTC_KRW",           // 통화코드
        //        "tickType" : "24H",                 // 변동 기준시간- 30M, 1H, 12H, 24H, MID
        //        "date" : "20200129",                // 일자
        //        "time" : "121844",                  // 시간
        //        "openPrice" : "2302",               // 시가
        //        "closePrice" : "2317",              // 종가
        //        "lowPrice" : "2272",                // 저가
        //        "highPrice" : "2344",               // 고가
        //        "value" : "2831915078.07065789",    // 누적거래금액
        //        "volume" : "1222314.51355788",  // 누적거래량
        //        "sellVolume" : "760129.34079004",   // 매도누적거래량
        //        "buyVolume" : "462185.17276784",    // 매수누적거래량
        //        "prevClosePrice" : "2326",          // 전일종가
        //        "chgRate" : "0.65",                 // 변동률
        //        "chgAmt" : "15",                    // 변동금액
        //        "volumePower" : "60.80"         // 체결강도
        //    }
        //
        object date = this.safeString(ticker, "date", "");
        object time = this.safeString(ticker, "time", "");
        object datetime = add(add(add(add(add(add(add(add(add(add(slice(date, 0, 4), "-"), slice(date, 4, 6)), "-"), slice(date, 6, 8)), "T"), slice(time, 0, 2)), ":"), slice(time, 2, 4)), ":"), slice(time, 4, 6));
        object marketId = this.safeString(ticker, "symbol");
        return this.safeTicker(new Dictionary<string, object>() {
            { "symbol", this.safeSymbol(marketId, market, "_") },
            { "timestamp", this.parse8601(datetime) },
            { "datetime", datetime },
            { "high", this.safeString(ticker, "highPrice") },
            { "low", this.safeString(ticker, "lowPrice") },
            { "bid", null },
            { "bidVolume", this.safeString(ticker, "buyVolume") },
            { "ask", null },
            { "askVolume", this.safeString(ticker, "sellVolume") },
            { "vwap", null },
            { "open", this.safeString(ticker, "openPrice") },
            { "close", this.safeString(ticker, "closePrice") },
            { "last", null },
            { "previousClose", this.safeString(ticker, "prevClosePrice") },
            { "change", this.safeString(ticker, "chgAmt") },
            { "percentage", this.safeString(ticker, "chgRate") },
            { "average", null },
            { "baseVolume", this.safeString(ticker, "volume") },
            { "quoteVolume", this.safeString(ticker, "value") },
            { "info", ticker },
        }, market);
    }

    /**
     * @method
     * @name bithumb#watchOrderBook
     * @see https://apidocs.bithumb.com/v1.2.0/reference/%EB%B9%97%EC%8D%B8-%EA%B1%B0%EB%9E%98%EC%86%8C-%EC%A0%95%EB%B3%B4-%EC%88%98%EC%8B%A0
     * @description watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
     * @param {string} symbol unified symbol of the market to fetch the order book for
     * @param {int} [limit] the maximum amount of order book entries to return
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} A dictionary of [order book structures]{@link https://github.com/ccxt/ccxt/wiki/Manual#order-book-structure} indexed by market symbols
     */
    public async override Task<object> watchOrderBook(object symbol, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object url = getValue(getValue(this.urls, "api"), "ws");
        object market = this.market(symbol);
        symbol = getValue(market, "symbol");
        object messageHash = add(add("orderbook", ":"), symbol);
        object request = new Dictionary<string, object>() {
            { "type", "orderbookdepth" },
            { "symbols", new List<object>() {add(add(getValue(market, "base"), "_"), getValue(market, "quote"))} },
        };
        object orderbook = await this.watch(url, messageHash, this.extend(request, parameters), messageHash);
        return (orderbook as IOrderBook).limit();
    }

    public virtual void handleOrderBook(WebSocketClient client, object message)
    {
        //
        //    {
        //        "type" : "orderbookdepth",
        //            "content" : {
        //            "list" : [
        //                {
        //                    "symbol" : "BTC_KRW",
        //                    "orderType" : "ask",        // 주문타입 – bid / ask
        //                    "price" : "10593000",       // 호가
        //                    "quantity" : "1.11223318",  // 잔량
        //                    "total" : "3"               // 건수
        //                },
        //                {"symbol" : "BTC_KRW", "orderType" : "ask", "price" : "10596000", "quantity" : "0.5495", "total" : "8"},
        //                {"symbol" : "BTC_KRW", "orderType" : "ask", "price" : "10598000", "quantity" : "18.2085", "total" : "10"},
        //                {"symbol" : "BTC_KRW", "orderType" : "bid", "price" : "10532000", "quantity" : "0", "total" : "0"},
        //                {"symbol" : "BTC_KRW", "orderType" : "bid", "price" : "10572000", "quantity" : "2.3324", "total" : "4"},
        //                {"symbol" : "BTC_KRW", "orderType" : "bid", "price" : "10571000", "quantity" : "1.469", "total" : "3"},
        //                {"symbol" : "BTC_KRW", "orderType" : "bid", "price" : "10569000", "quantity" : "0.5152", "total" : "2"}
        //            ],
        //            "datetime":1580268255864325     // 일시
        //        }
        //    }
        //
        object content = this.safeDict(message, "content", new Dictionary<string, object>() {});
        object list = this.safeList(content, "list", new List<object>() {});
        object first = this.safeDict(list, 0, new Dictionary<string, object>() {});
        object marketId = this.safeString(first, "symbol");
        object symbol = this.safeSymbol(marketId, null, "_");
        object timestampStr = this.safeString(content, "datetime");
        object timestamp = this.parseToInt(slice(timestampStr, 0, 13));
        if (!isTrue((inOp(this.orderbooks, symbol))))
        {
            object ob = this.orderBook();
            ((IDictionary<string,object>)ob)["symbol"] = symbol;
            ((IDictionary<string,object>)this.orderbooks)[(string)symbol] = ob;
        }
        object orderbook = getValue(this.orderbooks, symbol);
        this.handleDeltas(orderbook, list);
        ((IDictionary<string,object>)orderbook)["timestamp"] = timestamp;
        ((IDictionary<string,object>)orderbook)["datetime"] = this.iso8601(timestamp);
        object messageHash = add(add("orderbook", ":"), symbol);
        callDynamically(client as WebSocketClient, "resolve", new object[] {orderbook, messageHash});
    }

    public override void handleDelta(object orderbook, object delta)
    {
        //
        //    {
        //        symbol: "ETH_BTC",
        //        orderType: "bid",
        //        price: "0.07349517",
        //        quantity: "0",
        //        total: "0",
        //    }
        //
        object sideId = this.safeString(delta, "orderType");
        object side = ((bool) isTrue((isEqual(sideId, "bid")))) ? "bids" : "asks";
        object bidAsk = this.parseBidAsk(delta, "price", "quantity");
        object orderbookSide = getValue(orderbook, side);
        (orderbookSide as IOrderBookSide).storeArray(bidAsk);
    }

    public override void handleDeltas(object orderbook, object deltas)
    {
        for (object i = 0; isLessThan(i, getArrayLength(deltas)); postFixIncrement(ref i))
        {
            this.handleDelta(orderbook, getValue(deltas, i));
        }
    }

    /**
     * @method
     * @name bithumb#watchTrades
     * @description get the list of most recent trades for a particular symbol
     * @see https://apidocs.bithumb.com/v1.2.0/reference/%EB%B9%97%EC%8D%B8-%EA%B1%B0%EB%9E%98%EC%86%8C-%EC%A0%95%EB%B3%B4-%EC%88%98%EC%8B%A0
     * @param {string} symbol unified symbol of the market to fetch trades for
     * @param {int} [since] timestamp in ms of the earliest trade to fetch
     * @param {int} [limit] the maximum amount of trades to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} a list of [trade structures]{@link https://github.com/ccxt/ccxt/wiki/Manual#public-trades}
     */
    public async override Task<object> watchTrades(object symbol, object since = null, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object url = getValue(getValue(this.urls, "api"), "ws");
        object market = this.market(symbol);
        symbol = getValue(market, "symbol");
        object messageHash = add("trade:", symbol);
        object request = new Dictionary<string, object>() {
            { "type", "transaction" },
            { "symbols", new List<object>() {add(add(getValue(market, "base"), "_"), getValue(market, "quote"))} },
        };
        object trades = await this.watch(url, messageHash, this.extend(request, parameters), messageHash);
        if (isTrue(this.newUpdates))
        {
            limit = callDynamically(trades, "getLimit", new object[] {symbol, limit});
        }
        return this.filterBySinceLimit(trades, since, limit, "timestamp", true);
    }

    public virtual void handleTrades(WebSocketClient client, object message)
    {
        //
        //    {
        //        "type" : "transaction",
        //        "content" : {
        //            "list" : [
        //                {
        //                    "symbol" : "BTC_KRW",
        //                    "buySellGb" : "1",
        //                    "contPrice" : "10579000",
        //                    "contQty" : "0.01",
        //                    "contAmt" : "105790.00",
        //                    "contDtm" : "2020-01-29 12:24:18.830039",
        //                    "updn" : "dn"
        //                }
        //            ]
        //        }
        //    }
        //
        object content = this.safeDict(message, "content", new Dictionary<string, object>() {});
        object rawTrades = this.safeList(content, "list", new List<object>() {});
        for (object i = 0; isLessThan(i, getArrayLength(rawTrades)); postFixIncrement(ref i))
        {
            object rawTrade = getValue(rawTrades, i);
            object marketId = this.safeString(rawTrade, "symbol");
            object symbol = this.safeSymbol(marketId, null, "_");
            if (!isTrue((inOp(this.trades, symbol))))
            {
                object limit = this.safeInteger(this.options, "tradesLimit", 1000);
                var stored = new ArrayCache(limit);
                ((IDictionary<string,object>)this.trades)[(string)symbol] = stored;
            }
            object trades = getValue(this.trades, symbol);
            object parsed = this.parseWsTrade(rawTrade);
            callDynamically(trades, "append", new object[] {parsed});
            object messageHash = add(add("trade", ":"), symbol);
            callDynamically(client as WebSocketClient, "resolve", new object[] {trades, messageHash});
        }
    }

    public override object parseWsTrade(object trade, object market = null)
    {
        //
        //    {
        //        "symbol" : "BTC_KRW",
        //        "buySellGb" : "1",
        //        "contPrice" : "10579000",
        //        "contQty" : "0.01",
        //        "contAmt" : "105790.00",
        //        "contDtm" : "2020-01-29 12:24:18.830038",
        //        "updn" : "dn"
        //    }
        //
        object marketId = this.safeString(trade, "symbol");
        object datetime = this.safeString(trade, "contDtm");
        // that date is not UTC iso8601, but exchange's local time, -9hr difference
        object timestamp = subtract(this.parse8601(datetime), 32400000);
        object sideId = this.safeString(trade, "buySellGb");
        return this.safeTrade(new Dictionary<string, object>() {
            { "id", null },
            { "info", trade },
            { "timestamp", timestamp },
            { "datetime", this.iso8601(timestamp) },
            { "symbol", this.safeSymbol(marketId, market, "_") },
            { "order", null },
            { "type", null },
            { "side", ((bool) isTrue((isEqual(sideId, "1")))) ? "buy" : "sell" },
            { "takerOrMaker", null },
            { "price", this.safeString(trade, "contPrice") },
            { "amount", this.safeString(trade, "contQty") },
            { "cost", this.safeString(trade, "contAmt") },
            { "fee", null },
        }, market);
    }

    public virtual object handleErrorMessage(WebSocketClient client, object message)
    {
        //
        //    {
        //        "status" : "5100",
        //        "resmsg" : "Invalid Filter Syntax"
        //    }
        //
        if (!isTrue((inOp(message, "status"))))
        {
            return true;
        }
        object errorCode = this.safeString(message, "status");
        try
        {
            if (isTrue(!isEqual(errorCode, "0000")))
            {
                object msg = this.safeString(message, "resmsg");
                throw new ExchangeError ((string)add(add(this.id, " "), msg)) ;
            }
            return true;
        } catch(Exception e)
        {
            ((WebSocketClient)client).reject(e);
        }
        return true;
    }

    public override void handleMessage(WebSocketClient client, object message)
    {
        if (!isTrue(this.handleErrorMessage(client as WebSocketClient, message)))
        {
            return;
        }
        object topic = this.safeString(message, "type");
        if (isTrue(!isEqual(topic, null)))
        {
            object methods = new Dictionary<string, object>() {
                { "ticker", this.handleTicker },
                { "orderbookdepth", this.handleOrderBook },
                { "transaction", this.handleTrades },
            };
            object method = this.safeValue(methods, topic);
            if (isTrue(!isEqual(method, null)))
            {
                DynamicInvoker.InvokeMethod(method, new object[] { client, message});
            }
        }
    }
}
