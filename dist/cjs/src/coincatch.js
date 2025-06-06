'use strict';

var coincatch$1 = require('./abstract/coincatch.js');
var errors = require('./base/errors.js');
var Precise = require('./base/Precise.js');
var number = require('./base/functions/number.js');
var sha256 = require('./static_dependencies/noble-hashes/sha256.js');

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------------
/**
 * @class coincatch
 * @augments Exchange
 */
class coincatch extends coincatch$1 {
    describe() {
        return this.deepExtend(super.describe(), {
            'id': 'coincatch',
            'name': 'CoinCatch',
            'countries': ['VG'],
            'rateLimit': 50,
            'version': 'v1',
            'certified': false,
            'pro': true,
            'has': {
                'CORS': undefined,
                'spot': true,
                'margin': false,
                'swap': true,
                'future': false,
                'option': false,
                'addMargin': true,
                'cancelAllOrders': true,
                'cancelAllOrdersAfter': false,
                'cancelOrder': true,
                'cancelOrders': true,
                'cancelWithdraw': false,
                'closePosition': false,
                'createConvertTrade': false,
                'createDepositAddress': false,
                'createLimitBuyOrder': true,
                'createLimitSellOrder': true,
                'createMarketBuyOrder': true,
                'createMarketBuyOrderWithCost': true,
                'createMarketOrder': true,
                'createMarketOrderWithCost': false,
                'createMarketSellOrder': true,
                'createMarketSellOrderWithCost': false,
                'createOrder': true,
                'createOrders': true,
                'createOrderWithTakeProfitAndStopLoss': true,
                'createPostOnlyOrder': true,
                'createReduceOnlyOrder': true,
                'createStopLimitOrder': true,
                'createStopLossOrder': true,
                'createStopMarketOrder': true,
                'createStopOrder': true,
                'createTakeProfitOrder': true,
                'createTrailingAmountOrder': false,
                'createTrailingPercentOrder': false,
                'createTriggerOrder': true,
                'fetchAccounts': false,
                'fetchBalance': true,
                'fetchCanceledAndClosedOrders': true,
                'fetchCanceledOrders': false,
                'fetchClosedOrder': false,
                'fetchClosedOrders': false,
                'fetchConvertCurrencies': false,
                'fetchConvertQuote': false,
                'fetchConvertTrade': false,
                'fetchConvertTradeHistory': false,
                'fetchCurrencies': true,
                'fetchDepositAddress': true,
                'fetchDeposits': true,
                'fetchDepositsWithdrawals': false,
                'fetchDepositWithdrawFees': true,
                'fetchFundingHistory': false,
                'fetchFundingRate': true,
                'fetchFundingRateHistory': true,
                'fetchFundingRates': false,
                'fetchIndexOHLCV': false,
                'fetchLedger': true,
                'fetchLeverage': true,
                'fetchLeverageTiers': false,
                'fetchMarginAdjustmentHistory': false,
                'fetchMarginMode': true,
                'fetchMarkets': true,
                'fetchMarkOHLCV': true,
                'fetchMyTrades': true,
                'fetchOHLCV': true,
                'fetchOpenInterestHistory': false,
                'fetchOpenOrder': false,
                'fetchOpenOrders': true,
                'fetchOrder': true,
                'fetchOrderBook': true,
                'fetchOrders': false,
                'fetchOrderTrades': true,
                'fetchPosition': true,
                'fetchPositionHistory': false,
                'fetchPositionMode': true,
                'fetchPositions': true,
                'fetchPositionsForSymbol': true,
                'fetchPositionsHistory': false,
                'fetchPremiumIndexOHLCV': false,
                'fetchStatus': false,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchTime': true,
                'fetchTrades': true,
                'fetchTradingFee': false,
                'fetchTradingFees': false,
                'fetchTransactions': false,
                'fetchTransfers': false,
                'fetchWithdrawals': true,
                'reduceMargin': true,
                'sandbox': false,
                'setLeverage': true,
                'setMargin': false,
                'setMarginMode': true,
                'setPositionMode': true,
                'transfer': false,
                'withdraw': true,
            },
            'timeframes': {
                '1m': '1m',
                '3m': '3m',
                '5m': '5m',
                '15': '15m',
                '30': '30m',
                '1h': '1H',
                '2h': '2H',
                '4h': '4H',
                '6h': '6H',
                '12h': '12H',
                '1d': '1D',
                '3d': '3D',
                '1w': '1W',
                '1M': '1M',
            },
            'urls': {
                'logo': 'https://github.com/user-attachments/assets/3d49065f-f05d-4573-88a2-1b5201ec6ff3',
                'api': {
                    'public': 'https://api.coincatch.com',
                    'private': 'https://api.coincatch.com',
                },
                'www': 'https://www.coincatch.com/',
                'doc': 'https://coincatch.github.io/github.io/en/',
                'fees': 'https://www.coincatch.com/en/rate/',
                'referral': {
                    'url': 'https://partner.coincatch.cc/bg/92hy70391729607848548',
                    'discount': 0.1,
                },
            },
            'api': {
                'public': {
                    'get': {
                        'api/spot/v1/public/time': 1,
                        'api/spot/v1/public/currencies': 20 / 3,
                        'api/spot/v1/market/ticker': 1,
                        'api/spot/v1/market/tickers': 1,
                        'api/spot/v1/market/fills': 2,
                        'api/spot/v1/market/fills-history': 2,
                        'api/spot/v1/market/candles': 1,
                        'api/spot/v1/market/history-candles': 1,
                        'api/spot/v1/market/depth': 1,
                        'api/spot/v1/market/merge-depth': 1,
                        'api/mix/v1/market/contracts': 1,
                        'api/mix/v1/market/merge-depth': 1,
                        'api/mix/v1/market/depth': 1,
                        'api/mix/v1/market/ticker': 1,
                        'api/mix/v1/market/tickers': 1,
                        'api/mix/v1/market/fills': 1,
                        'api/mix/v1/market/fills-history': 1,
                        'api/mix/v1/market/candles': 1,
                        'pi/mix/v1/market/index': 1,
                        'api/mix/v1/market/funding-time': 1,
                        'api/mix/v1/market/history-fundRate': 1,
                        'api/mix/v1/market/current-fundRate': 1,
                        'api/mix/v1/market/open-interest': 1,
                        'api/mix/v1/market/mark-price': 1,
                        'api/mix/v1/market/symbol-leverage': 1,
                        'api/mix/v1/market/queryPositionLever': 1,
                    },
                },
                'private': {
                    'get': {
                        'api/spot/v1/wallet/deposit-address': 4,
                        'pi/spot/v1/wallet/withdrawal-list': 1,
                        'api/spot/v1/wallet/withdrawal-list-v2': 1,
                        'api/spot/v1/wallet/deposit-list': 1,
                        'api/spot/v1/account/getInfo': 1,
                        'api/spot/v1/account/assets': 2,
                        'api/spot/v1/account/transferRecords': 1,
                        'api/mix/v1/account/account': 2,
                        'api/mix/v1/account/accounts': 2,
                        'api/mix/v1/position/singlePosition-v2': 2,
                        'api/mix/v1/position/allPosition-v2': 4,
                        'api/mix/v1/account/accountBill': 2,
                        'api/mix/v1/account/accountBusinessBill': 4,
                        'api/mix/v1/order/current': 1,
                        'api/mix/v1/order/marginCoinCurrent': 1,
                        'api/mix/v1/order/history': 2,
                        'api/mix/v1/order/historyProductType': 4,
                        'api/mix/v1/order/detail': 2,
                        'api/mix/v1/order/fills': 2,
                        'api/mix/v1/order/allFills': 2,
                        'api/mix/v1/plan/currentPlan': 1,
                        'api/mix/v1/plan/historyPlan': 2, // done
                    },
                    'post': {
                        'api/spot/v1/wallet/transfer-v2': 4,
                        'api/spot/v1/wallet/withdrawal-v2': 4,
                        'api/spot/v1/wallet/withdrawal-inner-v2': 1,
                        'api/spot/v1/account/bills': 2,
                        'api/spot/v1/trade/orders': 2,
                        'api/spot/v1/trade/batch-orders': { 'cost': 4, 'step': 10 },
                        'api/spot/v1/trade/cancel-order': 1,
                        'api/spot/v1/trade/cancel-order-v2': 2,
                        'api/spot/v1/trade/cancel-symbol-order': 2,
                        'api/spot/v1/trade/cancel-batch-orders': 1,
                        'api/spot/v1/trade/cancel-batch-orders-v2': 1,
                        'api/spot/v1/trade/orderInfo': 1,
                        'api/spot/v1/trade/open-orders': 1,
                        'api/spot/v1/trade/history': 1,
                        'api/spot/v1/trade/fills': 1,
                        'api/spot/v1/plan/placePlan': 1,
                        'api/spot/v1/plan/modifyPlan': 1,
                        'api/spot/v1/plan/cancelPlan': 1,
                        'api/spot/v1/plan/currentPlan': 1,
                        'api/spot/v1/plan/historyPlan': 1,
                        'api/spot/v1/plan/batchCancelPlan': 2,
                        'api/mix/v1/account/open-count': 1,
                        'api/mix/v1/account/setLeverage': 4,
                        'api/mix/v1/account/setMargin': 4,
                        'api/mix/v1/account/setMarginMode': 4,
                        'api/mix/v1/account/setPositionMode': 4,
                        'api/mix/v1/order/placeOrder': 2,
                        'api/mix/v1/order/batch-orders': { 'cost': 4, 'step': 10 },
                        'api/mix/v1/order/cancel-order': 2,
                        'api/mix/v1/order/cancel-batch-orders': 2,
                        'api/mix/v1/order/cancel-symbol-orders': 2,
                        'api/mix/v1/order/cancel-all-orders': 2,
                        'api/mix/v1/plan/placePlan': 2,
                        'api/mix/v1/plan/modifyPlan': 2,
                        'api/mix/v1/plan/modifyPlanPreset': 2,
                        'api/mix/v1/plan/placeTPSL': 2,
                        'api/mix/v1/plan/placeTrailStop': 2,
                        'api/mix/v1/plan/placePositionsTPSL': 2,
                        'api/mix/v1/plan/modifyTPSLPlan': 2,
                        'api/mix/v1/plan/cancelPlan': 2,
                        'api/mix/v1/plan/cancelSymbolPlan': 2,
                        'api/mix/v1/plan/cancelAllPlan': 2, // done
                    },
                },
            },
            'requiredCredentials': {
                'apiKey': true,
                'secret': true,
                'password': true,
            },
            'fees': {
                'trading': {
                    'spot': {
                        'tierBased': false,
                        'percentage': true,
                        'feeSide': 'get',
                        'maker': this.parseNumber('0.001'),
                        'taker': this.parseNumber('0.001'),
                    },
                },
            },
            'options': {
                'brokerId': '47cfy',
                'createMarketBuyOrderRequiresPrice': true,
                'timeframes': {
                    'spot': {
                        '1m': '1min',
                        '5m': '5min',
                        '15m': '15min',
                        '30m': '30min',
                        '1h': '1h',
                        '4h': '4h',
                        '6h': '6h',
                        '12h': '12h',
                        '1d': '1day',
                        '3d': '3day',
                        '1w': '1week',
                        '1M': '1M',
                    },
                    'swap': {
                        '1m': '1m',
                        '3m': '3m',
                        '5m': '5m',
                        '15': '15m',
                        '30': '30m',
                        '1h': '1H',
                        '2h': '2H',
                        '4h': '4H',
                        '6h': '6H',
                        '12h': '12H',
                        '1d': '1D',
                        '3d': '3D',
                        '1w': '1W',
                        '1M': '1M',
                    },
                },
                'currencyIdsListForParseMarket': undefined,
                'broker': '',
                'networks': {
                    'BTC': 'BITCOIN',
                    'ERC20': 'ERC20',
                    'TRC20': 'TRC20',
                    'BEP20': 'BEP20',
                    'ARB': 'ArbitrumOne',
                    'OPTIMISM': 'Optimism',
                    'LTC': 'LTC',
                    'BCH': 'BCH',
                    'ETC': 'ETC',
                    'SOL': 'SOL',
                    'NEO3': 'NEO3',
                    'STX': 'stacks',
                    'EGLD': 'Elrond',
                    'NEAR': 'NEARProtocol',
                    'ACA': 'AcalaToken',
                    'KLAY': 'Klaytn',
                    'FTM': 'Fantom',
                    'TERRA': 'Terra',
                    'WAVES': 'WAVES',
                    'TAO': 'TAO',
                    'SUI': 'SUI',
                    'SEI': 'SEI',
                    'RUNE': 'THORChain',
                    'ZIL': 'ZIL',
                    'SXP': 'Solar',
                    'FET': 'FET',
                    'AVAX': 'C-Chain',
                    'XRP': 'XRP',
                    'EOS': 'EOS',
                    'DOGE': 'DOGECOIN',
                    'CAP20': 'CAP20',
                    'MATIC': 'Polygon',
                    'CSPR': 'CSPR',
                    'GLMR': 'Moonbeam',
                    'MINA': 'MINA',
                    'CFX': 'CFX',
                    'STRAT': 'StratisEVM',
                    'TIA': 'Celestia',
                    'ChilizChain': 'ChilizChain',
                    'APT': 'Aptos',
                    'ONT': 'Ontology',
                    'ICP': 'ICP',
                    'ADA': 'Cardano',
                    'FIL': 'FIL',
                    'CELO': 'CELO',
                    'DOT': 'DOT',
                    'XLM': 'StellarLumens',
                    'ATOM': 'ATOM',
                    'CRO': 'CronosChain',
                },
                'networksById': {
                    'TRC20': 'TRC20',
                    'TRX(TRC20)': 'TRC20',
                    'ArbitrumOne': 'ARB',
                    'THORChain': 'RUNE',
                    'Solar': 'SXP',
                    'C-Chain': 'AVAX',
                    'CAP20': 'CAP20',
                    'CFXeSpace': 'CFX',
                    'CFX': 'CFX',
                    'StratisEVM': 'STRAT',
                    'ChilizChain': 'ChilizChain',
                    'StellarLumens': 'XLM',
                    'CronosChain': 'CRO', // todo check
                },
            },
            'features': {
                'default': {
                    'sandbox': false,
                    'createOrder': {
                        'marginMode': false,
                        'triggerPrice': true,
                        'triggerPriceType': {
                            'last': true,
                            'mark': true,
                            'index': false,
                        },
                        'triggerDirection': false,
                        'stopLossPrice': false,
                        'takeProfitPrice': false,
                        'attachedStopLossTakeProfit': undefined,
                        'timeInForce': {
                            'IOC': true,
                            'FOK': true,
                            'PO': true,
                            'GTD': false,
                        },
                        'hedged': false,
                        'trailing': false,
                        'leverage': false,
                        'marketBuyByCost': true,
                        'marketBuyRequiresPrice': false,
                        'selfTradePrevention': false,
                        'iceberg': false,
                    },
                    'createOrders': {
                        'max': 50,
                    },
                    'fetchMyTrades': {
                        'marginMode': false,
                        'limit': 500,
                        'daysBack': 100000,
                        'untilDays': 100000,
                        'symbolRequired': true,
                    },
                    'fetchOrder': {
                        'marginMode': false,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': false,
                    },
                    'fetchOpenOrders': {
                        'marginMode': false,
                        'limit': 100,
                        'trigger': true,
                        'trailing': false,
                        'marketType': true,
                        'symbolRequired': false,
                    },
                    'fetchOrders': undefined,
                    'fetchClosedOrders': undefined,
                    'fetchOHLCV': {
                        'limit': 1000,
                    },
                },
                'spot': {
                    'extends': 'default',
                },
                'forDerivatives': {
                    'extends': 'default',
                    'createOrder': {
                        // todo check
                        'attachedStopLossTakeProfit': {
                            'triggerPriceType': undefined,
                            'price': false,
                        },
                    },
                    'fetchMyTrades': {
                        'limit': 100,
                    },
                },
                'swap': {
                    'linear': {
                        'extends': 'forDerivatives',
                    },
                    'inverse': {
                        'extends': 'forDerivatives',
                    },
                },
                'future': {
                    'linear': undefined,
                    'inverse': undefined,
                },
            },
            'commonCurrencies': {},
            'exceptions': {
                'exact': {
                    '22001': errors.OrderNotFound,
                    '429': errors.DDoSProtection,
                    '40001': errors.AuthenticationError,
                    '40002': errors.AuthenticationError,
                    '40003': errors.AuthenticationError,
                    '40005': errors.InvalidNonce,
                    '40006': errors.AuthenticationError,
                    '40007': errors.BadRequest,
                    '40008': errors.InvalidNonce,
                    '40009': errors.AuthenticationError,
                    '40011': errors.AuthenticationError,
                    '40012': errors.AuthenticationError,
                    '40013': errors.ExchangeError,
                    '40014': errors.PermissionDenied,
                    '40015': errors.ExchangeError,
                    '40016': errors.PermissionDenied,
                    '40017': errors.ExchangeError,
                    '40018': errors.PermissionDenied,
                    '40019': errors.BadRequest,
                    '40020': errors.BadRequest,
                    '40034': errors.BadRequest,
                    '400172': errors.BadRequest,
                    '40912': errors.BadRequest,
                    '40913': errors.BadRequest,
                    '40102': errors.BadRequest,
                    '40200': errors.OnMaintenance,
                    '40305': errors.BadRequest,
                    '40409': errors.ExchangeError,
                    '40704': errors.ExchangeError,
                    '40724': errors.BadRequest,
                    '40725': errors.ExchangeError,
                    '40762': errors.InsufficientFunds,
                    '40774': errors.BadRequest,
                    '40808': errors.BadRequest,
                    '43001': errors.OrderNotFound,
                    '43002': errors.InvalidOrder,
                    '43004': errors.OrderNotFound,
                    '43005': errors.RateLimitExceeded,
                    '43006': errors.BadRequest,
                    '43007': errors.BadRequest,
                    '43008': errors.BadRequest,
                    '43009': errors.BadRequest,
                    '43010': errors.BadRequest,
                    '43011': errors.BadRequest,
                    '43012': errors.InsufficientFunds,
                    '43117': errors.InsufficientFunds,
                    '43118': errors.BadRequest,
                    '43122': errors.BadRequest,
                    '45006': errors.InsufficientFunds,
                    '45110': errors.BadRequest, // less than the minimum amount {0} {1}
                    // {"code":"40913","msg":"orderId or clientOrderId must be passed one","requestTime":1726160988275,"data":null}
                },
                'broad': {},
            },
            'precisionMode': number.TICK_SIZE,
        });
    }
    calculateRateLimiterCost(api, method, path, params, config = {}) {
        const step = this.safeInteger(config, 'step');
        const cost = this.safeInteger(config, 'cost', 1);
        const orders = this.safeList2(params, 'orderList', 'orderDataList', []);
        const ordersLength = orders.length;
        if ((step !== undefined) && (ordersLength > step)) {
            const numberOfSteps = Math.ceil(ordersLength / step);
            return cost * numberOfSteps;
        }
        else {
            return cost;
        }
    }
    /**
     * @method
     * @name coincatch#fetchTime
     * @description fetches the current integer timestamp in milliseconds from the exchange server
     * @see https://coincatch.github.io/github.io/en/spot/#get-server-time
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {int} the current integer timestamp in milliseconds from the exchange server
     */
    async fetchTime(params = {}) {
        const response = await this.publicGetApiSpotV1PublicTime(params);
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725046822028,
        //         "data": "1725046822028"
        //     }
        //
        return this.safeInteger(response, 'data');
    }
    /**
     * @method
     * @name coincatch#fetchCurrencies
     * @description fetches all available currencies on an exchange
     * @see https://coincatch.github.io/github.io/en/spot/#get-coin-list
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an associative dictionary of currencies
     */
    async fetchCurrencies(params = {}) {
        const response = await this.publicGetApiSpotV1PublicCurrencies(params);
        const data = this.safeList(response, 'data', []);
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725102364202,
        //         "data": [
        //             {
        //                 "coinId": "1",
        //                 "coinName": "BTC",
        //                 "transfer": "true",
        //                 "chains": [
        //                     {
        //                         "chainId": "10",
        //                         "chain": "BITCOIN",
        //                         "needTag": "false",
        //                         "withdrawable": "true",
        //                         "rechargeable": "true",
        //                         "withdrawFee": "0.0005",
        //                         "extraWithDrawFee": "0",
        //                         "depositConfirm": "1",
        //                         "withdrawConfirm": "1",
        //                         "minDepositAmount": "0.00001",
        //                         "minWithdrawAmount": "0.001",
        //                         "browserUrl": "https://blockchair.com/bitcoin/transaction/"
        //                     }
        //                 ]
        //             },
        //             ...
        //         ]
        //     }
        //
        const result = {};
        const currenciesIds = [];
        for (let i = 0; i < data.length; i++) {
            const currecy = data[i];
            const currencyId = this.safeString(currecy, 'coinName');
            currenciesIds.push(currencyId);
            const code = this.safeCurrencyCode(currencyId);
            const networks = this.safeList(currecy, 'chains');
            const parsedNetworks = {};
            for (let j = 0; j < networks.length; j++) {
                const network = networks[j];
                const networkId = this.safeString(network, 'chain');
                const networkCode = this.networkCodeToId(networkId);
                parsedNetworks[networkId] = {
                    'id': networkId,
                    'network': networkCode,
                    'limits': {
                        'deposit': {
                            'min': this.safeNumber(network, 'minDepositAmount'),
                            'max': undefined,
                        },
                        'withdraw': {
                            'min': this.safeNumber(network, 'minWithdrawAmount'),
                            'max': undefined,
                        },
                    },
                    'active': undefined,
                    'deposit': this.safeString(network, 'rechargeable') === 'true',
                    'withdraw': this.safeString(network, 'withdrawable') === 'true',
                    'fee': this.safeNumber(network, 'withdrawFee'),
                    'precision': undefined,
                    'info': network,
                };
            }
            result[code] = this.safeCurrencyStructure({
                'id': currencyId,
                'numericId': this.safeInteger(currecy, 'coinId'),
                'code': code,
                'precision': undefined,
                'type': undefined,
                'name': undefined,
                'active': undefined,
                'deposit': undefined,
                'withdraw': undefined,
                'fee': undefined,
                'limits': {
                    'deposit': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
                'networks': parsedNetworks,
                'info': currecy,
            });
        }
        if (this.safeList(this.options, 'currencyIdsListForParseMarket') === undefined) {
            this.options['currencyIdsListForParseMarket'] = currenciesIds;
        }
        return result;
    }
    /**
     * @method
     * @name coincatch#fetchDepositWithdrawFees
     * @description fetch deposit and withdraw fees
     * @see https://coincatch.github.io/github.io/en/spot/#get-coin-list
     * @param {string[]} [codes] list of unified currency codes
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a list of [fee structures]{@link https://docs.ccxt.com/#/?id=fee-structure}
     */
    async fetchDepositWithdrawFees(codes = undefined, params = {}) {
        await this.loadMarkets();
        const response = await this.publicGetApiSpotV1PublicCurrencies(params);
        const data = this.safeList(response, 'data', []);
        return this.parseDepositWithdrawFees(data, codes, 'coinName');
    }
    parseDepositWithdrawFee(fee, currency = undefined) {
        //
        // {
        //     "coinId":"1",
        //     "coinName":"BTC",
        //     "transfer":"true",
        //     "chains":[
        //         {
        //             "chain":null,
        //             "needTag":"false",
        //             "withdrawable":"true",
        //             "rechargeAble":"true",
        //             "withdrawFee":"0.005",
        //             "depositConfirm":"1",
        //             "withdrawConfirm":"1",
        //             "minDepositAmount":"0.001",
        //             "minWithdrawAmount":"0.001",
        //             "browserUrl":"https://blockchair.com/bitcoin/testnet/transaction/"
        //         }
        //     ]
        // }
        //
        const chains = this.safeList(fee, 'chains', []);
        const chainsLength = chains.length;
        const result = {
            'info': fee,
            'withdraw': {
                'fee': undefined,
                'percentage': undefined,
            },
            'deposit': {
                'fee': undefined,
                'percentage': undefined,
            },
            'networks': {},
        };
        for (let i = 0; i < chainsLength; i++) {
            const chain = chains[i];
            const networkId = this.safeString(chain, 'chain');
            const currencyCode = this.safeString(currency, 'code');
            const networkCode = this.networkIdToCode(networkId, currencyCode);
            result['networks'][networkCode] = {
                'deposit': { 'fee': undefined, 'percentage': undefined },
                'withdraw': { 'fee': this.safeNumber(chain, 'withdrawFee'), 'percentage': false },
            };
            if (chainsLength === 1) {
                result['withdraw']['fee'] = this.safeNumber(chain, 'withdrawFee');
                result['withdraw']['percentage'] = false;
            }
        }
        return result;
    }
    /**
     * @method
     * @name coincatch#fetchMarkets
     * @description retrieves data on all markets for the exchange
     * @see https://coincatch.github.io/github.io/en/spot/#get-all-tickers
     * @see https://coincatch.github.io/github.io/en/mix/#get-all-symbols
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} an array of objects representing market data
     */
    async fetchMarkets(params = {}) {
        let response = await this.publicGetApiSpotV1MarketTickers(params);
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725114040155,
        //         "data": [
        //             {
        //                 "symbol": "BTCUSDT",
        //                 "high24h": "59461.34",
        //                 "low24h": "57723.23",
        //                 "close": "59056.02",
        //                 "quoteVol": "18240112.23368",
        //                 "baseVol": "309.05564",
        //                 "usdtVol": "18240112.2336744",
        //                 "ts": "1725114038951",
        //                 "buyOne": "59055.85",
        //                 "sellOne": "59057.45",
        //                 "bidSz": "0.0139",
        //                 "askSz": "0.0139",
        //                 "openUtc0": "59126.71",
        //                 "changeUtc": "-0.0012",
        //                 "change": "0.01662"
        //             },
        //             ...
        //         ]
        //     }
        //
        if (this.safeList(this.options, 'currencyIdsListForParseMarket') === undefined) {
            await this.fetchCurrencies();
        }
        const spotMarkets = this.safeList(response, 'data', []);
        const request = {};
        let productType = undefined;
        [productType, params] = this.handleOptionAndParams(params, 'fetchMarkets', 'productType', productType);
        let swapMarkets = [];
        request['productType'] = 'umcbl';
        response = await this.publicGetApiMixV1MarketContracts(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725297439225,
        //         "data": [
        //             {
        //                 "symbol": "BTCUSDT_UMCBL",
        //                 "makerFeeRate": "0.0002",
        //                 "takerFeeRate": "0.0006",
        //                 "feeRateUpRatio": "0.005",
        //                 "openCostUpRatio": "0.01",
        //                 "quoteCoin": "USDT",
        //                 "baseCoin": "BTC",
        //                 "buyLimitPriceRatio": "0.01",
        //                 "sellLimitPriceRatio": "0.01",
        //                 "supportMarginCoins": [ "USDT" ],
        //                 "minTradeNum": "0.001",
        //                 "priceEndStep": "1",
        //                 "volumePlace": "3",
        //                 "pricePlace": "1",
        //                 "sizeMultiplier": "0.001",
        //                 "symbolType": "perpetual",
        //                 "symbolStatus": "normal",
        //                 "offTime": "-1",
        //                 "limitOpenTime": "-1",
        //                 "maintainTime": "",
        //                 "symbolName": "BTCUSDT",
        //                 "minTradeUSDT": null,
        //                 "maxPositionNum": null,
        //                 "maxOrderNum": null
        //             }
        //         ]
        //     }
        //
        const swapUMCBL = this.safeList(response, 'data', []);
        request['productType'] = 'dmcbl';
        response = await this.publicGetApiMixV1MarketContracts(this.extend(request, params));
        //
        //     {
        //         "code":"00000",
        //         "msg":"success",
        //         "requestTime":1725297439646,
        //         "data":[
        //             {
        //                 "symbol":"BTCUSD_DMCBL",
        //                 "makerFeeRate":"0.0002",
        //                 "takerFeeRate":"0.0006",
        //                 "feeRateUpRatio":"0.005",
        //                 "openCostUpRatio":"0.01",
        //                 "quoteCoin":"USD",
        //                 "baseCoin":"BTC",
        //                 "buyLimitPriceRatio":"0.01",
        //                 "sellLimitPriceRatio":"0.01",
        //                 "supportMarginCoins":[
        //                     "BTC",
        //                     "ETH"
        //                 ],
        //                 "minTradeNum":"0.001",
        //                 "priceEndStep":"1",
        //                 "volumePlace":"3",
        //                 "pricePlace":"1",
        //                 "sizeMultiplier":"0.001",
        //                 "symbolType":"perpetual",
        //                 "symbolStatus":"normal",
        //                 "offTime":"-1",
        //                 "limitOpenTime":"-1",
        //                 "maintainTime":"",
        //                 "symbolName":"BTCUSD",
        //                 "minTradeUSDT":null,
        //                 "maxPositionNum":null,
        //                 "maxOrderNum":null
        //             }
        //         ]
        //     }
        const swapDMCBL = this.safeList(response, 'data', []);
        const swapDMCBLExtended = [];
        for (let i = 0; i < swapDMCBL.length; i++) {
            const market = swapDMCBL[i];
            const supportMarginCoins = this.safeList(market, 'supportMarginCoins', []);
            for (let j = 0; j < supportMarginCoins.length; j++) {
                const settle = supportMarginCoins[j];
                const obj = {
                    'supportMarginCoins': [settle],
                };
                swapDMCBLExtended.push(this.extend(market, obj));
            }
        }
        swapMarkets = this.arrayConcat(swapUMCBL, swapDMCBLExtended);
        const markets = this.arrayConcat(spotMarkets, swapMarkets);
        return this.parseMarkets(markets);
    }
    parseMarket(market) {
        //
        // spot
        //     {
        //         "symbol": "BTCUSDT",
        //         "high24h": "59461.34",
        //         "low24h": "57723.23",
        //         "close": "59056.02",
        //         "quoteVol": "18240112.23368",
        //         "baseVol": "309.05564",
        //         "usdtVol": "18240112.2336744",
        //         "ts": "1725114038951",
        //         "buyOne": "59055.85",
        //         "sellOne": "59057.45",
        //         "bidSz": "0.0139",
        //         "askSz": "0.0139",
        //         "openUtc0": "59126.71",
        //         "changeUtc": "-0.0012",
        //         "change": "0.01662"
        //     },
        //
        // swap
        //     {
        //         "symbol": "BTCUSDT_UMCBL",
        //         "makerFeeRate": "0.0002",
        //         "takerFeeRate": "0.0006",
        //         "feeRateUpRatio": "0.005",
        //         "openCostUpRatio": "0.01",
        //         "quoteCoin": "USDT",
        //         "baseCoin": "BTC",
        //         "buyLimitPriceRatio": "0.01",
        //         "sellLimitPriceRatio": "0.01",
        //         "supportMarginCoins": [ "USDT" ],
        //         "minTradeNum": "0.001",
        //         "priceEndStep": "1",
        //         "volumePlace": "3",
        //         "pricePlace": "1",
        //         "sizeMultiplier": "0.001",
        //         "symbolType": "perpetual",
        //         "symbolStatus": "normal",
        //         "offTime": "-1",
        //         "limitOpenTime": "-1",
        //         "maintainTime": "",
        //         "symbolName": "BTCUSDT",
        //         "minTradeUSDT": null,
        //         "maxPositionNum": null,
        //         "maxOrderNum": null
        //     }
        //
        let marketId = this.safeString(market, 'symbol');
        const tradingFees = this.safeDict(this.fees, 'trading');
        const fees = this.safeDict(tradingFees, 'spot');
        let baseId = this.safeString(market, 'baseCoin');
        let quoteId = this.safeString(market, 'quoteCoin');
        let settleId = undefined;
        let suffix = '';
        let settle = undefined;
        let type = 'spot';
        let isLinear = undefined;
        let isInverse = undefined;
        let subType = undefined;
        const isSpot = baseId === undefined; // for now spot markets have no properties baseCoin and quoteCoin
        if (isSpot) {
            const parsedMarketId = this.parseSpotMarketId(marketId);
            baseId = this.safeString(parsedMarketId, 'baseId');
            quoteId = this.safeString(parsedMarketId, 'quoteId');
            marketId += '_SPBL'; // spot markets should have current suffix
        }
        else {
            type = 'swap';
            fees['taker'] = this.safeNumber(market, 'takerFeeRate');
            fees['maker'] = this.safeNumber(market, 'makerFeeRate');
            const supportMarginCoins = this.safeList(market, 'supportMarginCoins', []);
            settleId = this.safeString(supportMarginCoins, 0);
            settle = this.safeCurrencyCode(settleId);
            suffix = ':' + settle;
            isLinear = quoteId === settleId; // todo check
            isInverse = baseId === settleId; // todo check
            if (isLinear) {
                subType = 'linear';
            }
            else if (isInverse) {
                subType = 'inverse';
            }
        }
        const base = this.safeCurrencyCode(baseId);
        const quote = this.safeCurrencyCode(quoteId);
        const symbol = base + '/' + quote + suffix;
        const symbolStatus = this.safeString(market, 'symbolStatus');
        const active = symbolStatus ? (symbolStatus === 'normal') : undefined;
        const volumePlace = this.safeString(market, 'volumePlace');
        const amountPrecisionString = this.parsePrecision(volumePlace);
        const pricePlace = this.safeString(market, 'pricePlace');
        const priceEndStep = this.safeString(market, 'priceEndStep');
        const pricePrecisionString = Precise["default"].stringMul(this.parsePrecision(pricePlace), priceEndStep);
        return this.safeMarketStructure({
            'id': marketId,
            'symbol': symbol,
            'base': base,
            'quote': quote,
            'baseId': baseId,
            'quoteId': quoteId,
            'active': active,
            'type': type,
            'subType': subType,
            'spot': isSpot,
            'margin': isSpot ? false : undefined,
            'swap': !isSpot,
            'future': false,
            'option': false,
            'contract': !isSpot,
            'settle': settle,
            'settleId': settleId,
            'contractSize': this.safeNumber(market, 'sizeMultiplier'),
            'linear': isLinear,
            'inverse': isInverse,
            'taker': this.safeNumber(fees, 'taker'),
            'maker': this.safeNumber(fees, 'maker'),
            'percentage': this.safeBool(fees, 'percentage'),
            'tierBased': this.safeBool(fees, 'tierBased'),
            'feeSide': this.safeString(fees, 'feeSide'),
            'expiry': undefined,
            'expiryDatetime': undefined,
            'strike': undefined,
            'optionType': undefined,
            'precision': {
                'amount': this.parseNumber(amountPrecisionString),
                'price': this.parseNumber(pricePrecisionString),
            },
            'limits': {
                'amount': {
                    'min': this.safeNumber(market, 'minTradeNum'),
                    'max': undefined,
                },
                'price': {
                    'min': undefined,
                    'max': undefined,
                },
                'leverage': {
                    'min': undefined,
                    'max': undefined,
                },
                'cost': {
                    'min': undefined,
                    'max': undefined,
                },
            },
            'created': undefined,
            'info': market,
        });
    }
    parseSpotMarketId(marketId) {
        let baseId = undefined;
        let quoteId = undefined;
        const currencyIds = this.safeList(this.options, 'currencyIdsListForParseMarket', []);
        for (let i = 0; i < currencyIds.length; i++) {
            const currencyId = currencyIds[i];
            const entryIndex = marketId.indexOf(currencyId);
            if (entryIndex > -1) {
                const restId = marketId.replace(currencyId, '');
                if (entryIndex === 0) {
                    baseId = currencyId;
                    quoteId = restId;
                }
                else {
                    baseId = restId;
                    quoteId = currencyId;
                }
                break;
            }
        }
        const result = {
            'baseId': baseId,
            'quoteId': quoteId,
        };
        return result;
    }
    /**
     * @method
     * @name coincatch#fetchTicker
     * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
     * @see https://coincatch.github.io/github.io/en/spot/#get-single-ticker
     * @see https://coincatch.github.io/github.io/en/mix/#get-single-symbol-ticker
     * @param {string} symbol unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTicker(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        let response = undefined;
        if (market['spot']) {
            response = await this.publicGetApiSpotV1MarketTicker(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725132487751,
            //         "data": {
            //             "symbol": "ETHUSDT",
            //             "high24h": "2533.76",
            //             "low24h": "2492.72",
            //             "close": "2499.76",
            //             "quoteVol": "21457850.7442",
            //             "baseVol": "8517.1869",
            //             "usdtVol": "21457850.744163",
            //             "ts": "1725132487476",
            //             "buyOne": "2499.75",
            //             "sellOne": "2499.76",
            //             "bidSz": "0.5311",
            //             "askSz": "4.5806",
            //             "openUtc0": "2525.69",
            //             "changeUtc": "-0.01027",
            //             "change": "-0.00772"
            //         }
            //     }
            //
        }
        else if (market['swap']) {
            response = await this.publicGetApiMixV1MarketTicker(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725316687174,
            //         "data": {
            //             "symbol": "ETHUSDT_UMCBL",
            //             "last": "2540.6",
            //             "bestAsk": "2540.71",
            //             "bestBid": "2540.38",
            //             "bidSz": "12.1",
            //             "askSz": "20",
            //             "high24h": "2563.91",
            //             "low24h": "2398.3",
            //             "timestamp": "1725316687177",
            //             "priceChangePercent": "0.01134",
            //             "baseVolume": "706928.96",
            //             "quoteVolume": "1756401737.8766",
            //             "usdtVolume": "1756401737.8766",
            //             "openUtc": "2424.49",
            //             "chgUtc": "0.04789",
            //             "indexPrice": "2541.977142",
            //             "fundingRate": "0.00006",
            //             "holdingAmount": "144688.49",
            //             "deliveryStartTime": null,
            //             "deliveryTime": null,
            //             "deliveryStatus": "normal"
            //         }
            //     }
            //
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + 'fetchTicker() is not supported for ' + market['type'] + ' type of markets');
        }
        const data = this.safeDict(response, 'data', {});
        return this.parseTicker(data, market);
    }
    /**
     * @method
     * @name coincatch#fetchTickers
     * @description fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market
     * @see https://coincatch.github.io/github.io/en/spot/#get-all-tickers
     * @see https://coincatch.github.io/github.io/en/mix/#get-all-symbol-ticker
     * @param {string[]} [symbols] unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.type] 'spot' or 'swap' (default 'spot')
     * @param {string} [params.productType] 'umcbl' or 'dmcbl' (default 'umcbl') - USDT perpetual contract or Universal margin perpetual contract
     * @returns {object} a dictionary of [ticker structures]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTickers(symbols = undefined, params = {}) {
        const methodName = 'fetchTickers';
        await this.loadMarkets();
        symbols = this.marketSymbols(symbols, undefined, true, true);
        const market = this.getMarketFromSymbols(symbols);
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
        let response = undefined;
        if (marketType === 'spot') {
            response = await this.publicGetApiSpotV1MarketTickers(params);
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725114040155,
            //         "data": [
            //             {
            //                 "symbol": "BTCUSDT",
            //                 "high24h": "59461.34",
            //                 "low24h": "57723.23",
            //                 "close": "59056.02",
            //                 "quoteVol": "18240112.23368",
            //                 "baseVol": "309.05564",
            //                 "usdtVol": "18240112.2336744",
            //                 "ts": "1725114038951",
            //                 "buyOne": "59055.85",
            //                 "sellOne": "59057.45",
            //                 "bidSz": "0.0139",
            //                 "askSz": "0.0139",
            //                 "openUtc0": "59126.71",
            //                 "changeUtc": "-0.0012",
            //                 "change": "0.01662"
            //             },
            //             ...
            //         ]
            //     }
            //
        }
        else if (marketType === 'swap') {
            let productType = 'umcbl';
            [productType, params] = this.handleOptionAndParams(params, methodName, 'productType', productType);
            const request = {
                'productType': productType,
            };
            response = await this.publicGetApiMixV1MarketTickers(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725320291340,
            //         "data": [
            //             {
            //                 "symbol": "BTCUSDT_UMCBL",
            //                 "last": "59110.5",
            //                 "bestAsk": "59113.2",
            //                 "bestBid": "59109.5",
            //                 "bidSz": "1.932",
            //                 "askSz": "0.458",
            //                 "high24h": "59393.5",
            //                 "low24h": "57088.5",
            //                 "timestamp": "1725320291347",
            //                 "priceChangePercent": "0.01046",
            //                 "baseVolume": "59667.001",
            //                 "quoteVolume": "3472522256.9927",
            //                 "usdtVolume": "3472522256.9927",
            //                 "openUtc": "57263",
            //                 "chgUtc": "0.03231",
            //                 "indexPrice": "59151.25442",
            //                 "fundingRate": "0.00007",
            //                 "holdingAmount": "25995.377",
            //                 "deliveryStartTime": null,
            //                 "deliveryTime": null,
            //                 "deliveryStatus": "normal"}
            //             },
            //             ...
            //         ]
            //     }
            //
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const data = this.safeList(response, 'data', []);
        return this.parseTickers(data, symbols);
    }
    parseTicker(ticker, market = undefined) {
        //
        // spot
        //     {
        //         "symbol": "BTCUSDT",
        //         "high24h": "59461.34",
        //         "low24h": "57723.23",
        //         "close": "59056.02",
        //         "quoteVol": "18240112.23368",
        //         "baseVol": "309.05564",
        //         "usdtVol": "18240112.2336744",
        //         "ts": "1725114038951",
        //         "buyOne": "59055.85",
        //         "sellOne": "59057.45",
        //         "bidSz": "0.0139",
        //         "askSz": "0.0139",
        //         "openUtc0": "59126.71",
        //         "changeUtc": "-0.0012",
        //         "change": "0.01662"
        //     }
        //
        // swap
        //     {
        //         "symbol": "ETHUSDT_UMCBL",
        //         "last": "2540.6",
        //         "bestAsk": "2540.71",
        //         "bestBid": "2540.38",
        //         "bidSz": "12.1",
        //         "askSz": "20",
        //         "high24h": "2563.91",
        //         "low24h": "2398.3",
        //         "timestamp": "1725316687177",
        //         "priceChangePercent": "0.01134",
        //         "baseVolume": "706928.96",
        //         "quoteVolume": "1756401737.8766",
        //         "usdtVolume": "1756401737.8766",
        //         "openUtc": "2424.49",
        //         "chgUtc": "0.04789",
        //         "indexPrice": "2541.977142",
        //         "fundingRate": "0.00006",
        //         "holdingAmount": "144688.49",
        //         "deliveryStartTime": null,
        //         "deliveryTime": null,
        //         "deliveryStatus": "normal"
        //     }
        //
        const timestamp = this.safeInteger2(ticker, 'ts', 'timestamp');
        let marketId = this.safeString(ticker, 'symbol', '');
        if (marketId.indexOf('_') < 0) {
            marketId += '_SPBL'; // spot markets from tickers endpoints have no suffix specific for market id
        }
        market = this.safeMarketCustom(marketId, market);
        const last = this.safeString2(ticker, 'close', 'last');
        return this.safeTicker({
            'symbol': market['symbol'],
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'high': this.safeString(ticker, 'high24h'),
            'low': this.safeString(ticker, 'low24h'),
            'bid': this.safeString2(ticker, 'buyOne', 'bestBid'),
            'bidVolume': this.safeString(ticker, 'bidSz'),
            'ask': this.safeString2(ticker, 'sellOne', 'bestAsk'),
            'askVolume': this.safeString(ticker, 'askSz'),
            'vwap': undefined,
            'open': this.safeString2(ticker, 'openUtc0', 'openUtc'),
            'close': last,
            'last': last,
            'previousClose': undefined,
            'change': undefined,
            'percentage': Precise["default"].stringMul(this.safeString2(ticker, 'changeUtc', 'chgUtc'), '100'),
            'average': undefined,
            'baseVolume': this.safeString2(ticker, 'baseVol', 'baseVolume'),
            'quoteVolume': this.safeString2(ticker, 'quoteVol', 'quoteVolume'),
            'indexPrice': this.safeString(ticker, 'indexPrice'),
            'markPrice': undefined,
            'info': ticker,
        }, market);
    }
    /**
     * @method
     * @name coincatch#fetchOrderBook
     * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
     * @see https://coincatch.github.io/github.io/en/spot/#get-merged-depth-data
     * @see https://coincatch.github.io/github.io/en/mix/#get-merged-depth-data
     * @param {string} symbol unified symbol of the market to fetch the order book for
     * @param {int} [limit] the maximum amount of order book entries to return (maximum and default value is 100)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.precision] 'scale0' (default), 'scale1', 'scale2' or 'scale3' - price accuracy, according to the selected accuracy as the step size to return the cumulative depth
     * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
     */
    async fetchOrderBook(symbol, limit = undefined, params = {}) {
        await this.loadMarkets();
        const methodName = 'fetchOrderBook';
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        let precision = undefined;
        [precision, params] = this.handleOptionAndParams(params, methodName, 'precision');
        if (precision !== undefined) {
            request['precision'] = precision;
        }
        let response = undefined;
        if (market['spot']) {
            response = await this.publicGetApiSpotV1MarketMergeDepth(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725137170814,
            //         "data": {
            //             "asks": [ [ 2507.07, 0.4248 ] ],
            //             "bids": [ [ 2507.05, 0.1198 ] ],
            //             "ts": "1725137170850",
            //             "scale": "0.01",
            //             "precision": "scale0",
            //             "isMaxPrecision": "NO"
            //         }
            //     }
            //
        }
        else if (market['swap']) {
            response = await this.publicGetApiMixV1MarketMergeDepth(this.extend(request, params));
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
        const data = this.safeDict(response, 'data', {});
        const timestamp = this.safeInteger(data, 'ts');
        return this.parseOrderBook(data, symbol, timestamp, 'bids', 'asks');
    }
    /**
     * @method
     * @name coincatch#fetchOHLCV
     * @see https://coincatch.github.io/github.io/en/spot/#get-candle-data
     * @see https://coincatch.github.io/github.io/en/mix/#get-candle-data
     * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
     * @param {string} symbol unified symbol of the market to fetch OHLCV data for
     * @param {string} timeframe the length of time each candle represents
     * @param {int} [since] timestamp in ms of the earliest candle to fetch
     * @param {int} [limit] the maximum amount of candles to fetch (default 100)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] timestamp in ms of the latest candle to fetch
     * @param {string} [params.price] "mark" for mark price candles
     * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
     */
    async fetchOHLCV(symbol, timeframe = '1m', since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchOHLCV';
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        let until = undefined;
        [until, params] = this.handleOptionAndParams(params, methodName, 'until');
        const marketType = market['type'];
        const timeframes = this.options['timeframes'][marketType];
        const encodedTimeframe = this.safeString(timeframes, timeframe, timeframe);
        const maxLimit = 1000;
        let requestedLimit = limit;
        if ((since !== undefined) || (until !== undefined)) {
            requestedLimit = maxLimit; // the exchange returns only last limit candles, so we have to fetch max limit if since or until are provided
        }
        if (requestedLimit !== undefined) {
            request['limit'] = requestedLimit;
        }
        let response = undefined;
        if (market['spot']) {
            request['period'] = encodedTimeframe;
            if (since !== undefined) {
                request['after'] = since;
            }
            if (until !== undefined) {
                request['before'] = until;
            }
            response = await this.publicGetApiSpotV1MarketCandles(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725142465742,
            //         "data": [
            //             {
            //                 "open": "2518.6",
            //                 "high": "2519.19",
            //                 "low": "2518.42",
            //                 "close": "2518.86",
            //                 "quoteVol": "17193.239401",
            //                 "baseVol": "6.8259",
            //                 "usdtVol": "17193.239401",
            //                 "ts": "1725142200000"
            //             },
            //             ...
            //         ]
            //     }
            //
            const data = this.safeList(response, 'data', []);
            return this.parseOHLCVs(data, market, timeframe, since, limit);
        }
        else if (market['swap']) {
            request['granularity'] = encodedTimeframe;
            if (until === undefined) {
                until = this.milliseconds();
            }
            if (since === undefined) {
                const duration = this.parseTimeframe(timeframe);
                since = until - (duration * maxLimit * 1000);
            }
            request['startTime'] = since; // since and until are mandatory for swap
            request['endTime'] = until;
            let priceType = undefined;
            [priceType, params] = this.handleOptionAndParams(params, methodName, 'price');
            if (priceType === 'mark') {
                request['kLineType'] = 'market mark index';
            }
            response = await this.publicGetApiMixV1MarketCandles(this.extend(request, params));
            //
            //     [
            //         [
            //             "1725379020000",
            //             "57614",
            //             "57636",
            //             "57614",
            //             "57633",
            //             "28.725",
            //             "1655346.493"
            //         ],
            //         ...
            //     ]
            //
            return this.parseOHLCVs(response, market, timeframe, since, limit);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
    }
    parseOHLCV(ohlcv, market = undefined) {
        return [
            this.safeInteger2(ohlcv, 'ts', 0),
            this.safeNumber2(ohlcv, 'open', 1),
            this.safeNumber2(ohlcv, 'high', 2),
            this.safeNumber2(ohlcv, 'low', 3),
            this.safeNumber2(ohlcv, 'close', 4),
            this.safeNumber2(ohlcv, 'baseVol', 5),
        ];
    }
    /**
     * @method
     * @name coincatch#fetchTrades
     * @description get the list of most recent trades for a particular symbol
     * @see https://coincatch.github.io/github.io/en/spot/#get-recent-trades
     * @see https://coincatch.github.io/github.io/en/mix/#get-fills
     * @param {string} symbol unified symbol of the market to fetch trades for
     * @param {int} [since] timestamp in ms of the earliest trade to fetch
     * @param {int} [limit] the maximum amount of trades to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] timestamp in ms of the latest entry to fetch
     * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
     */
    async fetchTrades(symbol, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchTrades';
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        let until = undefined;
        [until, params] = this.handleOptionAndParams(params, methodName, 'until');
        const maxLimit = 1000;
        let requestLimit = limit;
        if ((since !== undefined) || (until !== undefined)) {
            requestLimit = maxLimit;
            if (since !== undefined) {
                request['startTime'] = since;
            }
            if (until !== undefined) {
                request['endTime'] = until;
            }
        }
        if (requestLimit !== undefined) {
            request['limit'] = requestLimit;
        }
        let response = undefined;
        if (market['spot']) {
            response = await this.publicGetApiSpotV1MarketFillsHistory(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725198410976,
            //         "data": [
            //             {
            //                 "symbol": "ETHUSDT_SPBL",
            //                 "tradeId": "1214135619719827457",
            //                 "side": "buy",
            //                 "fillPrice": "2458.62",
            //                 "fillQuantity": "0.4756",
            //                 "fillTime": "1725198409967"
            //             }
            //         ]
            //     }
            //
        }
        else if (market['swap']) {
            response = await this.publicGetApiMixV1MarketFillsHistory(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725389251975,
            //         "data": [
            //             {
            //                 "tradeId": "1214936067582234782",
            //                 "price": "57998.5",
            //                 "size": "1.918",
            //                 "side": "Sell",
            //                 "timestamp": "1725389251000",
            //                 "symbol": "BTCUSDT_UMCBL"
            //             },
            //             ...
            //         ]
            //     }
            //
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
        const data = this.safeList(response, 'data', []);
        return this.parseTrades(data, market, since, limit);
    }
    parseTrade(trade, market = undefined) {
        //
        // fetchTrades spot
        //     {
        //         "symbol": "ETHUSDT_SPBL",
        //         "tradeId": "1214135619719827457",
        //         "side": "Buy",
        //         "fillPrice": "2458.62",
        //         "fillQuantity": "0.4756",
        //         "fillTime": "1725198409967"
        //     }
        //
        // fetchTrades swap
        //     {
        //         "tradeId": "1214936067582234782",
        //         "price": "57998.5",
        //         "size": "1.918",
        //         "side": "Sell",
        //         "timestamp": "1725389251000",
        //         "symbol": "BTCUSDT_UMCBL"
        //     }
        //
        // fetchMyTrades spot
        //     {
        //         "accountId": "1002820815393",
        //         "symbol": "ETHUSDT_SPBL",
        //         "orderId": "1217143186968068096",
        //         "fillId": "1217143193356505089",
        //         "orderType": "market",
        //         "side": "buy",
        //         "fillPrice": "2340.55",
        //         "fillQuantity": "0.0042",
        //         "fillTotalAmount": "9.83031",
        //         "feeCcy": "ETH",
        //         "fees": "-0.0000042",
        //         "takerMakerFlag": "taker",
        //         "cTime": "1725915471400"
        //     }
        //
        // fetchMyTrades swap
        //     {
        //         "tradeId": "1225467075440189441",
        //         "symbol": "ETHUSD_DMCBL",
        //         "orderId": "1225467075288719360",
        //         "price": "2362.03",
        //         "sizeQty": "0.1",
        //         "fee": "-0.00005996",
        //         "side": "burst_close_long",
        //         "fillAmount": "236.203",
        //         "profit": "-0.0083359",
        //         "enterPointSource": "SYS",
        //         "tradeSide": "burst_close_long",
        //         "holdMode": "double_hold",
        //         "takerMakerFlag": "taker",
        //         "cTime": "1727900039539"
        //     }
        //
        const marketId = this.safeString(trade, 'symbol');
        market = this.safeMarketCustom(marketId, market);
        const timestamp = this.safeIntegerN(trade, ['fillTime', 'timestamp', 'cTime']);
        const fees = this.safeString2(trade, 'fees', 'fee');
        let feeCost = undefined;
        if (fees !== undefined) {
            feeCost = Precise["default"].stringAbs(fees);
        }
        let feeCurrency = this.safeString(trade, 'feeCcy');
        if ((feeCurrency === undefined) && (market['settle'] !== undefined)) {
            feeCurrency = market['settle'];
        }
        const side = this.safeStringLower2(trade, 'tradeSide', 'side');
        return this.safeTrade({
            'id': this.safeString2(trade, 'tradeId', 'fillId'),
            'order': this.safeString(trade, 'orderId'),
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'symbol': market['symbol'],
            'type': this.safeString(trade, 'orderType'),
            'side': this.parseOrderSide(side),
            'takerOrMaker': this.safeString(trade, 'takerMakerFlag'),
            'price': this.safeString2(trade, 'fillPrice', 'price'),
            'amount': this.safeStringN(trade, ['fillQuantity', 'size', 'sizeQty']),
            'cost': this.safeString2(trade, 'fillTotalAmount', 'fillAmount'),
            'fee': {
                'cost': feeCost,
                'currency': feeCurrency,
            },
            'info': trade,
        }, market);
    }
    /**
     * @method
     * @name coincatch#fetchFundingRate
     * @description fetch the current funding rate
     * @see https://coincatch.github.io/github.io/en/mix/#get-current-funding-rate
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [funding rate structure]{@link https://docs.ccxt.com/#/?id=funding-rate-structure}
     */
    async fetchFundingRate(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const marketId = market['id'];
        const parts = marketId.split('_');
        const request = {
            'symbol': marketId,
            'productType': this.safeString(parts, 1),
        };
        const response = await this.publicGetApiMixV1MarketCurrentFundRate(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725402130395,
        //         "data": {
        //             "symbol": "BTCUSDT_UMCBL",
        //             "fundingRate": "0.000043"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseFundingRate(data, market);
    }
    parseFundingRate(contract, market = undefined) {
        const marketId = this.safeString(contract, 'symbol');
        market = this.safeMarketCustom(marketId, market);
        const fundingRate = this.safeNumber(contract, 'fundingRate');
        return {
            'info': contract,
            'symbol': market['symbol'],
            'markPrice': undefined,
            'indexPrice': undefined,
            'interestRate': undefined,
            'estimatedSettlePrice': undefined,
            'timestamp': undefined,
            'datetime': undefined,
            'fundingRate': fundingRate,
            'fundingTimestamp': undefined,
            'fundingDatetime': undefined,
            'nextFundingRate': undefined,
            'nextFundingTimestamp': undefined,
            'nextFundingDatetime': undefined,
            'previousFundingRate': undefined,
            'previousFundingTimestamp': undefined,
            'previousFundingDatetime': undefined,
        };
    }
    handleOptionParamsAndRequest(params, methodName, optionName, request, requestProperty, defaultValue = undefined) {
        const [option, paramsOmited] = this.handleOptionAndParams(params, methodName, optionName, defaultValue);
        if (option !== undefined) {
            request[requestProperty] = option;
        }
        return [request, paramsOmited];
    }
    /**
     * @method
     * @name coincatch#fetchFundingRateHistory
     * @description fetches historical funding rate prices
     * @see https://coincatch.github.io/github.io/en/mix/#get-history-funding-rate
     * @param {string} symbol unified symbol of the market to fetch the funding rate history for
     * @param {int} [since] timestamp in ms of the earliest funding rate to fetch
     * @param {int} [limit] the maximum amount of entries to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.pageNo] the page number to fetch
     * @param {bool} [params.nextPage] whether to query the next page (default false)
     * @returns {object[]} a list of [funding rate structures]{@link https://docs.ccxt.com/#/?id=funding-rate-history-structure}
     */
    async fetchFundingRateHistory(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' fetchFundingRateHistory() requires a symbol argument');
        }
        await this.loadMarkets();
        const maxEntriesPerRequest = 100;
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        let requestedLimit = limit;
        if (since !== undefined) {
            requestedLimit = maxEntriesPerRequest;
        }
        if (requestedLimit !== undefined) {
            request['pageSize'] = requestedLimit;
        }
        const response = await this.publicGetApiMixV1MarketHistoryFundRate(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725455810888,
        //         "data": [
        //             {
        //                 "symbol": "BTCUSD",
        //                 "fundingRate": "0.000635",
        //                 "settleTime": "1724889600000"
        //             }
        //         ]
        //     }
        //
        const data = this.safeList(response, 'data', []);
        const rates = [];
        for (let i = 0; i < data.length; i++) {
            const entry = data[i];
            const timestamp = this.safeInteger(entry, 'settleTime');
            rates.push({
                'info': entry,
                'symbol': this.safeSymbol(this.safeString(entry, 'symbol'), market, undefined, 'swap'),
                'fundingRate': this.safeNumber(entry, 'fundingRate'),
                'timestamp': timestamp,
                'datetime': this.iso8601(timestamp),
            });
        }
        const sorted = this.sortBy(rates, 'timestamp');
        return this.filterBySinceLimit(sorted, since, limit);
    }
    /**
     * @method
     * @name coincatch#fetchBalance
     * @description query for balance and get the amount of funds available for trading or funds locked in orders
     * @see https://coincatch.github.io/github.io/en/spot/#get-account-assets
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.type] 'spot' or 'swap' - the type of the market to fetch balance for (default 'spot')
     * @param {string} [params.productType] *swap only* 'umcbl' or 'dmcbl' (default 'umcbl')
     * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
     */
    async fetchBalance(params = {}) {
        await this.loadMarkets();
        const methodName = 'fetchBalance';
        let marketType = undefined;
        [marketType, params] = this.handleMarketTypeAndParams(methodName, undefined, params);
        let response = undefined;
        if (marketType === 'spot') {
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725202685986,
            //         "data": [
            //             {
            //                 "coinId": 2,
            //                 "coinName": "USDT",
            //                 "available": "99.20000000",
            //                 "frozen": "0.00000000",
            //                 "lock": "0.00000000",
            //                 "uTime": "1724938746000"
            //             }
            //         ]
            //     }
            //
            response = await this.privateGetApiSpotV1AccountAssets(params);
        }
        else if (marketType === 'swap') {
            let productType = 'umcbl';
            [productType, params] = this.handleOptionAndParams(params, methodName, 'productType', productType);
            const request = {
                'productType': productType,
            };
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1726666298135,
            //         "data": [
            //             {
            //                 "marginCoin": "USDT",
            //                 "locked": "0",
            //                 "available": "60",
            //                 "crossMaxAvailable": "60",
            //                 "fixedMaxAvailable": "60",
            //                 "maxTransferOut": "60",
            //                 "equity": "60",
            //                 "usdtEquity": "60",
            //                 "btcEquity": "0.001002360626",
            //                 "crossRiskRate": "0",
            //                 "unrealizedPL": "0",
            //                 "bonus": "0",
            //                 "crossedUnrealizedPL": null,
            //                 "isolatedUnrealizedPL": null
            //             }
            //         ]
            //     }
            //
            response = await this.privateGetApiMixV1AccountAccounts(this.extend(request, params));
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const data = this.safeList(response, 'data', []);
        return this.parseBalance(data);
    }
    parseBalance(balances) {
        //
        // spot
        //     [
        //         {
        //             "coinId": 2,
        //             "coinName": "USDT",
        //             "available": "99.20000000",
        //             "frozen": "0.00000000",
        //             "lock": "0.00000000",
        //             "uTime": "1724938746000"
        //         }
        //     ]
        //
        // swap
        //     [
        //         {
        //             "marginCoin": "USDT",
        //             "locked": "0",
        //             "available": "60",
        //             "crossMaxAvailable": "60",
        //             "fixedMaxAvailable": "60",
        //             "maxTransferOut": "60",
        //             "equity": "60",
        //             "usdtEquity": "60",
        //             "btcEquity": "0.001002360626",
        //             "crossRiskRate": "0",
        //             "unrealizedPL": "0",
        //             "bonus": "0",
        //             "crossedUnrealizedPL": null,
        //             "isolatedUnrealizedPL": null
        //         }
        //     ]
        //
        const result = {
            'info': balances,
        };
        for (let i = 0; i < balances.length; i++) {
            const balanceEntry = this.safeDict(balances, i, {});
            const currencyId = this.safeString2(balanceEntry, 'coinName', 'marginCoin');
            const code = this.safeCurrencyCode(currencyId);
            const account = this.account();
            account['free'] = this.safeString(balanceEntry, 'available');
            const locked = this.safeString2(balanceEntry, 'lock', 'locked');
            const frozen = this.safeString(balanceEntry, 'frozen', '0');
            account['used'] = Precise["default"].stringAdd(locked, frozen);
            account['total'] = this.safeString(balanceEntry, 'equity');
            result[code] = account;
        }
        return this.safeBalance(result);
    }
    /**
     * @method
     * @name coincatch#transfer
     * @description transfer currency internally between wallets on the same account
     * @see https://coincatch.github.io/github.io/en/spot/#transfer
     * @param {string} code unified currency code
     * @param {float} amount amount to transfer
     * @param {string} fromAccount 'spot' or 'swap' or 'mix_usdt' or 'mix_usd' - account to transfer from
     * @param {string} toAccount 'spot' or 'swap' or 'mix_usdt' or 'mix_usd' - account to transfer to
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.clientOrderId] a unique id for the transfer
     * @returns {object} a [transfer structure]{@link https://docs.ccxt.com/#/?id=transfer-structure}
     */
    async transfer(code, amount, fromAccount, toAccount, params = {}) {
        await this.loadMarkets();
        const currency = this.currency(code);
        if (fromAccount === 'swap') {
            if (code === 'USDT') {
                fromAccount = 'mix_usdt';
            }
            else {
                fromAccount = 'mix_usd';
            }
        }
        if (toAccount === 'swap') {
            if (code === 'USDT') {
                toAccount = 'mix_usdt';
            }
            else {
                toAccount = 'mix_usd';
            }
        }
        const request = {
            'coin': currency['id'],
            'amount': this.currencyToPrecision(code, amount),
            'fromType': fromAccount,
            'toType': toAccount,
        };
        let clientOrderId = undefined;
        [clientOrderId, params] = this.handleOptionAndParams(params, 'transfer', 'clientOrderId');
        if (clientOrderId !== undefined) {
            request['clientOid'] = clientOrderId;
        }
        const response = await this.privatePostApiSpotV1WalletTransferV2(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726664727436,
        //         "data": {
        //             "transferId": "1220285801129066496",
        //             "clientOrderId": null
        //         }
        //     }
        //
        return this.parseTransfer(response, currency);
    }
    parseTransfer(transfer, currency = undefined) {
        const msg = this.safeString(transfer, 'msg');
        let status = undefined;
        if (msg === 'success') {
            status = 'ok';
        }
        const data = this.safeDict(transfer, 'data', {});
        return {
            'id': this.safeString(data, 'transferId'),
            'timestamp': undefined,
            'datetime': undefined,
            'currency': this.safeCurrencyCode(undefined, currency),
            'amount': undefined,
            'fromAccount': undefined,
            'toAccount': undefined,
            'status': status,
            'info': transfer,
        };
    }
    /**
     * @method
     * @name coincatch#fetchDepositAddress
     * @description fetch the deposit address for a currency associated with this account
     * @see https://coincatch.github.io/github.io/en/spot/#get-coin-address
     * @param {string} code unified currency code
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.network] network for fetch deposit address
     * @returns {object} an [address structure]{@link https://docs.ccxt.com/#/?id=address-structure}
     */
    async fetchDepositAddress(code, params = {}) {
        await this.loadMarkets();
        const currency = this.currency(code);
        const request = {
            'coin': currency['id'],
        };
        let networkCode = undefined;
        [networkCode, params] = this.handleNetworkCodeAndParams(params);
        if (networkCode === undefined) {
            networkCode = this.defaultNetworkCode(code);
        }
        if (networkCode === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' fetchDepositAddress() requires a network parameter or a default network code');
        }
        request['chain'] = this.networkCodeToId(networkCode, code);
        const response = await this.privateGetApiSpotV1WalletDepositAddress(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725210515143,
        //         "data": {
        //             "coin": "USDT",
        //             "address": "TKTUt7qiTaMgnTwZXjE3ZBkPB6LKhLPJyZ",
        //             "chain": "TRC20",
        //             "tag": null,
        //             "url": "https://tronscan.org/#/transaction/"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        const depositAddress = this.parseDepositAddress(data, currency);
        return depositAddress;
    }
    parseDepositAddress(depositAddress, currency = undefined) {
        //
        //     {
        //         "coin": "USDT",
        //         "address": "TKTUt7qiTaMgnTwZXjE3ZBkPB6LKhLPJyZ",
        //         "chain": "TRC20",
        //         "tag": null,
        //         "url": "https://tronscan.org/#/transaction/"
        //     }
        //
        const address = this.safeString(depositAddress, 'address');
        this.checkAddress(address);
        const networkId = this.safeString(depositAddress, 'chain');
        const network = this.safeString(this.options['networksById'], networkId, networkId);
        const tag = this.safeString(depositAddress, 'tag');
        return {
            'currency': currency['code'],
            'address': address,
            'tag': tag,
            'network': network,
            'info': depositAddress,
        };
    }
    /**
     * @method
     * @name coincatch#fetchDeposits
     * @description fetch all deposits made to an account
     * @see https://coincatch.github.io/github.io/en/spot/#get-deposit-list
     * @param {string} code unified currency code of the currency transferred
     * @param {int} [since] the earliest time in ms to fetch transfers for (default 24 hours ago)
     * @param {int} [limit] the maximum number of transfer structures to retrieve (not used by exchange)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] the latest time in ms to fetch transfers for (default time now)
     * @param {int} [params.pageNo] pageNo default 1
     * @param {int} [params.pageSize] pageSize (default 20, max 100)
     * @returns {object[]} a list of [transfer structures]{@link https://docs.ccxt.com/#/?id=transfer-structure}
     */
    async fetchDeposits(code = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchDeposits';
        await this.loadMarkets();
        const request = {};
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency(code);
            request['coin'] = currency['id'];
        }
        if (since !== undefined) {
            request['startTime'] = since;
        }
        let until = undefined;
        [until, params] = this.handleOptionAndParams(params, methodName, 'until');
        if (until !== undefined) {
            request['endTime'] = until;
        }
        const response = await this.privateGetApiSpotV1WalletDepositList(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1725205525239,
        //         "data": [
        //             {
        //                 "id": "1213046466852196352",
        //                 "txId": "824246b030cd84d56400661303547f43a1d9fef66cf968628dd5112f362053ff",
        //                 "coin": "USDT",
        //                 "type": "deposit",
        //                 "amount": "99.20000000",
        //                 "status": "success",
        //                 "toAddress": "TKTUt7qiTaMgnTwZXjE3ZBkPB6LKhLPJyZ",
        //                 "fee": null,
        //                 "chain": "TRX(TRC20)",
        //                 "confirm": null,
        //                 "clientOid": null,
        //                 "tag": null,
        //                 "fromAddress": null,
        //                 "dest": "on_chain",
        //                 "cTime": "1724938735688",
        //                 "uTime": "1724938746015"
        //             }
        //         ]
        //     }
        //
        const data = this.safeList(response, 'data', []);
        return this.parseTransactions(data, currency, since, limit);
    }
    /**
     * @method
     * @name coincatch#fetchWithdrawals
     * @description fetch all withdrawals made from an account
     * @see https://coincatch.github.io/github.io/en/spot/#get-withdraw-list-v2
     * @param {string} code unified currency code of the currency transferred
     * @param {int} [since] the earliest time in ms to fetch transfers for (default 24 hours ago)
     * @param {int} [limit] the maximum number of transfer structures to retrieve (default 50, max 200)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] the latest time in ms to fetch transfers for (default time now)
     * @param {string} [params.clientOid] clientOid
     * @param {string} [params.orderId] The response orderId
     * @param {string} [params.idLessThan] Requests the content on the page before this ID (older data), the value input should be the orderId of the corresponding interface.
     * @returns {object[]} a list of [transaction structures]{@link https://docs.ccxt.com/#/?id=transaction-structure}
     */
    async fetchWithdrawals(code = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchWithdrawals';
        await this.loadMarkets();
        const request = {};
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency(code);
            request['coin'] = currency['id'];
        }
        if (since !== undefined) {
            request['startTime'] = since;
        }
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        let until = undefined;
        [until, params] = this.handleOptionAndParams(params, methodName, 'until');
        if (until !== undefined) {
            request['endTime'] = until;
        }
        const response = await this.privateGetApiSpotV1WalletWithdrawalListV2(this.extend(request, params));
        // todo add after withdrawal
        //
        const data = this.safeList(response, 'data', []);
        return this.parseTransactions(data, currency, since, limit);
    }
    /**
     * @method
     * @name coincatch#withdraw
     * @description make a withdrawal
     * @see https://coincatch.github.io/github.io/en/spot/#withdraw
     * @param {string} code unified currency code
     * @param {float} amount the amount to withdraw
     * @param {string} address the address to withdraw to
     * @param {string} [tag]
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} params.network network for withdraw (mandatory)
     * @param {string} [params.remark] remark
     * @param {string} [params.clientOid] custom id
     * @returns {object} a [transaction structure]{@link https://docs.ccxt.com/#/?id=transaction-structure}
     */
    async withdraw(code, amount, address, tag = undefined, params = {}) {
        [tag, params] = this.handleWithdrawTagAndParams(tag, params);
        await this.loadMarkets();
        const currency = this.currency(code);
        const request = {
            'coin': currency['id'],
            'address': address,
            'amount': amount,
        };
        if (tag !== undefined) {
            request['tag'] = tag;
        }
        let networkCode = undefined;
        [networkCode, params] = this.handleNetworkCodeAndParams(params);
        if (networkCode !== undefined) {
            request['chain'] = this.networkCodeToId(networkCode);
        }
        const response = await this.privatePostApiSpotV1WalletWithdrawalV2(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "data": {
        //             "orderId":888291686266343424",
        //             "clientOrderId":"123"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseTransaction(data, currency);
    }
    parseTransaction(transaction, currency = undefined) {
        //
        // fetchDeposits
        //
        //     {
        //         "id": "1213046466852196352",
        //         "txId": "824246b030cd84d56400661303547f43a1d9fef66cf968628dd5112f362053ff",
        //         "coin": "USDT",
        //         "type": "deposit",
        //         "amount": "99.20000000",
        //         "status": "success",
        //         "toAddress": "TKTUt7qiTaMgnTwZXjE3ZBkPB6LKhLPJyZ",
        //         "fee": null,
        //         "chain": "TRX(TRC20)",
        //         "confirm": null,
        //         "clientOid": null,
        //         "tag": null,
        //         "fromAddress": null,
        //         "dest": "on_chain",
        //         "cTime": "1724938735688",
        //         "uTime": "1724938746015"
        //     }
        //
        // withdraw
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "data": {
        //             "orderId":888291686266343424",
        //             "clientOrderId":"123"
        //         }
        //     }
        //
        let status = this.safeString(transaction, 'status');
        if (status === 'success') {
            status = 'ok';
        }
        const txid = this.safeString(transaction, 'txId');
        const coin = this.safeString(transaction, 'coin');
        const code = this.safeCurrencyCode(coin, currency);
        const timestamp = this.safeInteger(transaction, 'cTime');
        const amount = this.safeNumber(transaction, 'amount');
        const networkId = this.safeString(transaction, 'chain');
        const network = this.safeString(this.options['networksById'], networkId, networkId);
        const addressTo = this.safeString(transaction, 'toAddress');
        const addressFrom = this.safeString(transaction, 'fromAddress');
        const tag = this.safeString(transaction, 'tag');
        const type = this.safeString(transaction, 'type');
        const feeCost = this.safeNumber(transaction, 'fee');
        let fee = undefined;
        if (feeCost !== undefined) {
            fee = {
                'cost': feeCost,
                'currency': code,
            };
        }
        return {
            'info': transaction,
            'id': this.safeString2(transaction, 'id', 'orderId'),
            'txid': txid,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'network': network,
            'address': undefined,
            'addressTo': addressTo,
            'addressFrom': addressFrom,
            'tag': tag,
            'tagTo': undefined,
            'tagFrom': undefined,
            'type': type,
            'amount': amount,
            'currency': code,
            'status': status,
            'updated': undefined,
            'internal': undefined,
            'comment': undefined,
            'fee': fee,
        };
    }
    /**
     * @method
     * @name coincatch#createMarketBuyOrderWithCost
     * @description create a market buy order by providing the symbol and cost
     * @see https://coincatch.github.io/github.io/en/spot/#place-order
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {float} cost how much you want to trade in units of the quote currency
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createMarketBuyOrderWithCost(symbol, cost, params = {}) {
        await this.loadMarkets();
        const methodName = 'createMarketBuyOrderWithCost';
        const market = this.market(symbol);
        if (!market['spot']) {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() supports spot orders only');
        }
        params['methodName'] = methodName;
        params['createMarketBuyOrderRequiresPrice'] = false;
        return await this.createOrder(symbol, 'market', 'buy', cost, undefined, params);
    }
    /**
     * @method
     * @name coincatch#createOrder
     * @description create a trade order
     * @see https://coincatch.github.io/github.io/en/spot/#place-order
     * @see https://coincatch.github.io/github.io/en/spot/#place-plan-order
     * @see https://coincatch.github.io/github.io/en/mix/#place-order
     * @see https://coincatch.github.io/github.io/en/mix/#place-plan-order
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit' or 'LIMIT_MAKER' for spot, 'market' or 'limit' or 'STOP' for swap
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of you want to trade in units of the base currency
     * @param {float} [price] the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {float} [params.cost] *spot market buy only* the quote quantity that can be used as an alternative for the amount
     * @param {float} [params.triggerPrice] the price that the order is to be triggered
     * @param {bool} [params.postOnly] if true, the order will only be posted to the order book and not executed immediately
     * @param {string} [params.timeInForce] 'GTC', 'IOC', 'FOK' or 'PO'
     * @param {string} [params.clientOrderId] a unique id for the order - is mandatory for swap
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createOrder(symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets();
        params['methodName'] = this.safeString(params, 'methodName', 'createOrder');
        const market = this.market(symbol);
        if (market['spot']) {
            return await this.createSpotOrder(symbol, type, side, amount, price, params);
        }
        else if (market['swap']) {
            return await this.createSwapOrder(symbol, type, side, amount, price, params);
        }
        else {
            throw new errors.NotSupported(this.id + ' createOrder() is not supported for ' + market['type'] + ' type of markets');
        }
    }
    /**
     * @method
     * @name coincatch#createSpotOrder
     * @description create a trade order on spot market
     * @see https://coincatch.github.io/github.io/en/spot/#place-order
     * @see https://coincatch.github.io/github.io/en/spot/#place-plan-order
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of you want to trade in units of the base currency
     * @param {float} [price] the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {float} [params.cost] *market buy only* the quote quantity that can be used as an alternative for the amount
     * @param {float} [params.triggerPrice] the price that the order is to be triggered at
     * @param {bool} [params.postOnly] if true, the order will only be posted to the order book and not executed immediately
     * @param {string} [params.timeInForce] 'GTC', 'IOC', 'FOK' or 'PO'
     * @param {string} [params.clientOrderId] a unique id for the order (max length 40)
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createSpotOrder(symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets();
        params['methodName'] = this.safeString(params, 'methodName', 'createSpotOrder');
        const request = this.createSpotOrderRequest(symbol, type, side, amount, price, params);
        const isPlanOrer = this.safeString(request, 'triggerPrice') !== undefined;
        let response = undefined;
        if (isPlanOrer) {
            response = await this.privatePostApiSpotV1PlanPlacePlan(request);
        }
        else {
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725915469815,
            //         "data": {
            //             "orderId": "1217143186968068096",
            //             "clientOrderId": "8fa3eb89-2377-4519-a199-35d5db9ed262"
            //         }
            //     }
            //
            response = await this.privatePostApiSpotV1TradeOrders(request);
        }
        const data = this.safeDict(response, 'data', {});
        const market = this.market(symbol);
        return this.parseOrder(data, market);
    }
    createSpotOrderRequest(symbol, type, side, amount, price = undefined, params = {}) {
        /**
         * @method
         * @ignore
         * @name coincatch#createSpotOrderRequest
         * @description helper function to build request
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type 'market' or 'limit'
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of you want to trade in units of the base currency
         * @param {float} [price] the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {float} [params.triggerPrice] the price that the order is to be triggered at
         * @param {float} [params.cost] *market buy only* the quote quantity that can be used as an alternative for the amount
         * @param {bool} [params.postOnly] if true, the order will only be posted to the order book and not executed immediately
         * @param {string} [params.timeInForce] 'GTC', 'IOC', 'FOK' or 'PO' (default 'GTC')
         * @param {string} [params.clientOrderId] a unique id for the order (max length 40)
         * @returns {object} request to be sent to the exchange
         */
        let methodName = 'createSpotOrderRequest';
        // spot market info has no presicion so we do not use it
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'side': side,
            'orderType': type,
        };
        const isMarketOrder = (type === 'market');
        const timeInForceAndParams = this.handleTimeInForceAndPostOnly(methodName, params, isMarketOrder);
        params = timeInForceAndParams['params'];
        const timeInForce = timeInForceAndParams['timeInForce'];
        let cost = undefined;
        [cost, params] = this.handleParamString(params, 'cost');
        let triggerPrice = undefined;
        [triggerPrice, params] = this.handleParamString(params, 'triggerPrice');
        const isMarketBuy = isMarketOrder && (side === 'buy');
        if ((!isMarketBuy) && (cost !== undefined)) {
            throw new errors.NotSupported(this.id + ' ' + methodName + ' supports cost parameter for market buy orders only');
        }
        if (isMarketBuy) {
            const costAndParams = this.handleRequiresPriceAndCost(methodName, params, price, amount, cost);
            cost = costAndParams['cost'];
            params = costAndParams['params'];
        }
        if (triggerPrice === undefined) {
            if (type === 'limit') {
                request['price'] = price; // spot markets have no precision
            }
            request['quantity'] = isMarketBuy ? cost : this.numberToString(amount); // spot markets have no precision
            request['force'] = timeInForce ? timeInForce : 'normal'; // the exchange requres force but accepts any value
        }
        else {
            request['triggerPrice'] = triggerPrice; // spot markets have no precision
            if (timeInForce !== undefined) {
                request['timeInForceValue'] = timeInForce;
            }
            let clientOrderId = undefined;
            [clientOrderId, params] = this.handleParamString(params, 'clientOrderId');
            if (clientOrderId !== undefined) {
                request['clientOid'] = clientOrderId;
            }
            if (type === 'limit') {
                request['executePrice'] = price; // spot markets have no precision
            }
            let triggerType = undefined;
            if (isMarketOrder) {
                triggerType = 'market_price';
            }
            else {
                triggerType = 'fill_price';
            }
            request['triggerType'] = triggerType;
            // tood check placeType
            request['size'] = isMarketOrder ? cost : this.numberToString(amount); // spot markets have no precision
        }
        return this.extend(request, params);
    }
    handleRequiresPriceAndCost(methodName, params = {}, price = undefined, amount = undefined, cost = undefined, side = 'buy') {
        const optionName = 'createMarket' + this.capitalize(side) + 'OrderRequiresPrice';
        let requiresPrice = true;
        [requiresPrice, params] = this.handleOptionAndParams(params, methodName, optionName, true);
        let amountString = undefined;
        if (amount !== undefined) {
            amountString = this.numberToString(amount);
        }
        let priceString = undefined;
        if (price !== undefined) {
            priceString = this.numberToString(price);
        }
        if (requiresPrice) {
            if ((price === undefined) && (cost === undefined)) {
                throw new errors.InvalidOrder(this.id + ' ' + methodName + '() requires the price argument for market ' + side + ' orders to calculate the total cost to spend (amount * price), alternatively set the ' + optionName + ' option or param to false and pass the cost to spend in the amount argument');
            }
            else if (cost === undefined) {
                cost = Precise["default"].stringMul(amountString, priceString);
            }
        }
        else {
            cost = cost ? cost : amountString;
        }
        const result = {
            'cost': cost,
            'params': params,
        };
        return result;
    }
    handleTimeInForceAndPostOnly(methodName, params = {}, isMarketOrder = false) {
        let timeInForce = undefined;
        [timeInForce, params] = this.handleOptionAndParams(params, methodName, 'timeInForce');
        let postOnly = false;
        [postOnly, params] = this.handlePostOnly(isMarketOrder, timeInForce === 'post_only', params);
        if (postOnly) {
            timeInForce = 'PO';
        }
        timeInForce = this.encodeTimeInForce(timeInForce);
        const result = {
            'timeInForce': timeInForce,
            'params': params,
        };
        return result;
    }
    /**
     * @method
     * @name coincatch#createSwapOrder
     * @description create a trade order on swap market
     * @see https://coincatch.github.io/github.io/en/mix/#place-order
     * @see https://coincatch.github.io/github.io/en/mix/#place-plan-order
     * @see https://coincatch.github.io/github.io/en/mix/#place-stop-order
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of you want to trade in units of the base currency
     * @param {float} [price] the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {bool} [params.postOnly] *non-trigger orders only* if true, the order will only be posted to the order book and not executed immediately
     * @param {bool} [params.reduceOnly] true or false whether the order is reduce only
     * @param {string} [params.timeInForce] *non-trigger orders only* 'GTC', 'FOK', 'IOC' or 'PO'
     * @param {string} [params.clientOrderId] a unique id for the order
     * @param {float} [params.triggerPrice] the price that the order is to be triggered at
     * @param {float} [params.stopLossPrice] The price at which a stop loss order is triggered at
     * @param {float} [params.takeProfitPrice] The price at which a take profit order is triggered at
     * @param {object} [params.takeProfit] *takeProfit object in params* containing the triggerPrice at which the attached take profit order will be triggered (perpetual swap markets only)
     * @param {float} [params.takeProfit.triggerPrice] take profit trigger price
     * @param {object} [params.stopLoss] *stopLoss object in params* containing the triggerPrice at which the attached stop loss order will be triggered (perpetual swap markets only)
     * @param {float} [params.stopLoss.triggerPrice] stop loss trigger price
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createSwapOrder(symbol, type, side, amount, price = undefined, params = {}) {
        params['methodName'] = this.safeString(params, 'methodName', 'createSwapOrder');
        await this.loadMarkets();
        const market = this.market(symbol);
        let request = this.createSwapOrderRequest(symbol, type, side, amount, price, params);
        const endpointType = this.safeString(request, 'endpointType');
        request = this.omit(request, 'endpointType');
        let response = undefined;
        if (endpointType === 'trigger') {
            response = await this.privatePostApiMixV1PlanPlacePlan(request);
        }
        else if (endpointType === 'tpsl') {
            response = await this.privatePostApiMixV1PlanPlaceTPSL(request);
        }
        else { // standard
            response = await this.privatePostApiMixV1OrderPlaceOrder(request);
        }
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1727977301979,
        //         "data":
        //         {
        //             "clientOid": "1225791137701519360",
        //             "orderId": "1225791137697325056"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseOrder(data, market);
    }
    createSwapOrderRequest(symbol, type, side, amount, price = undefined, params = {}) {
        /**
         * @method
         * @ignore
         * @name coincatch#createSwapOrderRequest
         * @description helper function to build request
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type 'market' or 'limit'
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of you want to trade in units of the base currency
         * @param {float} [price] the price that the order is to be fulfilled, in units of the quote currency, ignored in market orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {bool} [params.hedged] default false
         * @param {bool} [params.postOnly] *non-trigger orders only* if true, the order will only be posted to the order book and not executed immediately
         * @param {bool} [params.reduceOnly] true or false whether the order is reduce only
         * @param {string} [params.timeInForce] *non-trigger orders only* 'GTC', 'FOK', 'IOC' or 'PO'
         * @param {string} [params.clientOrderId] a unique id for the order
         * @param {float} [params.triggerPrice] the price that the order is to be triggered at
         * @param {float} [params.stopLossPrice] The price at which a stop loss order is triggered at
         * @param {float} [params.takeProfitPrice] The price at which a take profit order is triggered at
         * @param {object} [params.takeProfit] *takeProfit object in params* containing the triggerPrice at which the attached take profit order will be triggered (perpetual swap markets only)
         * @param {float} [params.takeProfit.triggerPrice] take profit trigger price
         * @param {object} [params.stopLoss] *stopLoss object in params* containing the triggerPrice at which the attached stop loss order will be triggered (perpetual swap markets only)
         * @param {float} [params.stopLoss.triggerPrice] stop loss trigger price
         * @returns {object} request to be sent to the exchange
         */
        let methodName = 'createSwapOrderRequest';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        const market = this.market(symbol);
        let request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
            'size': this.amountToPrecision(symbol, amount),
        };
        [request, params] = this.handleOptionParamsAndRequest(params, methodName, 'clientOrderId', request, 'clientOid');
        const isMarketOrder = (type === 'market');
        params = this.handleTriggerStopLossAndTakeProfit(symbol, side, type, price, methodName, params);
        const endpointType = this.safeString(params, 'endpointType');
        if ((endpointType === undefined) || (endpointType === 'standard')) {
            const timeInForceAndParams = this.handleTimeInForceAndPostOnly(methodName, params, isMarketOrder); // only for non-trigger orders
            params = timeInForceAndParams['params'];
            const timeInForce = timeInForceAndParams['timeInForce'];
            if (timeInForce !== undefined) {
                request['timeInForceValue'] = timeInForce;
            }
            if (price !== undefined) {
                request['price'] = this.priceToPrecision(symbol, price);
            }
        }
        if ((endpointType !== 'tpsl')) {
            request['orderType'] = type;
            let hedged = false;
            [hedged, params] = this.handleOptionAndParams(params, methodName, 'hedged', hedged);
            // hedged and non-hedged orders have different side values and reduceOnly handling
            let reduceOnly = false;
            [reduceOnly, params] = this.handleParamBool(params, 'reduceOnly', reduceOnly);
            if (hedged) {
                if (reduceOnly) {
                    if (side === 'buy') {
                        side = 'close_short';
                    }
                    else if (side === 'sell') {
                        side = 'close_long';
                    }
                }
                else {
                    if (side === 'buy') {
                        side = 'open_long';
                    }
                    else if (side === 'sell') {
                        side = 'open_short';
                    }
                }
            }
            else {
                side = side.toLowerCase() + '_single';
            }
            request['side'] = side;
        }
        return this.extend(request, params);
    }
    handleTriggerStopLossAndTakeProfit(symbol, side, type, price, methodName = 'createOrder', params = {}) {
        const request = {};
        let endpointType = 'standard'; // standard, trigger, tpsl, trailing - to define the endpoint to use
        let stopLossPrice = this.safeString(params, 'stopLossPrice');
        let takeProfitPrice = this.safeString(params, 'takeProfitPrice');
        let requestTriggerPrice = undefined;
        const takeProfitParams = this.safeDict(params, 'takeProfit');
        const stopLossParams = this.safeDict(params, 'stopLoss');
        const triggerPrice = this.safeString2(params, 'triggerPrice', 'stopPrice');
        const isTrigger = (triggerPrice !== undefined);
        const trailingPercent = this.safeString(params, 'trailingPercent');
        const trailingTriggerPrice = this.safeString(params, 'trailingTriggerPrice');
        let hasTPPrice = (takeProfitPrice !== undefined);
        let hasSLPrice = (stopLossPrice !== undefined);
        const hasTPParams = (takeProfitParams !== undefined);
        if (hasTPParams && !hasTPPrice) {
            takeProfitPrice = this.safeString(takeProfitParams, 'triggerPrice');
            hasTPPrice = (takeProfitPrice !== undefined);
        }
        const hasSLParams = (stopLossParams !== undefined);
        if (hasSLParams && !hasSLPrice) {
            stopLossPrice = this.safeString(stopLossParams, 'triggerPrice');
            hasSLPrice = (stopLossPrice !== undefined);
        }
        const hasBothTPAndSL = hasTPPrice && hasSLPrice;
        const isTrailingPercentOrder = (trailingPercent !== undefined);
        const isMarketOrder = (type === 'market');
        // handle with triggerPrice stopLossPrice and takeProfitPrice
        if (hasBothTPAndSL || isTrigger || (methodName === 'createOrderWithTakeProfitAndStopLoss')) {
            if (isTrigger) {
                if (isMarketOrder) {
                    request['triggerType'] = 'market_price';
                }
                else {
                    request['triggerType'] = 'fill_price';
                    request['executePrice'] = this.priceToPrecision(symbol, price);
                }
                request['triggerPrice'] = this.priceToPrecision(symbol, triggerPrice);
                endpointType = 'trigger'; // if order also has triggerPrice we use endpoint for trigger orders
            }
            if (methodName === 'createOrders') {
                endpointType = undefined; // we do not provide endpointType for createOrders
            }
            if (hasTPPrice) {
                request['presetTakeProfitPrice'] = takeProfitPrice;
            }
            if (hasSLPrice) {
                request['presetStopLossPrice'] = stopLossPrice;
            }
        }
        else if (hasTPPrice || hasSLPrice || isTrailingPercentOrder) {
            if (!isMarketOrder) {
                throw new errors.NotSupported(this.id + ' ' + methodName + '() supports does not support ' + type + ' type of stop loss and take profit orders (only market type is supported for stop loss and take profit orders). To create a market order with stop loss or take profit attached use createOrderWithTakeProfitAndStopLoss()');
            }
            endpointType = 'tpsl'; // if order has only one of the two we use endpoint for tpsl orders
            let holdSide = 'long';
            if (side === 'buy') {
                holdSide = 'short';
            }
            request['holdSide'] = holdSide;
            if (isTrailingPercentOrder) {
                if (trailingTriggerPrice === undefined) {
                    throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires the trailingTriggerPrice parameter for trailing stop orders');
                }
                requestTriggerPrice = trailingTriggerPrice;
                request['rangeRate'] = trailingPercent;
                request['planType'] = 'moving_plan';
            }
            else if (hasTPPrice) { // take profit
                requestTriggerPrice = takeProfitPrice;
                request['planType'] = 'profit_plan';
            }
            else { // stop loss
                requestTriggerPrice = stopLossPrice;
                request['planType'] = 'loss_plan';
            }
            request['triggerPrice'] = this.priceToPrecision(symbol, requestTriggerPrice);
        }
        if (endpointType !== undefined) {
            request['endpointType'] = endpointType;
        }
        params = this.omit(params, ['stopLoss', 'takeProfit', 'stopLossPrice', 'takeProfitPrice', 'triggerPrice', 'stopPrice', 'trailingPercent', 'trailingTriggerPrice']);
        return this.extend(request, params);
    }
    /**
     * @method
     * @name coincatch#createOrderWithTakeProfitAndStopLoss
     * @description *swap markets only* create an order with a stop loss or take profit attached (type 3)
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much you want to trade in units of the base currency or the number of contracts
     * @param {float} [price] the price to fulfill the order, in units of the quote currency, ignored in market orders
     * @param {float} [takeProfit] the take profit price, in units of the quote currency
     * @param {float} [stopLoss] the stop loss price, in units of the quote currency
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createOrderWithTakeProfitAndStopLoss(symbol, type, side, amount, price = undefined, takeProfit = undefined, stopLoss = undefined, params = {}) {
        const methodName = 'createOrderWithTakeProfitAndStopLoss';
        await this.loadMarkets();
        const market = this.market(symbol);
        if (!market['swap']) {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is supported for swap markets only');
        }
        params['methodName'] = methodName;
        return super.createOrderWithTakeProfitAndStopLoss(symbol, type, side, amount, price, takeProfit, stopLoss, params);
    }
    encodeTimeInForce(timeInForce) {
        const timeInForceMap = {
            'GTC': 'normal',
            'IOC': 'iok',
            'FOK': 'fok',
            'PO': 'post_only',
        };
        return this.safeString(timeInForceMap, timeInForce, timeInForce);
    }
    /**
     * @method
     * @name coincatch#createOrders
     * @description create a list of trade orders (all orders should be of the same symbol)
     * @see https://coincatch.github.io/github.io/en/spot/#batch-order
     * @param {Array} orders list of orders to create, each object should contain the parameters required by createOrder, namely symbol, type, side, amount, price and params (max 50 entries)
     * @param {object} [params] extra parameters specific to the api endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createOrders(orders, params = {}) {
        await this.loadMarkets();
        // same symbol for all orders
        const methodName = 'createOrders';
        params['methodName'] = methodName;
        const ordersRequests = [];
        let symbols = [];
        for (let i = 0; i < orders.length; i++) {
            const rawOrder = orders[i];
            const symbol = this.safeString(rawOrder, 'symbol');
            symbols.push(symbol);
            const type = this.safeString(rawOrder, 'type');
            const side = this.safeString(rawOrder, 'side');
            const amount = this.safeNumber(rawOrder, 'amount');
            const price = this.safeNumber(rawOrder, 'price');
            const orderParams = this.safeDict(rawOrder, 'params', {});
            const orderRequest = this.createOrderRequest(symbol, type, side, amount, price, orderParams);
            const triggerPrice = this.safeString(orderParams, 'triggerPrice');
            if (triggerPrice !== undefined) {
                throw new errors.NotSupported(this.id + ' ' + methodName + '() does not support trigger orders');
            }
            const clientOrderId = this.safeString(orderRequest, 'clientOrderId');
            if (clientOrderId === undefined) {
                orderRequest['clientOrderId'] = this.uuid(); // both spot and swap endpoints require clientOrderId
            }
            ordersRequests.push(orderRequest);
        }
        symbols = this.unique(symbols);
        const symbolsLength = symbols.length;
        if (symbolsLength !== 1) {
            throw new errors.BadRequest(this.id + ' createOrders() requires all orders to be of the same symbol');
        }
        const ordersSymbol = this.safeString(symbols, 0);
        const market = this.market(ordersSymbol);
        const request = {
            'symbol': market['id'],
        };
        const marketType = market['type'];
        let response = undefined;
        let responseOrders = undefined;
        let propertyName = undefined;
        if (marketType === 'spot') {
            request['orderList'] = ordersRequests;
            response = await this.privatePostApiSpotV1TradeBatchOrders(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1726160718706,
            //         "data": {
            //             "resultList": [
            //                 {
            //                     "orderId": "1218171835238367232",
            //                     "clientOrderId": "28759338-ca10-42dd-8ac3-5183785ef60b"
            //                 }
            //             ],
            //             "failure": [
            //                 {
            //                     "orderId": "",
            //                     "clientOrderId": "ee2e67c9-47fc-4311-9cc1-737ec408d509",
            //                     "errorMsg": "The order price of eth_usdt cannot be less than 5.00% of the current price",
            //                     "errorCode": "43008"
            //                 },
            //                 {
            //                     "orderId": "",
            //                     "clientOrderId": "1af2defa-0c2d-4bb5-acb7-6feb6a86787a",
            //                     "errorMsg": "less than the minimum amount 1 USDT",
            //                     "errorCode": "45110"
            //                 }
            //             ]
            //         }
            //     }
            //
            propertyName = 'resultList';
        }
        else if (market['swap']) {
            request['marginCoin'] = market['settleId'];
            request['orderDataList'] = ordersRequests;
            response = await this.privatePostApiMixV1OrderBatchOrders(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1729100084017,
            //         "data": {
            //             "orderInfo": [
            //                 {
            //                     "orderId": "1230500426827522049",
            //                     "clientOid": "1230500426898825216"
            //                 }
            //             ],
            //             "failure": [
            //                 {
            //                     "orderId": "",
            //                     "clientOid": null,
            //                     "errorMsg": "The order price exceeds the maximum price limit: 2,642.53",
            //                     "errorCode": "22047"
            //                 }
            //             ],
            //             "result": true
            //         }
            //     }
            //
            propertyName = 'orderInfo';
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const data = this.safeDict(response, 'data', {});
        responseOrders = this.safeList(data, propertyName, []);
        return this.parseOrders(responseOrders);
    }
    createOrderRequest(symbol, type, side, amount, price = undefined, params = {}) {
        const methodName = this.safeString(params, 'methodName', 'createOrderRequest');
        params['methodName'] = methodName;
        const market = this.market(symbol);
        if (market['spot']) {
            return this.createSpotOrderRequest(symbol, type, side, amount, price, params);
        }
        else if (market['swap']) {
            return this.createSwapOrderRequest(symbol, type, side, amount, price, params);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
    }
    /**
     * @method
     * @name coincatch#editOrder
     * @description edit a trade trigger, stop-looss or take-profit order
     * @see https://coincatch.github.io/github.io/en/spot/#modify-plan-order
     * @param {string} id order id
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of currency you want to trade in units of base currency
     * @param {float} [price] the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async editOrder(id, symbol, type, side, amount = undefined, price = undefined, params = {}) {
        const methodName = 'editOrder';
        // only trigger, stop-looss or take-profit orders can be edited
        params['methodName'] = methodName;
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['spot']) {
            return await this.editSpotOrder(id, symbol, type, side, amount, price, params);
        }
        else {
            // todo return await this.editSwapOrder (id, symbol, type, side, amount, price, params);
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
    }
    /**
     * @method
     * @name coincatch#editSpotOrder
     * @ignore
     * @description edit a trade order
     * @see https://coincatch.github.io/github.io/en/spot/#modify-plan-order
     * @param {string} id order id
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of currency you want to trade in units of base currency
     * @param {float} [price] the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.clientOrderId] a unique id for the order that can be used as an alternative for the id
     * @param {string} params.triggerPrice *mandatory* the price that the order is to be triggered at
     * @param {float} [params.cost] *market buy only* the quote quantity that can be used as an alternative for the amount
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async editSpotOrder(id, symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets();
        let methodName = 'editSpotOrder';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        const market = this.market(symbol);
        if (!market['spot']) {
            throw new errors.NotSupported(this.id + ' editSpotOrder() does not support ' + market['type'] + ' orders');
        }
        const request = {
            'orderType': type,
        };
        const clientOrderId = this.safeString(params, 'clientOrderId');
        if (clientOrderId !== undefined) {
            request['clientOid'] = clientOrderId;
        }
        else if (id === undefined) {
            throw new errors.BadRequest(this.id + ' ' + methodName + '() requires id or clientOrderId');
        }
        else {
            request['orderId'] = id;
        }
        let cost = undefined;
        [cost, params] = this.handleParamString(params, 'cost');
        const isMarketBuy = (type === 'market') && (side === 'buy');
        if ((!isMarketBuy) && (cost !== undefined)) {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() supports cost parameter for market buy orders only');
        }
        if (amount !== undefined) {
            if (isMarketBuy) {
                const costAndParams = this.handleRequiresPriceAndCost(methodName, params, price, amount, cost);
                cost = costAndParams['cost'];
                params = costAndParams['params'];
            }
            else {
                request['size'] = this.numberToString(amount); // spot markets have no precision
            }
        }
        if (cost !== undefined) {
            request['size'] = cost; // spot markets have no precision
        }
        if ((type === 'limit') && (price !== undefined)) {
            request['price'] = price; // spot markets have no precision
        }
        const response = await this.privatePostApiSpotV1PlanModifyPlan(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1668136575920,
        //         "data": {
        //             "orderId": "974792060738441216",
        //             "clientOrderId": "974792554995224576"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseOrder(data, market);
    }
    /**
     * @method
     * @name coincatch#fetchOrder
     * @description fetches information on an order made by the user (non-trigger orders only)
     * @see https://coincatch.github.io/github.io/en/spot/#get-order-details
     * @see https://coincatch.github.io/github.io/en/mix/#get-order-details
     * @param {string} id the order id
     * @param {string} symbol unified symbol of the market the order was made in (is mandatory for swap)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.type] 'spot' or 'swap' - the type of the market to fetch entry for (default 'spot')
     * @param {string} [params.clientOrderId] a unique id for the order that can be used as an alternative for the id
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOrder(id, symbol = undefined, params = {}) {
        const methodName = 'fetchOrder';
        // for non-trigger orders only
        await this.loadMarkets();
        const request = {};
        const clientOrderId = this.safeString(params, 'clientOrderId');
        if (clientOrderId === undefined) {
            request['orderId'] = id;
        }
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
        }
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
        let response = undefined;
        let order = undefined;
        if (marketType === 'spot') {
            // user could query cancelled/filled order details within 24 hours, After 24 hours should use fetchOrders
            response = await this.privatePostApiSpotV1TradeOrderInfo(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725918004434,
            //         "data": [
            //             {
            //                 "accountId": "1002820815393",
            //                 "symbol": "ETHUSDT_SPBL",
            //                 "orderId": "1217143186968068096",
            //                 "clientOrderId": "8fa3eb89-2377-4519-a199-35d5db9ed262",
            //                 "price": "0",
            //                 "quantity": "10.0000000000000000",
            //                 "orderType": "market",
            //                 "side": "buy",
            //                 "status": "full_fill",
            //                 "fillPrice": "2340.5500000000000000",
            //                 "fillQuantity": "0.0042000000000000",
            //                 "fillTotalAmount": "9.8303100000000000",
            //                 "enterPointSource": "API",
            //                 "feeDetail": "{
            //                     \"ETH\": {
            //                         \"deduction\": false,
            //                         \"feeCoinCode\": \"ETH\",
            //                         \"totalDeductionFee\": 0,
            //                         \"totalFee\": -0.0000042000000000},
            //                         \"newFees\": {
            //                         \"c\": 0,
            //                         \"d\": 0,
            //                         \"deduction\": false,
            //                         \"r\": -0.0000042,
            //                         \"t\": -0.0000042,
            //                         \"totalDeductionFee\": 0
            //                     }
            //                 }",
            //                 "orderSource": "market",
            //                 "cTime": "1725915469877"
            //             }
            //         ]
            //     }
            //
            let data = this.safeList(response, 'data');
            if (data === undefined) {
                response = JSON.parse(response); // the response from closed orders is not a standard JSON
                data = this.safeList(response, 'data', []);
            }
            order = this.safeDict(data, 0, {});
        }
        else if (marketType === 'swap') {
            if (market === undefined) {
                throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument for ' + marketType + ' type of markets');
            }
            request['symbol'] = market['id'];
            if (clientOrderId !== undefined) {
                params = this.omit(params, 'clientOrderId');
                request['clientOid'] = clientOrderId;
            }
            response = await this.privateGetApiMixV1OrderDetail(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1727981421364,
            //         "data": {
            //             "symbol": "ETHUSDT_UMCBL",
            //             "size": 0.01,
            //             "orderId": "1225791137697325056",
            //             "clientOid": "1225791137701519360",
            //             "filledQty": 0.01,
            //             "fee": -0.01398864,
            //             "price": null,
            //             "priceAvg": 2331.44,
            //             "state": "filled",
            //             "side": "close_long",
            //             "timeInForce": "normal",
            //             "totalProfits": -2.23680000,
            //             "posSide": "long",
            //             "marginCoin": "USDT",
            //             "filledAmount": 23.3144,
            //             "orderType": "market",
            //             "leverage": "5",
            //             "marginMode": "crossed",
            //             "reduceOnly": true,
            //             "enterPointSource": "API",
            //             "tradeSide": "close_long",
            //             "holdMode": "double_hold",
            //             "orderSource": "market",
            //             "cTime": "1727977302003",
            //             "uTime": "1727977303604"
            //         }
            //     }
            //
            order = this.safeDict(response, 'data', {});
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        return this.parseOrder(order, market);
    }
    /**
     * @method
     * @name coincatch#fetchOpenOrders
     * @description fetch all unfilled currently open orders
     * @see https://coincatch.github.io/github.io/en/spot/#get-order-list
     * @see https://coincatch.github.io/github.io/en/spot/#get-current-plan-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-open-order
     * @see https://coincatch.github.io/github.io/en/mix/#get-all-open-order
     * @see https://coincatch.github.io/github.io/en/mix/#get-plan-order-tpsl-list
     * @param {string} [symbol] unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.type] 'spot' or 'swap' - the type of the market to fetch entries for (default 'spot')
     * @param {string} [params.productType] *swap only* 'umcbl' or 'dmcbl' - the product type of the market to fetch entries for (default 'umcbl')
     * @param {string} [params.marginCoin] *swap only* the margin coin of the market to fetch entries for
     * @param {string} [params.isPlan] *swap trigger only* 'plan' or 'profit_loss' ('plan' (default) for trigger (plan) orders, 'profit_loss' for stop-loss and take-profit orders)
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOpenOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchOpenOrders';
        await this.loadMarkets();
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
        }
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
        params['methodName'] = methodName;
        if (marketType === 'spot') {
            return await this.fetchOpenSpotOrders(symbol, since, limit, params);
        }
        else if (marketType === 'swap') {
            return await this.fetchOpenSwapOrders(symbol, since, limit, params);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
    }
    /**
     * @method
     * @ignore
     * @name coincatch#fetchOpenSpotOrders
     * @description fetch all unfilled currently open orders for spot markets
     * @see https://coincatch.github.io/github.io/en/spot/#get-order-list
     * @see https://coincatch.github.io/github.io/en/spot/#get-current-plan-orders
     * @param {string} [symbol] unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.lastEndId] *for trigger orders only* the last order id to fetch entries after
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOpenSpotOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        let methodName = 'fetchOpenSpotOrders';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        const request = {};
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
            request['symbol'] = market['id'];
        }
        let isTrigger = false;
        [isTrigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', isTrigger);
        let result = undefined;
        if (isTrigger) {
            if (symbol === undefined) {
                throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument for trigger orders');
            }
            if (limit !== undefined) {
                request['pageSize'] = limit;
            }
            const response = await this.privatePostApiSpotV1PlanCurrentPlan(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1728664710749,
            //         "data": {
            //             "nextFlag": false,
            //             "endId": 1228661660806787072,
            //             "orderList": [
            //                 {
            //                     "orderId": "1228669617606991872",
            //                     "clientOid": "1228669617573437440",
            //                     "symbol": "ETHUSDT_SPBL",
            //                     "size": "50",
            //                     "executePrice": "0",
            //                     "triggerPrice": "4000",
            //                     "status": "not_trigger",
            //                     "orderType": "market",
            //                     "side": "sell",
            //                     "triggerType": "fill_price",
            //                     "enterPointSource": "API",
            //                     "placeType": null,
            //                     "cTime": "1728663585092",
            //                     "uTime": null
            //                 },
            //             ]
            //         }
            //     }
            //
            const data = this.safeDict(response, 'data', {});
            result = this.safeList(data, 'orderList', []);
        }
        else {
            const response = await this.privatePostApiSpotV1TradeOpenOrders(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725965783430,
            //         "data": [
            //             {
            //                 "accountId": "1002820815393",
            //                 "symbol": "ETHUSDT_SPBL",
            //                 "orderId": "1217347655911653376",
            //                 "clientOrderId": "c57c07d1-bd00-4167-95e2-9b22a55fbc28",
            //                 "price": "2000.0000000000000000",
            //                 "quantity": "0.0010000000000000",
            //                 "orderType": "limit",
            //                 "side": "buy",
            //                 "status": "new",
            //                 "fillPrice": "0",
            //                 "fillQuantity": "0.0000000000000000",
            //                 "fillTotalAmount": "0.0000000000000000",
            //                 "enterPointSource": "API",
            //                 "feeDetail": "",
            //                 "orderSource": "normal",
            //                 "cTime": "1725964219072"
            //             },
            //             ...
            //         ]
            //     }
            //
            result = this.safeList(response, 'data', []);
        }
        return this.parseOrders(result, market, since, limit);
    }
    /**
     * @method
     * @ignore
     * @name coincatch#fetchOpenSwapOrders
     * @description fetch all unfilled currently open orders for swap markets
     * @see https://coincatch.github.io/github.io/en/mix/#get-open-order
     * @see https://coincatch.github.io/github.io/en/mix/#get-all-open-order
     * @see https://coincatch.github.io/github.io/en/mix/#get-plan-order-tpsl-list
     * @param {string} [symbol] unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.isPlan] 'plan' or 'profit_loss' ('plan' (default) for trigger (plan) orders, 'profit_loss' for stop-loss and take-profit orders)
     * @param {string} [params.productType] 'umcbl' or 'dmcbl' - the product type of the market to fetch entries for (default 'umcbl')
     * @param {string} [params.marginCoin] the margin coin of the market to fetch entries for
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOpenSwapOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        let methodName = 'fetchOpenSwapOrders';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        let isTrigger = false;
        [isTrigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', isTrigger);
        let plan = undefined;
        [plan, params] = this.handleOptionAndParams(params, methodName, 'isPlan', plan);
        let productType = this.handleOption(methodName, 'productType');
        let market = undefined;
        let response = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
            const request = {
                'symbol': market['id'],
            };
            if ((isTrigger) || (plan !== undefined)) { // the same endpoint is used for trigger and stop-loss/take-profit orders
                if (productType !== undefined) {
                    request['productType'] = productType;
                }
                if (plan !== undefined) {
                    request['isPlan'] = plan; // current param is used to define the type of the orders to fetch (trigger or stop-loss/take-profit)
                }
                //
                //     {
                //         "code": "00000",
                //         "msg": "success",
                //         "requestTime": 1729168682690,
                //         "data": [
                //             {
                //                 "orderId": "1230779428914049025",
                //                 "clientOid": "1230779428914049024",
                //                 "symbol": "ETHUSDT_UMCBL",
                //                 "marginCoin": "USDT",
                //                 "size": "0.01",
                //                 "executePrice": "1000",
                //                 "triggerPrice": "1200",
                //                 "status": "not_trigger",
                //                 "orderType": "limit",
                //                 "planType": "normal_plan",
                //                 "side": "buy_single",
                //                 "triggerType": "fill_price",
                //                 "presetTakeProfitPrice": "4000",
                //                 "presetTakeLossPrice": "900",
                //                 "rangeRate": "",
                //                 "enterPointSource": "API",
                //                 "tradeSide": "buy_single",
                //                 "holdMode": "single_hold",
                //                 "reduceOnly": false,
                //                 "cTime": "1729166603306",
                //                 "uTime": null
                //             }
                //         ]
                //     }
                //
                response = await this.privateGetApiMixV1PlanCurrentPlan(this.extend(request, params));
            }
            else {
                response = await this.privateGetApiMixV1OrderCurrent(this.extend(request, params));
            }
        }
        else if (isTrigger) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument for swap trigger orders');
        }
        else {
            if (productType === undefined) {
                productType = 'umcbl';
            }
            const request = {
                'productType': productType, // is mandatory for current endpoint (all open non-trigger orders)
            };
            let marginCoin = undefined;
            marginCoin = this.handleOption(methodName, 'marginCoin', marginCoin);
            if (marginCoin !== undefined) {
                request['marginCoin'] = marginCoin;
            }
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1728127869097,
            //         "data": [
            //             {
            //                 "symbol": "ETHUSDT_UMCBL",
            //                 "size": 0.02,
            //                 "orderId": "1226422495431974913",
            //                 "clientOid": "1226422495457140736",
            //                 "filledQty": 0.00,
            //                 "fee": 0E-8,
            //                 "price": 500.00,
            //                 "state": "new",
            //                 "side": "buy_single",
            //                 "timeInForce": "normal",
            //                 "totalProfits": 0E-8,
            //                 "posSide": "long",
            //                 "marginCoin": "USDT",
            //                 "filledAmount": 0.0000,
            //                 "orderType": "limit",
            //                 "leverage": "5",
            //                 "marginMode": "crossed",
            //                 "reduceOnly": false,
            //                 "enterPointSource": "API",
            //                 "tradeSide": "buy_single",
            //                 "holdMode": "single_hold",
            //                 "orderSource": "normal",
            //                 "cTime": "1728127829422",
            //                 "uTime": "1728127830980"
            //             }
            //         ]
            //     }
            //
            response = await this.privateGetApiMixV1OrderMarginCoinCurrent(this.extend(request, params));
        }
        const data = this.safeList(response, 'data', []);
        return this.parseOrders(data, market, since, limit);
    }
    /**
     * @method
     * @name coincatch#fetchCanceledAndClosedOrders
     * @description fetches information on multiple canceled and closed orders made by the user
     * @see https://coincatch.github.io/github.io/en/spot/#get-order-list
     * @see https://coincatch.github.io/github.io/en/spot/#get-history-plan-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-history-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-producttype-history-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-history-plan-orders-tpsl
     * @param {string} symbol *is mandatory* unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] the latest time in ms to fetch orders for
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.isPlan] *swap only* 'plan' or 'profit_loss' ('plan' (default) for trigger (plan) orders, 'profit_loss' for stop-loss and take-profit orders)
     * @param {string} [params.type] 'spot' or 'swap' - the type of the market to fetch entries for (default 'spot')
     * @param {string} [params.productType] *swap only* 'umcbl' or 'dmcbl' - the product type of the market to fetch entries for (default 'umcbl')
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchCanceledAndClosedOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchCanceledAndClosedOrders';
        await this.loadMarkets();
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
        }
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
        params['methodName'] = methodName;
        if (marketType === 'spot') {
            return await this.fetchCanceledAndClosedSpotOrders(symbol, since, limit, params);
        }
        else if (marketType === 'swap') {
            return await this.fetchCanceledAndClosedSwapOrders(symbol, since, limit, params);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
    }
    /**
     * @method
     * @ignore
     * @name coincatch#fetchCanceledAndClosedSpotOrders
     * @description fetches information on multiple canceled and closed orders made by the user on spot markets
     * @see https://coincatch.github.io/github.io/en/spot/#get-order-history
     * @see https://coincatch.github.io/github.io/en/spot/#get-history-plan-orders
     * @param {string} symbol *is mandatory* unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] *for trigger orders only* the latest time in ms to fetch orders for
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.lastEndId] *for trigger orders only* the last order id to fetch entries after
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchCanceledAndClosedSpotOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        let methodName = 'fetchCanceledAndClosedSpotOrders';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a symbol argument for spot markets');
        }
        const maxLimit = 500;
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        let requestLimit = limit;
        let isTrigger = false;
        [isTrigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', isTrigger);
        let result = undefined;
        if (isTrigger) {
            let until = undefined;
            [until, params] = this.handleOptionAndParams(params, methodName, 'until', until);
            // const now = this.milliseconds ();
            let requestSince = since;
            const interval = 90 * 24 * 60 * 60 * 1000; // startTime and endTime interval cannot be greater than 90 days
            const now = this.milliseconds();
            // both since and until are required for trigger orders
            if ((until === undefined) && (requestSince === undefined)) {
                requestSince = now - interval;
                until = now;
            }
            else if (until !== undefined) {
                requestSince = until - interval;
            }
            else { // if since is defined
                until = since + interval;
            }
            request['startTime'] = requestSince;
            request['endTime'] = until;
            if (requestLimit === undefined) {
                requestLimit = maxLimit;
            }
            request['pageSize'] = requestLimit;
            const response = await this.privatePostApiSpotV1PlanHistoryPlan(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1728668998002,
            //         "data": {
            //             "nextFlag": false,
            //             "endId": 1228669617606991872,
            //             "orderList": [
            //                 {
            //                     "orderId": "1228669617606991872",
            //                     "clientOid": "1228669617573437440",
            //                     "symbol": "ETHUSDT_SPBL",
            //                     "size": "50",
            //                     "executePrice": "0",
            //                     "triggerPrice": "4000",
            //                     "status": "cancel",
            //                     "orderType": "market",
            //                     "side": "sell",
            //                     "triggerType": "fill_price",
            //                     "enterPointSource": "API",
            //                     "placeType": null,
            //                     "cTime": "1728663585092",
            //                     "uTime": "1728666719223"
            //                 }
            //             ]
            //         }
            //     }
            //
            const data = this.safeDict(response, 'data', {});
            result = this.safeList(data, 'orderList', []);
        }
        else {
            if (since !== undefined) {
                request['after'] = since;
                requestLimit = maxLimit;
            }
            if (requestLimit !== undefined) {
                request['limit'] = requestLimit;
            }
            const response = await this.privatePostApiSpotV1TradeHistory(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725963777690,
            //         "data": [
            //             {
            //                 "accountId": "1002820815393",
            //                 "symbol": "ETHUSDT_SPBL",
            //                 "orderId": "1217143186968068096",
            //                 "clientOrderId": "8fa3eb89-2377-4519-a199-35d5db9ed262",
            //                 "price": "0",
            //                 "quantity": "10.0000000000000000",
            //                 "orderType": "market",
            //                 "side": "buy",
            //                 "status": "full_fill",
            //                 "fillPrice": "2340.5500000000000000",
            //                 "fillQuantity": "0.0042000000000000",
            //                 "fillTotalAmount": "9.8303100000000000",
            //                 "enterPointSource": "API",
            //                 "feeDetail": "{
            //                     \"ETH\": {
            //                         \"deduction\": false,
            //                         \"feeCoinCode\": \"ETH\",
            //                         \"totalDeductionFee\": 0,
            //                         \"totalFee\": -0.0000042000000000
            //                     },
            //                     \"newFees\": {
            //                         \"c\": 0,
            //                         \"d\": 0,
            //                         \"deduction\": false,
            //                         \"r\": -0.0000042,
            //                         \"t\": -0.0000042,
            //                         \"totalDeductionFee\": 0
            //                     }
            //                 }",
            //                 "orderSource": "market",
            //                 "cTime": "1725915469877"
            //             },
            //             ...
            //         ]
            //     }
            //
            const parsedResponse = JSON.parse(response); // the response is not a standard JSON
            result = this.safeList(parsedResponse, 'data', []);
        }
        return this.parseOrders(result, market, since, limit);
    }
    /**
     * @method
     * @ignore
     * @name coincatch#fetchCanceledAndClosedSwapOrders
     * @description fetches information on multiple canceled and closed orders made by the user on swap markets
     * @see https://coincatch.github.io/github.io/en/mix/#get-history-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-producttype-history-orders
     * @see https://coincatch.github.io/github.io/en/mix/#get-history-plan-orders-tpsl
     * @param {string} [symbol] unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] the latest time in ms to fetch orders for
     * @param {boolean} [params.trigger] true if fetching trigger orders (default false)
     * @param {string} [params.isPlan] *swap only* 'plan' or 'profit_loss' ('plan' (default) for trigger (plan) orders, 'profit_loss' for stop-loss and take-profit orders)
     * @param {string} [params.productType] *swap only* 'umcbl' or 'dmcbl' - the product type of the market to fetch entries for (default 'umcbl')
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchCanceledAndClosedSwapOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        let methodName = 'fetchCanceledAndClosedSwapOrders';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        let requestSince = since;
        let until = undefined;
        [until, params] = this.handleOptionAndParams(params, methodName, 'until', until);
        const now = this.milliseconds();
        // since and until are mandatory
        // they should be within 90 days interval
        const interval = 90 * 24 * 60 * 60 * 1000;
        if ((until === undefined) && (requestSince === undefined)) {
            requestSince = now - interval;
            until = now;
        }
        else if (until !== undefined) {
            requestSince = until - interval;
        }
        else { // if since is defined
            until = since + interval;
        }
        const request = {
            'startTime': requestSince,
            'endTime': until,
        };
        if (limit !== undefined) {
            request['pageSize'] = limit;
        }
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
            request['symbol'] = market['id'];
        }
        let productType = this.handleOption(methodName, 'productType');
        let isTrigger = false;
        [isTrigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', isTrigger);
        let plan = undefined;
        [plan, params] = this.handleOptionAndParams(params, methodName, 'isPlan', plan);
        let response = undefined;
        let result = undefined;
        if ((isTrigger) || (plan !== undefined)) {
            if (plan !== undefined) {
                request['isPlan'] = plan;
            }
            if (productType !== undefined) {
                request['productType'] = productType;
            }
            response = await this.privateGetApiMixV1PlanHistoryPlan(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1729174716526,
            //         "data": [
            //             {
            //                 "orderId": "1230763430987104257",
            //                 "clientOid": "1230763431003881472",
            //                 "executeOrderId": "",
            //                 "symbol": "ETHUSDT_UMCBL",
            //                 "marginCoin": "USDT",
            //                 "size": "0.03",
            //                 "executePrice": "0",
            //                 "triggerPrice": "2000",
            //                 "status": "cancel",
            //                 "orderType": "market",
            //                 "planType": "loss_plan",
            //                 "side": "sell_single",
            //                 "triggerType": "fill_price",
            //                 "presetTakeProfitPrice": "0",
            //                 "presetTakeLossPrice": "0",
            //                 "rangeRate": null,
            //                 "enterPointSource": "SYS",
            //                 "tradeSide": "sell_single",
            //                 "holdMode": "single_hold",
            //                 "reduceOnly": true,
            //                 "executeTime": "1729173770776",
            //                 "executeSize": "0",
            //                 "cTime": "1729162789103",
            //                 "uTime": "1729173770776"
            //             }
            //         ]
            //     }
            //
            result = this.safeList(response, 'data', []);
        }
        else {
            if (symbol !== undefined) {
                market = this.market(symbol);
                request['symbol'] = market['id'];
                response = await this.privateGetApiMixV1OrderHistory(this.extend(request, params));
            }
            else {
                if (productType === undefined) {
                    productType = 'umcbl'; // is mandatory for current endpoint
                }
                request['productType'] = productType;
                response = await this.privateGetApiMixV1OrderHistoryProductType(this.extend(request, params));
            }
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1728129807637,
            //         "data": {
            //             "nextFlag": false,
            //             "endId": "1221413696648339457",
            //             "orderList": [
            //                 {
            //                     "symbol": "ETHUSD_DMCBL",
            //                     "size": 0.1,
            //                     "orderId": "1225467075288719360",
            //                     "clientOid": "1225467075288719361",
            //                     "filledQty": 0.1,
            //                     "fee": -0.00005996,
            //                     "price": null,
            //                     "priceAvg": 2362.03,
            //                     "state": "filled",
            //                     "side": "burst_close_long",
            //                     "timeInForce": "normal",
            //                     "totalProfits": -0.00833590,
            //                     "posSide": "long",
            //                     "marginCoin": "ETH",
            //                     "filledAmount": 236.20300000,
            //                     "orderType": "market",
            //                     "leverage": "12",
            //                     "marginMode": "fixed",
            //                     "reduceOnly": true,
            //                     "enterPointSource": "SYS",
            //                     "tradeSide": "burst_close_long",
            //                     "holdMode": "double_hold",
            //                     "orderSource": "market",
            //                     "cTime": "1727900039503",
            //                     "uTime": "1727900039576"
            //                 }
            //             ]
            //         }
            //     }
            //
            const data = this.safeDict(response, 'data', {});
            result = this.safeList(data, 'orderList', []);
        }
        return this.parseOrders(result, market);
    }
    /**
     * @method
     * @name coincatch#cancelOrder
     * @description cancels an open order
     * @see https://coincatch.github.io/github.io/en/spot/#cancel-order-v2
     * @see https://coincatch.github.io/github.io/en/spot/#cancel-plan-order
     * @see https://coincatch.github.io/github.io/en/mix/#cancel-order
     * @see https://coincatch.github.io/github.io/en/mix/#cancel-plan-order-tpsl
     * @param {string} id order id
     * @param {string} symbol unified symbol of the market the order was made in
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.clientOrderId] a unique id for the order that can be used as an alternative for the id
     * @param {bool} [params.trigger] true for canceling a trigger order (default false)
     * @param {bool} [params.stop] *swap only* an alternative for trigger param
     * @param {string} [params.planType] *swap trigger only* the type of the plan order to cancel: 'profit_plan' - profit order, 'loss_plan' - loss order, 'normal_plan' - plan order, 'pos_profit' - position profit, 'pos_loss' - position loss, 'moving_plan' - Trailing TP/SL, 'track_plan' - Trailing Stop
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async cancelOrder(id, symbol = undefined, params = {}) {
        const methodName = 'cancelOrder';
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {};
        let clientOrderId = undefined;
        [clientOrderId, params] = this.handleParamString(params, 'clientOrderId');
        if ((id === undefined) && (clientOrderId === undefined)) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires an id argument or clientOrderId parameter');
        }
        if (clientOrderId !== undefined) {
            request['clientOid'] = clientOrderId;
        }
        else {
            request['orderId'] = id;
        }
        const marketType = market['type'];
        let trigger = false;
        [trigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', trigger);
        let response = undefined;
        if (!trigger || (marketType !== 'spot')) {
            request['symbol'] = market['id'];
        }
        if (marketType === 'spot') {
            if (trigger) {
                response = await this.privatePostApiSpotV1PlanCancelPlan(this.extend(request, params));
            }
            else {
                response = await this.privatePostApiSpotV1TradeCancelOrderV2(this.extend(request, params));
            }
        }
        else if (marketType === 'swap') {
            let planType = undefined;
            [planType, params] = this.handleOptionAndParams(params, methodName, 'planType', planType);
            request['marginCoin'] = market['settleId'];
            if ((trigger) || (planType !== undefined)) {
                if (planType === undefined) {
                    throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a planType parameter for swap trigger orders ("profit_plan" - profit order, "loss_plan" - loss order, "normal_plan" - plan order, "pos_profit" - position profit, "pos_loss" - position loss, "moving_plan" - Trailing TP/SL, "track_plan" - Trailing Stop)');
                }
                request['planType'] = planType;
                response = await this.privatePostApiMixV1PlanCancelPlan(this.extend(request, params));
            }
            else {
                response = await this.privatePostApiMixV1OrderCancelOrder(this.extend(request, params));
            }
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const data = this.safeDict(response, 'data', {});
        return this.parseOrder(data, market);
    }
    /**
     * @method
     * @name coincatch#cancelAllOrders
     * @description cancels all open orders
     * @see https://coincatch.github.io/github.io/en/spot/#cancel-all-orders
     * @see https://coincatch.github.io/github.io/en/spot/#batch-cancel-plan-orders
     * @see https://coincatch.github.io/github.io/en/mix/#batch-cancel-order
     * @see https://coincatch.github.io/github.io/en/mix/#cancel-order-by-symbol
     * @see https://coincatch.github.io/github.io/en/mix/#cancel-plan-order-tpsl-by-symbol
     * @see https://coincatch.github.io/github.io/en/mix/#cancel-all-trigger-order-tpsl
     * @param {string} [symbol] unified symbol of the market the orders were made in
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.type] 'spot' or 'swap' - the type of the market to cancel orders for (default 'spot')
     * @param {bool} [params.trigger] true for canceling a trigger orders (default false)
     * @param {string} [params.productType] *swap only (if symbol is not provided* 'umcbl' or 'dmcbl' - the product type of the market to cancel orders for (default 'umcbl')
     * @param {string} [params.marginCoin] *mandatory for swap non-trigger dmcb (if symbol is not provided)* the margin coin of the market to cancel orders for
     * @param {string} [params.planType] *swap trigger only* the type of the plan order to cancel: 'profit_plan' - profit order, 'loss_plan' - loss order, 'normal_plan' - plan order, 'pos_profit' - position profit, 'pos_loss' - position loss, 'moving_plan' - Trailing TP/SL, 'track_plan' - Trailing Stop
     * @returns {object} response from the exchange
     */
    async cancelAllOrders(symbol = undefined, params = {}) {
        const methodName = 'cancelAllOrders';
        await this.loadMarkets();
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
        }
        const request = {};
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
        let trigger = false;
        [trigger, params] = this.handleOptionAndParams2(params, methodName, 'trigger', 'stop', trigger);
        let response = undefined;
        if (marketType === 'spot') {
            if (trigger) {
                if (symbol !== undefined) {
                    request['symbols'] = [market['id']];
                }
                response = await this.privatePostApiSpotV1PlanBatchCancelPlan(this.extend(request, params));
                //
                //     {
                //         "code": "00000",
                //         "msg": "success",
                //         "requestTime": 1728670464735,
                //         "data": [
                //             {
                //                 "orderId": "1228661660806787072",
                //                 "clientOid": "1228661660752261120",
                //                 "result": true
                //             }
                //         ]
                //     }
                //
                const data = this.safeList(response, 'data', []);
                return this.parseOrders(data, market);
            }
            else {
                if (symbol === undefined) {
                    throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a symbol argument for spot non-trigger orders');
                }
                request['symbol'] = market['id'];
                //
                //     {
                //         "code": "00000",
                //         "msg": "success",
                //         "requestTime": 1725989560461,
                //         "data": "ETHUSDT_SPBL"
                //     }
                //
                response = await this.privatePostApiSpotV1TradeCancelSymbolOrder(this.extend(request, params));
            }
        }
        else if (marketType === 'swap') {
            let productType = 'umcbl';
            if (symbol !== undefined) {
                request['symbol'] = market['id'];
            }
            else {
                productType = this.handleOption(methodName, 'productType', productType);
                request['productType'] = productType; // we need either symbol or productType
            }
            let planType = undefined;
            [planType, params] = this.handleOptionAndParams(params, methodName, 'planType', planType);
            if ((trigger) || (planType !== undefined)) { // if trigger or stop-loss/take-profit orders
                if (planType === undefined) {
                    throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a planType parameter for swap trigger orders ("profit_plan" - profit order, "loss_plan" - loss order, "normal_plan" - plan order, "pos_profit" - position profit, "pos_loss" - position loss, "moving_plan" - Trailing TP/SL, "track_plan" - Trailing Stop)');
                }
                request['planType'] = planType;
                if (symbol !== undefined) {
                    response = await this.privatePostApiMixV1PlanCancelSymbolPlan(this.extend(request, params));
                }
                else {
                    response = await this.privatePostApiMixV1PlanCancelAllPlan(this.extend(request, params));
                }
            }
            else if (symbol !== undefined) { // if non-trigger orders and symbol is provided
                request['marginCoin'] = market['settleId'];
                response = await this.privatePostApiMixV1OrderCancelSymbolOrders(this.extend(request, params));
            }
            else { // if non-trigger orders and symbol is not provided
                let marginCoin = undefined;
                if (productType === 'umcbl') {
                    marginCoin = 'USDT';
                }
                else {
                    [marginCoin, params] = this.handleOptionAndParams(params, methodName, 'marginCoin', marginCoin);
                    if (marginCoin === undefined) {
                        throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a marginCoin parameter for dmcbl product type');
                    }
                }
                request['marginCoin'] = marginCoin;
                response = await this.privatePostApiMixV1OrderCancelAllOrders(this.extend(request, params));
            }
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1729104940774,
            //         "data": {
            //             "result": true,
            //             "order_ids": [ "1230500426827522049" ],
            //             "client_order_ids": [ "1230500426898825216" ],
            //             "fail_infos": []
            //         }
            //     }
            //
            const result = this.getResultFromBatchCancelingSwapOrders(response);
            return this.parseOrders(result, market);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const order = this.safeOrder(response);
        order['info'] = response;
        return [order];
    }
    /**
     * @method
     * @name coincatch#cancelOrders
     * @description cancel multiple non-trigger orders
     * @see https://coincatch.github.io/github.io/en/spot/#cancel-order-in-batch-v2-single-instruments
     * @param {string[]} ids order ids
     * @param {string} symbol *is mandatory* unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string[]} [params.clientOrderIds] client order ids
     * @returns {object} an list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async cancelOrders(ids, symbol = undefined, params = {}) {
        const methodName = 'cancelOrders';
        // only non-trigger and not tp/sl orders can be canceled via cancelOrders
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        const marketType = market['type'];
        const clientOrderIds = this.safeList(params, 'clientOrderIds');
        if (clientOrderIds !== undefined) {
            request['clientOids'] = clientOrderIds;
            params = this.omit(params, 'clientOrderIds');
        }
        else if (ids === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires either ids argument or clientOrderIds parameter');
        }
        else {
            request['orderIds'] = ids;
        }
        let response = undefined;
        let result = undefined;
        if (marketType === 'spot') {
            response = await this.privatePostApiSpotV1TradeCancelBatchOrdersV2(this.extend(request));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1726491486352,
            //         "data": {
            //             "resultList": [
            //                 {
            //                     "orderId": "1219555778395160576",
            //                     "clientOrderId": "e229d70a-bb16-4633-a45c-d7f4d3b5d2cf"
            //                 }
            //             ],
            //             "failure": [
            //                 {
            //                     "orderId": "123124124",
            //                     "clientOrderId": null,
            //                     "errorMsg": "The order does not exist",
            //                     "errorCode": "43001"
            //                 }
            //             ]
            //         }
            //     }
            //
            const data = this.safeDict(response, 'data', {});
            result = this.safeList(data, 'resultList', []);
        }
        else if (marketType === 'swap') {
            request['marginCoin'] = market['settleId'];
            response = await this.privatePostApiMixV1OrderCancelBatchOrders(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1729101962321,
            //         "data": {
            //             "result": true,
            //             "symbol": "ETHUSDT_UMCBL",
            //             "order_ids": [ "1226441551501418496", "1230506854262857729" ],
            //             "client_order_ids": [],
            //             "fail_infos": []
            //         }
            //     }
            //
            result = this.getResultFromBatchCancelingSwapOrders(response);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        return this.parseOrders(result, market);
    }
    getResultFromBatchCancelingSwapOrders(response) {
        const data = this.safeDict(response, 'data', {});
        const result = [];
        const orderIds = this.safeValue(data, 'order_ids', []);
        for (let i = 0; i < orderIds.length; i++) {
            const orderId = orderIds[i];
            const resultItem = {
                'orderId': orderId,
            };
            result.push(resultItem);
        }
        return result;
    }
    parseOrder(order, market = undefined) {
        //
        // createOrder spot
        //     {
        //         "orderId": "1217143186968068096",
        //         "clientOrderId": "8fa3eb89-2377-4519-a199-35d5db9ed262"
        //     }
        //
        // createOrder swap
        //     {
        //         "clientOid": "1225791137701519360",
        //         "orderId": "1225791137697325056"
        //     }
        //
        // privatePostApiSpotV1TradeOrderInfo, privatePostApiSpotV1TradeHistory
        //     {
        //         "accountId": "1002820815393",
        //         "symbol": "ETHUSDT_SPBL",
        //         "orderId": "1217143186968068096",
        //         "clientOrderId": "8fa3eb89-2377-4519-a199-35d5db9ed262",
        //         "price": "0",
        //         "quantity": "10.0000000000000000",
        //         "orderType": "market",
        //         "side": "buy",
        //         "status": "full_fill",
        //         "fillPrice": "2340.5500000000000000",
        //         "fillQuantity": "0.0042000000000000",
        //         "fillTotalAmount": "9.8303100000000000",
        //         "enterPointSource": "API",
        //         "feeDetail": "{
        //             \"ETH\": {
        //                 \"deduction\": false,
        //                 \"feeCoinCode\": \"ETH\",
        //                 \"totalDeductionFee\": 0,
        //                 \"totalFee\": -0.0000042000000000},
        //                 \"newFees\": {
        //                     \"c\": 0,
        //                     \"d\": 0,
        //                     \"deduction\": false,
        //                     \"r\": -0.0000042,
        //                     \"t\": -0.0000042,
        //                     \"totalDeductionFee\": 0
        //             }
        //         }",
        //         "orderSource": "market",
        //         "cTime": "1725915469877"
        //     }
        //
        // privatePostApiMixV1OrderDetail, privateGetApiMixV1OrderMarginCoinCurrent
        //     {
        //         "symbol": "ETHUSDT_UMCBL",
        //         "size": 0.01,
        //         "orderId": "1225791137697325056",
        //         "clientOid": "1225791137701519360",
        //         "filledQty": 0.01,
        //         "fee": -0.01398864,
        //         "price": null,
        //         "priceAvg": 2331.44,
        //         "state": "filled",
        //         "side": "close_long",
        //         "timeInForce": "normal",
        //         "totalProfits": -2.23680000,
        //         "posSide": "long",
        //         "marginCoin": "USDT",
        //         "filledAmount": 23.3144,
        //         "orderType": "market",
        //         "leverage": "5",
        //         "marginMode": "crossed",
        //         "reduceOnly": true,
        //         "enterPointSource": "API",
        //         "tradeSide": "close_long",
        //         "holdMode": "double_hold",
        //         "orderSource": "market",
        //         "cTime": "1727977302003",
        //         "uTime": "1727977303604"
        //     }
        //
        // privatePostApiSpotV1TradeOpenOrders
        //     {
        //         "accountId": "1002820815393",
        //         "symbol": "ETHUSDT_SPBL",
        //         "orderId": "1217347655911653376",
        //         "clientOrderId": "c57c07d1-bd00-4167-95e2-9b22a55fbc28",
        //         "price": "2000.0000000000000000",
        //         "quantity": "0.0010000000000000",
        //         "orderType": "limit",
        //         "side": "buy",
        //         "status": "new",
        //         "fillPrice": "0",
        //         "fillQuantity": "0.0000000000000000",
        //         "fillTotalAmount": "0.0000000000000000",
        //         "enterPointSource": "API",
        //         "feeDetail": "",
        //         "orderSource": "normal",
        //         "cTime": "1725964219072"
        //     }
        //
        // privatePostApiSpotV1PlanCurrentPlan, privatePostApiSpotV1PlanHistoryPlan
        //     {
        //         "orderId": "1228669617606991872",
        //         "clientOid": "1228669617573437440",
        //         "symbol": "ETHUSDT_SPBL",
        //         "size": "50",
        //         "executePrice": "0",
        //         "triggerPrice": "4000",
        //         "status": "not_trigger",
        //         "orderType": "market",
        //         "side": "sell",
        //         "triggerType": "fill_price",
        //         "enterPointSource": "API",
        //         "placeType": null,
        //         "cTime": "1728663585092",
        //         "uTime": null
        //     }
        //
        // privateGetApiMixV1PlanCurrentPlan
        //     {
        //         "orderId": "1230779428914049025",
        //         "clientOid": "1230779428914049024",
        //         "symbol": "ETHUSDT_UMCBL",
        //         "marginCoin": "USDT",
        //         "size": "0.01",
        //         "executePrice": "1000",
        //         "triggerPrice": "1200",
        //         "status": "not_trigger",
        //         "orderType": "limit",
        //         "planType": "normal_plan",
        //         "side": "buy_single",
        //         "triggerType": "fill_price",
        //         "presetTakeProfitPrice": "4000",
        //         "presetTakeLossPrice": "900",
        //         "rangeRate": "",
        //         "enterPointSource": "API",
        //         "tradeSide": "buy_single",
        //         "holdMode": "single_hold",
        //         "reduceOnly": false,
        //         "cTime": "1729166603306",
        //         "uTime": null
        //     }
        //
        const marketId = this.safeString(order, 'symbol');
        const marginCoin = this.safeString(order, 'marginCoin');
        market = this.safeMarketCustom(marketId, market, marginCoin);
        const timestamp = this.safeInteger(order, 'cTime');
        let price = this.omitZero(this.safeString2(order, 'price', 'executePrice')); // price is zero for market orders
        const priceAvg = this.omitZero(this.safeString(order, 'priceAvg'));
        if (price === undefined) {
            price = priceAvg;
        }
        const type = this.safeString(order, 'orderType');
        const side = this.parseOrderSide(this.safeStringLower(order, 'side'));
        let amount = this.safeString2(order, 'quantity', 'size');
        const isTrigger = this.safeString(order, 'triggerType') !== undefined;
        const isMarketBuy = (type === 'market') && (side === 'buy');
        if ((market['spot']) && (isMarketBuy) && (!isTrigger)) {
            amount = undefined; // cost instead of amount is returned for market buy spot non-trigger orders
        }
        const status = this.safeString2(order, 'status', 'state');
        const feeDetailString = this.safeString(order, 'feeDetail');
        let fees = undefined;
        let feeCurrency = undefined;
        let feeCost = undefined;
        if (feeDetailString !== undefined) {
            fees = this.parseFeeDetailString(feeDetailString);
        }
        else {
            feeCurrency = marginCoin ? this.safeCurrencyCode(marginCoin) : undefined;
            feeCost = Precise["default"].stringAbs(this.safeString(order, 'fee'));
        }
        const timeInForce = this.parseOrderTimeInForce(this.safeStringLower(order, 'timeInForce'));
        let postOnly = undefined;
        if (timeInForce !== undefined) {
            postOnly = timeInForce === 'PO';
        }
        const triggerPrice = this.omitZero(this.safeString(order, 'triggerPrice'));
        let takeProfitPrice = this.omitZero(this.safeString(order, 'presetTakeProfitPrice'));
        let stopLossPrice = this.omitZero(this.safeString2(order, 'presetTakeProfitPrice', 'presetTakeLossPrice'));
        const planType = this.safeString(order, 'planType');
        if (planType === 'loss_plan') {
            stopLossPrice = triggerPrice;
        }
        else if (planType === 'profit_plan') {
            takeProfitPrice = triggerPrice;
        }
        return this.safeOrder({
            'id': this.safeString(order, 'orderId'),
            'clientOrderId': this.safeString2(order, 'clientOrderId', 'clientOid'),
            'datetime': this.iso8601(timestamp),
            'timestamp': timestamp,
            'lastTradeTimestamp': undefined,
            'lastUpdateTimestamp': this.safeInteger(order, 'uTime'),
            'status': this.parseOrderStatus(status),
            'symbol': market['symbol'],
            'type': type,
            'timeInForce': timeInForce,
            'side': side,
            'price': price,
            'average': priceAvg ? priceAvg : this.safeString(order, 'fillPrice'),
            'amount': amount,
            'filled': this.safeString2(order, 'fillQuantity', 'filledQty'),
            'remaining': undefined,
            'triggerPrice': triggerPrice,
            'takeProfitPrice': takeProfitPrice,
            'stopLossPrice': stopLossPrice,
            'cost': this.safeString2(order, 'fillTotalAmount', 'filledAmount'),
            'trades': undefined,
            'fee': {
                'currency': feeCurrency,
                'cost': feeCost,
            },
            'fees': fees,
            'reduceOnly': this.safeBool(order, 'reduceOnly'),
            'postOnly': postOnly,
            'info': order,
        }, market);
    }
    parseOrderStatus(status) {
        const satuses = {
            'not_trigger': 'open',
            'init': 'open',
            'new': 'open',
            'partially_filled': 'open',
            'full_fill': 'closed',
            'filled': 'closed',
            'cancel': 'canceled',
            'canceled': 'canceled',
            'cancelled': 'canceled',
        };
        return this.safeString(satuses, status, status);
    }
    parseOrderSide(side) {
        const sides = {
            'buy': 'buy',
            'sell': 'sell',
            'open_long': 'buy',
            'open_short': 'sell',
            'close_long': 'sell',
            'close_short': 'buy',
            'reduce_close_long': 'sell',
            'reduce_close_short': 'buy',
            'offset_close_long': 'sell',
            'offset_close_short': 'buy',
            'burst_close_long': 'sell',
            'burst_close_short': 'buy',
            'delivery_close_long': 'sell',
            'delivery_close_short': 'buy',
            'buy_single': 'buy',
            'sell_single': 'sell',
        };
        return this.safeString(sides, side, side);
    }
    parseOrderTimeInForce(timeInForce) {
        const timeInForces = {
            'normal': 'GTC',
            'post_only': 'PO',
            'iok': 'IOC',
            'fok': 'FOK',
        };
        return this.safeString(timeInForces, timeInForce, timeInForce);
    }
    parseFeeDetailString(feeDetailString) {
        const result = [];
        const feeDetail = this.parseJson(feeDetailString);
        if (feeDetail) {
            const keys = Object.keys(feeDetail);
            for (let i = 0; i < keys.length; i++) {
                const currencyId = this.safeString(keys, i);
                if (currencyId in this.currencies_by_id) {
                    const currency = this.safeCurrencyCode(currencyId);
                    const feeEntry = this.safeDict(feeDetail, currencyId, {});
                    const amount = Precise["default"].stringAbs(this.safeString(feeEntry, 'totalFee'));
                    result.push({
                        'currency': currency,
                        'amount': amount,
                    });
                }
            }
        }
        return result;
    }
    /**
     * @method
     * @name coincatch#fetchMyTrades
     * @description fetch all trades made by the user
     * @see https://coincatch.github.io/github.io/en/spot/#get-transaction-details
     * @see https://coincatch.github.io/github.io/en/mix/#get-order-fill-detail
     * @see https://coincatch.github.io/github.io/en/mix/#get-producttype-order-fill-detail
     * @param {string} symbol *is mandatory* unified market symbol
     * @param {int} [since] the earliest time in ms to fetch trades for
     * @param {int} [limit] the maximum amount of trades to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] *swap markets only* the latest time in ms to fetch trades for, only supports the last 30 days timeframe
     * @param {string} [params.lastEndId] *swap markets only* query the data after this tradeId
     * @returns {Trade[]} a list of [trade structures]{@link https://github.com/ccxt/ccxt/wiki/Manual#trade-structure}
     */
    async fetchMyTrades(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        let methodName = 'fetchMyTrades';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        await this.loadMarkets();
        let market = undefined;
        let marketType = 'spot';
        const request = {};
        if (symbol !== undefined) {
            market = this.market(symbol);
            marketType = market['type'];
            request['symbol'] = market['id'];
        }
        else {
            [marketType, params] = this.handleMarketTypeAndParams(methodName, market, params, marketType);
            if (marketType === 'spot') {
                throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument for spot markets');
            }
        }
        let response = undefined;
        let requestLimit = limit;
        if (marketType === 'spot') {
            const maxSpotLimit = 500;
            if (since !== undefined) {
                requestLimit = maxSpotLimit;
            }
            if (requestLimit !== undefined) {
                request['limit'] = requestLimit;
            }
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1725968747299,
            //         "data": [
            //             {
            //                 "accountId": "1002820815393",
            //                 "symbol": "ETHUSDT_SPBL",
            //                 "orderId": "1217143186968068096",
            //                 "fillId": "1217143193356505089",
            //                 "orderType": "market",
            //                 "side": "buy",
            //                 "fillPrice": "2340.55",
            //                 "fillQuantity": "0.0042",
            //                 "fillTotalAmount": "9.83031",
            //                 "feeCcy": "ETH",
            //                 "fees": "-0.0000042",
            //                 "takerMakerFlag": "taker",
            //                 "cTime": "1725915471400"
            //             },
            //             ...
            //         ]
            //     }
            //
            response = await this.privatePostApiSpotV1TradeFills(this.extend(request, params));
        }
        else if (marketType === 'swap') {
            if (since !== undefined) {
                params['startTime'] = since;
            }
            else {
                params['startTime'] = 0; // mandatory
            }
            let until = undefined;
            [until, params] = this.handleOptionAndParams(params, methodName, 'until');
            if (until !== undefined) {
                request['endTime'] = until;
            }
            else {
                request['endTime'] = this.milliseconds(); // mandatory
            }
            if (symbol !== undefined) {
                //
                //     {
                //         "code": "00000",
                //         "msg": "success",
                //         "requestTime": 1728306590704,
                //         "data": [
                //             {
                //                 "tradeId": "1221355735285014530",
                //                 "symbol": "ETHUSDT_UMCBL",
                //                 "orderId": "1221355728716259329",
                //                 "price": "2555.12",
                //                 "sizeQty": "0.01",
                //                 "fee": "-0.01533072",
                //                 "side": "open_long",
                //                 "fillAmount": "25.5512",
                //                 "profit": "0",
                //                 "enterPointSource": "API",
                //                 "tradeSide": "open_long",
                //                 "holdMode": "double_hold",
                //                 "takerMakerFlag": "taker",
                //                 "cTime": "1726919819661"
                //             }
                //         ]
                //     }
                //
                response = await this.privateGetApiMixV1OrderFills(this.extend(request, params));
            }
            else {
                let productType = 'umcbl';
                productType = this.handleOption(methodName, 'productType', productType);
                request['productType'] = productType;
                //
                //     {
                //         "code": "00000",
                //         "msg": "success",
                //         "requestTime": 1728306372044,
                //         "data": [
                //             {
                //                 "tradeId": "1225467075440189441",
                //                 "symbol": "ETHUSD_DMCBL",
                //                 "orderId": "1225467075288719360",
                //                 "price": "2362.03",
                //                 "sizeQty": "0.1",
                //                 "fee": "-0.00005996",
                //                 "side": "burst_close_long",
                //                 "fillAmount": "236.203",
                //                 "profit": "-0.0083359",
                //                 "enterPointSource": "SYS",
                //                 "tradeSide": "burst_close_long",
                //                 "holdMode": "double_hold",
                //                 "takerMakerFlag": "taker",
                //                 "cTime": "1727900039539"
                //             },
                //             ...
                //         ]
                //     }
                //
                response = await this.privateGetApiMixV1OrderAllFills(this.extend(request, params));
            }
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + marketType + ' type of markets');
        }
        const data = this.safeList(response, 'data', []);
        return this.parseTrades(data, market, since, limit);
    }
    /**
     * @method
     * @name coincatch#fetchOrderTrades
     * @description fetch all the trades made from a single order
     * @see https://coincatch.github.io/github.io/en/spot/#get-transaction-details
     * @param {string} id order id
     * @param {string} symbol unified market symbol
     * @param {int} [since] the earliest time in ms to fetch trades for
     * @param {int} [limit] the maximum number of trades to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure}
     */
    async fetchOrderTrades(id, symbol = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchOrderTrades';
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + ' () requires a symbol argument');
        }
        const request = {
            'orderId': id,
            'methodName': methodName,
        };
        return await this.fetchMyTrades(symbol, since, limit, this.extend(request, params));
    }
    /**
     * @method
     * @name coincatch#fetchMarginMode
     * @description fetches the margin mode of the trading pair
     * @see https://coincatch.github.io/github.io/en/mix/#get-single-account
     * @param {string} symbol unified symbol of the market to fetch the margin mode for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [margin mode structure]{@link https://docs.ccxt.com/#/?id=margin-mode-structure}
     */
    async fetchMarginMode(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
        };
        const response = await this.privateGetApiMixV1AccountAccount(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726669633799,
        //         "data": {
        //             "marginCoin": "ETH",
        //             "locked": "0",
        //             "available": "0.01",
        //             "crossMaxAvailable": "0.01",
        //             "fixedMaxAvailable": "0.01",
        //             "maxTransferOut": "0.01",
        //             "equity": "0.01",
        //             "usdtEquity": "22.97657025",
        //             "btcEquity": "0.000386195288",
        //             "crossRiskRate": "0",
        //             "crossMarginLeverage": 100,
        //             "fixedLongLeverage": 100,
        //             "fixedShortLeverage": 100,
        //             "marginMode": "crossed",
        //             "holdMode": "double_hold",
        //             "unrealizedPL": "0",
        //             "bonus": "0",
        //             "crossedUnrealizedPL": "0",
        //             "isolatedUnrealizedPL": ""
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseMarginMode(data, market);
    }
    parseMarginMode(marginMode, market = undefined) {
        const marginType = this.safeStringLower(marginMode, 'marginMode');
        return {
            'info': marginMode,
            'symbol': this.safeSymbol(undefined, market),
            'marginMode': this.parseMarginModeType(marginType),
        };
    }
    parseMarginModeType(type) {
        const types = {
            'crossed': 'cross',
            'fixed': 'isolated',
        };
        return this.safeString(types, type, type);
    }
    /**
     * @method
     * @name coincatch#setMarginMode
     * @description set margin mode to 'cross' or 'isolated'
     * @see https://coincatch.github.io/github.io/en/mix/#change-margin-mode
     * @param {string} marginMode 'cross' or 'isolated'
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} response from the exchange
     */
    async setMarginMode(marginMode, symbol = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' setMarginMode() requires a symbol argument');
        }
        marginMode = marginMode.toLowerCase();
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['type'] !== 'swap') {
            throw new errors.NotSupported(this.id + ' setMarginMode() is not supported for ' + market['type'] + ' type of markets');
        }
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
            'marginMode': this.encodeMarginModeType(marginMode),
        };
        const response = await this.privatePostApiMixV1AccountSetMarginMode(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726670096099,
        //         "data": {
        //             "symbol": "ETHUSD_DMCBL",
        //             "marginCoin": "ETH",
        //             "longLeverage": 10,
        //             "shortLeverage": 10,
        //             "crossMarginLeverage": null,
        //             "marginMode": "fixed"
        //         }
        //     }
        //
        return response;
    }
    encodeMarginModeType(type) {
        const types = {
            'cross': 'crossed',
            'isolated': 'fixed',
        };
        return this.safeString(types, type, type);
    }
    /**
     * @method
     * @name coincatch#fetchPositionMode
     * @description fetchs the position mode, hedged or one way
     * @see https://coincatch.github.io/github.io/en/mix/#get-single-account
     * @param {string} symbol unified symbol of the market to fetch entry for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an object detailing whether the market is in hedged or one-way mode
     */
    async fetchPositionMode(symbol = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' fetchPositionMode() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['type'] !== 'swap') {
            throw new errors.NotSupported(this.id + ' fetchPositionMode() is not supported for ' + market['type'] + ' type of markets');
        }
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
        };
        const response = await this.privateGetApiMixV1AccountAccount(this.extend(request, params)); // same endpoint as fetchMarginMode
        const data = this.safeDict(response, 'data', {});
        const holdMode = this.safeString(data, 'holdMode');
        return {
            'info': response,
            'hedged': holdMode === 'double_hold',
        };
    }
    /**
     * @method
     * @name coincatch#setPositionMode
     * @description set hedged to true or false for a market
     * @see https://bingx-api.github.io/docs/#/en-us/swapV2/trade-api.html#Set%20Position%20Mode
     * @param {bool} hedged set to true to use dualSidePosition
     * @param {string} symbol unified symbol of the market to fetch entry for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.productType] 'umcbl' or 'dmcbl' (default 'umcbl' if symbol is not provided)
     * @returns {object} response from the exchange
     */
    async setPositionMode(hedged, symbol = undefined, params = {}) {
        const methodName = 'setPositionMode';
        const defaultProductType = 'umcbl';
        await this.loadMarkets();
        let productType = this.safeString(params, 'productType');
        if (productType === undefined) {
            if (symbol !== undefined) {
                const market = this.market(symbol);
                if (market['type'] !== 'swap') {
                    throw new errors.NotSupported(this.id + ' setPositionMode() is not supported for ' + market['type'] + ' type of markets');
                }
                const marketId = market['id'];
                const parts = marketId.split('_');
                productType = this.safeStringLower(parts, 1, productType);
            }
            else {
                productType = this.handleOption(methodName, 'productType', defaultProductType);
            }
        }
        const request = {
            'productType': productType,
            'holdMode': hedged ? 'double_hold' : 'single_hold',
        };
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726677135005,
        //         "data": {
        //             "marginCoin": "ETH",
        //             "dualSidePosition": false
        //         }
        //     }
        //
        return await this.privatePostApiMixV1AccountSetPositionMode(this.extend(request, params));
    }
    /**
     * @method
     * @name coincatch#fetchLeverage
     * @description fetch the set leverage for a market
     * @see https://coincatch.github.io/github.io/en/mix/#get-single-account
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [leverage structure]{@link https://docs.ccxt.com/#/?id=leverage-structure}
     */
    async fetchLeverage(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['type'] !== 'swap') {
            throw new errors.NotSupported(this.id + ' fetchLeverage() is not supported for ' + market['type'] + ' type of markets');
        }
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
        };
        const response = await this.privateGetApiMixV1AccountAccount(this.extend(request, params)); // same endpoint as fetchMarginMode
        const data = this.safeDict(response, 'data', {});
        return this.parseLeverage(data, market);
    }
    /**
     * @method
     * @name coincatch#setLeverage
     * @description set the level of leverage for a market
     * @see https://hashkeyglobal-apidoc.readme.io/reference/change-futures-leverage-trade
     * @param {float} leverage the rate of leverage
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.side] *for isolated margin mode with hedged position mode only* 'long' or 'short'
     * @returns {object} response from the exchange
     */
    async setLeverage(leverage, symbol = undefined, params = {}) {
        const methodName = 'setLeverage';
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' ' + methodName + '() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['type'] !== 'swap') {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
            'leverage': leverage,
        };
        let side = undefined;
        [side, params] = this.handleOptionAndParams(params, methodName, 'side');
        if (side !== undefined) {
            request['holdSide'] = side;
        }
        const response = await this.privatePostApiMixV1AccountSetLeverage(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726680486657,
        //         "data": {
        //             "symbol": "ETHUSD_DMCBL",
        //             "marginCoin": "ETH",
        //             "longLeverage": 2,
        //             "shortLeverage": 2,
        //             "crossMarginLeverage": 2,
        //             "marginMode": "crossed"
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data', {});
        return this.parseLeverage(data, market);
    }
    parseLeverage(leverage, market = undefined) {
        //
        // fetchLeverage
        //     {
        //         "marginCoin": "ETH",
        //         "locked": "0",
        //         "available": "0.01",
        //         "crossMaxAvailable": "0.01",
        //         "fixedMaxAvailable": "0.01",
        //         "maxTransferOut": "0.01",
        //         "equity": "0.01",
        //         "usdtEquity": "22.97657025",
        //         "btcEquity": "0.000386195288",
        //         "crossRiskRate": "0",
        //         "crossMarginLeverage": 100,
        //         "fixedLongLeverage": 100,
        //         "fixedShortLeverage": 100,
        //         "marginMode": "crossed",
        //         "holdMode": "double_hold",
        //         "unrealizedPL": "0",
        //         "bonus": "0",
        //         "crossedUnrealizedPL": "0",
        //         "isolatedUnrealizedPL": ""
        //     }
        //
        // setLeverage
        //     {
        //         "symbol": "ETHUSD_DMCBL",
        //         "marginCoin": "ETH",
        //         "longLeverage": 2,
        //         "shortLeverage": 2,
        //         "crossMarginLeverage": 2,
        //         "marginMode": "crossed"
        //     }
        //
        const marketId = this.safeString(leverage, 'symbol');
        market = this.safeMarketCustom(marketId, market);
        const marginMode = this.parseMarginModeType(this.safeStringLower(leverage, 'marginMode'));
        let longLeverage = this.safeInteger2(leverage, 'fixedLongLeverage', 'longLeverage');
        let shortLeverage = this.safeInteger2(leverage, 'fixedShortLeverage', 'shortLeverage');
        const crossMarginLeverage = this.safeInteger(leverage, 'crossMarginLeverage');
        if (marginMode === 'cross') {
            longLeverage = crossMarginLeverage;
            shortLeverage = crossMarginLeverage;
        }
        return {
            'info': leverage,
            'symbol': market['symbol'],
            'marginMode': marginMode,
            'longLeverage': longLeverage,
            'shortLeverage': shortLeverage,
        };
    }
    async modifyMarginHelper(symbol, amount, type, params = {}) {
        let methodName = 'modifyMarginHelper';
        [methodName, params] = this.handleParamString(params, 'methodName', methodName);
        await this.loadMarkets();
        const market = this.market(symbol);
        if (market['type'] !== 'swap') {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() is not supported for ' + market['type'] + ' type of markets');
        }
        amount = this.amountToPrecision(symbol, amount);
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
            'amount': amount, // positive value for adding margin, negative for reducing
        };
        let side = undefined;
        [side, params] = this.handleOptionAndParams(params, methodName, 'side');
        if (side !== undefined) {
            request['holdSide'] = side;
        }
        const response = await this.privatePostApiMixV1AccountSetMargin(this.extend(request, params));
        // todo check response
        // always returns error
        // addMargin - "code":"45006","msg":"Insufficient position","requestTime":1729162281543,"data":null
        // reduceMargin - "code":"40800","msg":"Insufficient amount of margin","requestTime":1729162362718,"data":null
        if (type === 'reduce') {
            amount = Precise["default"].stringAbs(amount);
        }
        return this.extend(this.parseMarginModification(response, market), {
            'amount': this.parseNumber(amount),
            'type': type,
        });
    }
    parseMarginModification(data, market = undefined) {
        //
        //
        const msg = this.safeString(data, 'msg');
        const status = (msg === 'success') ? 'ok' : 'failed';
        return {
            'info': data,
            'symbol': market['symbol'],
            'type': undefined,
            'marginMode': undefined,
            'amount': undefined,
            'total': undefined,
            'code': market['quote'],
            'status': status,
            'timestamp': undefined,
            'datetime': undefined,
        };
    }
    /**
     * @method
     * @name coincatch#reduceMargin
     * @description remove margin from a position
     * @see https://coincatch.github.io/github.io/en/mix/#change-margin
     * @param {string} symbol unified market symbol
     * @param {float} amount the amount of margin to remove
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.side] *for isolated margin mode with hedged position mode only* 'long' or 'short'
     * @returns {object} a [margin structure]{@link https://docs.ccxt.com/#/?id=reduce-margin-structure}
     */
    async reduceMargin(symbol, amount, params = {}) {
        params['methodName'] = 'reduceMargin';
        return await this.modifyMarginHelper(symbol, -amount, 'reduce', params);
    }
    /**
     * @method
     * @name coincatch#addMargin
     * @description add margin
     * @see https://coincatch.github.io/github.io/en/mix/#change-margin
     * @param {string} symbol unified market symbol
     * @param {float} amount amount of margin to add
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.side] *for isolated margin mode with hedged position mode only* 'long' or 'short'
     * @returns {object} a [margin structure]{@link https://docs.ccxt.com/#/?id=add-margin-structure}
     */
    async addMargin(symbol, amount, params = {}) {
        params['methodName'] = 'addMargin';
        return await this.modifyMarginHelper(symbol, amount, 'add', params);
    }
    /**
     * @method
     * @name coincatch#fetchPosition
     * @description fetch data on a single open contract trade position
     * @see https://coincatch.github.io/github.io/en/mix/#get-symbol-position
     * @param {string} symbol unified market symbol of the market the position is held in, default is undefined
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string}  [params.side] 'long' or 'short' *for non-hedged position mode only* (default 'long')
     * @returns {object} a [position structure]{@link https://docs.ccxt.com/#/?id=position-structure}
     */
    async fetchPosition(symbol, params = {}) {
        const methodName = 'fetchPosition';
        let side = 'long';
        [side, params] = this.handleOptionAndParams(params, methodName, 'side');
        const positions = await this.fetchPositionsForSymbol(symbol, params);
        const arrayLength = positions.length;
        if (arrayLength > 1) {
            for (let i = 0; i < positions.length; i++) {
                const position = positions[i];
                if (position['side'] === side) {
                    return position;
                }
            }
        }
        return positions[0];
    }
    /**
     * @method
     * @description fetch open positions for a single market
     * @name coincatch#fetchPositionsForSymbol
     * @see https://coincatch.github.io/github.io/en/mix/#get-symbol-position
     * @description fetch all open positions for specific symbol
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} a list of [position structure]{@link https://docs.ccxt.com/#/?id=position-structure}
     */
    async fetchPositionsForSymbol(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'marginCoin': market['settleId'],
        };
        const response = await this.privateGetApiMixV1PositionSinglePositionV2(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726926959041,
        //         "data": [
        //             {
        //                 "marginCoin": "USDT",
        //                 "symbol": "ETHUSDT_UMCBL",
        //                 "holdSide": "long",
        //                 "openDelegateCount": "0",
        //                 "margin": "2.55512",
        //                 "available": "0.01",
        //                 "locked": "0",
        //                 "total": "0.01",
        //                 "leverage": 10,
        //                 "achievedProfits": "0",
        //                 "averageOpenPrice": "2555.12",
        //                 "marginMode": "crossed",
        //                 "holdMode": "double_hold",
        //                 "unrealizedPL": "0.1371",
        //                 "liquidationPrice": "-3433.328491",
        //                 "keepMarginRate": "0.0033",
        //                 "marketPrice": "2568.83",
        //                 "marginRatio": "0.001666357648",
        //                 "autoMargin": "off",
        //                 "cTime": "1726919819686"
        //             }
        //         ]
        //     }
        //
        const data = this.safeList(response, 'data', []);
        return this.parsePositions(data, [symbol]);
    }
    /**
     * @method
     * @name coincatch#fetchPositions
     * @description fetch all open positions
     * @see https://coincatch.github.io/github.io/en/mix/#get-all-position
     * @param {string[]} [symbols] list of unified market symbols (all symbols must belong to the same product type)
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.productType] 'umcbl' or 'dmcbl' (default 'umcbl' if symbols are not provided)
     * @param {string} [params.marginCoin] the settle currency of the positions, needs to match the productType
     * @returns {object[]} a list of [position structure]{@link https://docs.ccxt.com/#/?id=position-structure}
     */
    async fetchPositions(symbols = undefined, params = {}) {
        const methodName = 'fetchPositions';
        await this.loadMarkets();
        let productType = 'umcbl';
        if (symbols !== undefined) {
            const marketIds = this.marketIds(symbols);
            let productTypes = [];
            for (let i = 0; i < marketIds.length; i++) {
                const marketId = marketIds[i];
                const parts = marketId.split('_');
                const marketProductType = this.safeString(parts, 1);
                productTypes.push(marketProductType);
            }
            productTypes = this.unique(productTypes);
            const arrayLength = productTypes.length;
            if (arrayLength > 1) {
                throw new errors.BadSymbol(this.id + ' ' + methodName + '() requires all symbols to belong to the same product type (umcbl or dmcbl)');
            }
            else {
                productType = productTypes[0];
            }
        }
        else {
            [productType, params] = this.handleOptionAndParams(params, methodName, 'productType', productType);
        }
        const request = {
            'productType': productType,
        };
        if (productType === 'dmcbl') {
            let marginCoin = undefined;
            [marginCoin, params] = this.handleOptionAndParams(params, methodName, 'marginCoin');
            if (marginCoin !== undefined) {
                const currency = this.currency(marginCoin);
                request['marginCoin'] = currency['id'];
            }
        }
        const response = await this.privateGetApiMixV1PositionAllPositionV2(this.extend(request, params));
        //
        //     {
        //         "code": "00000",
        //         "msg": "success",
        //         "requestTime": 1726933132054,
        //         "data": [
        //             {
        //                 "marginCoin": "USDT",
        //                 "symbol": "ETHUSDT_UMCBL",
        //                 "holdSide": "long",
        //                 "openDelegateCount": "0",
        //                 "margin": "2.55512",
        //                 "available": "0.01",
        //                 "locked": "0",
        //                 "total": "0.01",
        //                 "leverage": 10,
        //                 "achievedProfits": "0",
        //                 "averageOpenPrice": "2555.12",
        //                 "marginMode": "crossed",
        //                 "holdMode": "double_hold",
        //                 "unrealizedPL": "0.0093",
        //                 "liquidationPrice": "-3433.378333",
        //                 "keepMarginRate": "0.0033",
        //                 "marketPrice": "2556.05",
        //                 "marginRatio": "0.001661599511",
        //                 "autoMargin": "off",
        //                 "cTime": "1726919819686",
        //                 "uTime": "1726919819686"
        //             }
        //         ]
        //     }
        //
        const data = this.safeList(response, 'data', []);
        return this.parsePositions(data, symbols);
    }
    parsePosition(position, market = undefined) {
        //
        //     {
        //         "marginCoin": "USDT",
        //         "symbol": "ETHUSDT_UMCBL",
        //         "holdSide": "long",
        //         "openDelegateCount": "0",
        //         "margin": "2.55512",
        //         "available": "0.01",
        //         "locked": "0",
        //         "total": "0.01",
        //         "leverage": 10,
        //         "achievedProfits": "0",
        //         "averageOpenPrice": "2555.12",
        //         "marginMode": "crossed",
        //         "holdMode": "double_hold",
        //         "unrealizedPL": "0.0093",
        //         "liquidationPrice": "-3433.378333",
        //         "keepMarginRate": "0.0033",
        //         "marketPrice": "2556.05",
        //         "marginRatio": "0.001661599511",
        //         "autoMargin": "off",
        //         "cTime": "1726919819686",
        //         "uTime": "1726919819686"
        //     }
        //
        const marketId = this.safeString(position, 'symbol');
        const settleId = this.safeString(position, 'marginCoin');
        market = this.safeMarketCustom(marketId, market, settleId);
        const timestamp = this.safeInteger(position, 'cTime');
        const marginMode = this.safeString(position, 'marginMode');
        let isHedged = undefined;
        const holdMode = this.safeString(position, 'holdMode');
        if (holdMode === 'double_hold') {
            isHedged = true;
        }
        else if (holdMode === 'single_hold') {
            isHedged = false;
        }
        const margin = this.safeNumber(position, 'margin');
        const keepMarginRate = this.safeString(position, 'keepMarginRate');
        return this.safePosition({
            'symbol': market['symbol'],
            'id': undefined,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'contracts': this.safeNumber(position, 'total'),
            'contractSize': undefined,
            'side': this.safeStringLower(position, 'holdSide'),
            'notional': margin,
            'leverage': this.safeInteger(position, 'leverage'),
            'unrealizedPnl': this.safeNumber(position, 'unrealizedPL'),
            'realizedPnl': this.safeNumber(position, 'achievedProfits'),
            'collateral': undefined,
            'entryPrice': this.safeNumber(position, 'averageOpenPrice'),
            'markPrice': this.safeNumber(position, 'marketPrice'),
            'liquidationPrice': this.safeNumber(position, 'liquidationPrice'),
            'marginMode': this.parseMarginModeType(marginMode),
            'hedged': isHedged,
            'maintenanceMargin': undefined,
            'maintenanceMarginPercentage': this.parseNumber(Precise["default"].stringMul(keepMarginRate, '100')),
            'initialMargin': margin,
            'initialMarginPercentage': undefined,
            'marginRatio': this.safeNumber(position, 'marginRatio'),
            'lastUpdateTimestamp': this.safeInteger(position, 'uTime'),
            'lastPrice': undefined,
            'stopLossPrice': undefined,
            'takeProfitPrice': undefined,
            'percentage': undefined,
            'info': position,
        });
    }
    safeMarketCustom(marketId, market = undefined, settleId = undefined) {
        try {
            market = this.safeMarket(marketId, market);
        }
        catch (e) {
            // dmcbl markets have the same id and market type but different settleId
            // so we need to resolve the market by settleId
            const marketsWithCurrentId = this.safeList(this.markets_by_id, marketId, []);
            if (settleId === undefined) {
                market = marketsWithCurrentId[0]; // if settleId is not provided, return the first market with the current id
            }
            else {
                for (let i = 0; i < marketsWithCurrentId.length; i++) {
                    const marketWithCurrentId = marketsWithCurrentId[i];
                    if (marketWithCurrentId['settleId'] === settleId) {
                        market = marketWithCurrentId;
                        break;
                    }
                }
            }
        }
        return market;
    }
    /**
     * @method
     * @name coincatch#fetchLedger
     * @description fetch the history of changes, actions done by the user or operations that altered balance of the user
     * @see https://coincatch.github.io/github.io/en/spot/#get-bills
     * @see https://coincatch.github.io/github.io/en/mix/#get-business-account-bill
     * @param {string} [code] unified currency code
     * @param {int} [since] timestamp in ms of the earliest ledger entry, default is undefined
     * @param {int} [limit] max number of ledger entrys to return, default is undefined
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] *swap only* the latest time in ms to fetch entries for
     * @param {string} [params.type] 'spot' or 'swap' (default 'spot')
     * @param {string} [params.after] *spot only* billId, return the data less than this billId
     * @param {string} [params.before] *spot only* billId, return the data greater than or equals to this billId
     * @param {string} [params.groupType] *spot only*
     * @param {string} [params.bizType] *spot only*
     * @param {string} [params.productType] *swap only* 'umcbl' or 'dmcbl' (default 'umcbl' or 'dmcbl' if code is provided and code is not equal to 'USDT')
     * @param {string} [params.business] *swap only*
     * @param {string} [params.lastEndId] *swap only*
     * @param {bool} [params.next] *swap only*
     * @returns {object} a [ledger structure]{@link https://docs.ccxt.com/#/?id=ledger}
     */
    async fetchLedger(code = undefined, since = undefined, limit = undefined, params = {}) {
        const methodName = 'fetchLedger';
        await this.loadMarkets();
        const request = {};
        let marketType = 'spot';
        [marketType, params] = this.handleMarketTypeAndParams(methodName, undefined, params, marketType);
        let result = undefined;
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency(code);
        }
        if (marketType === 'spot') {
            if (currency !== undefined) {
                const numericId = this.safeString(currency, 'numericId');
                request['coinId'] = numericId;
            }
            if (limit !== undefined) {
                request['limit'] = limit;
            }
            const response = await this.privatePostApiSpotV1AccountBills(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1727964749515,
            //         "data": [
            //             {
            //                 "billId": "1220289012519190529",
            //                 "coinId": 2,
            //                 "coinName": "USDT",
            //                 "groupType": "transfer",
            //                 "bizType": "Transfer out",
            //                 "quantity": "-40.00000000",
            //                 "balance": "4.43878673",
            //                 "fees": "0.00000000",
            //                 "cTime": "1726665493092"
            //             },
            //             ...
            //         ]
            //     }
            //
            result = this.safeList(response, 'data', []);
        }
        else if (marketType === 'swap') {
            if (since !== undefined) {
                request['startTime'] = since;
            }
            else {
                request['startTime'] = 0; // is mandatory
            }
            let until = undefined;
            [until, params] = this.handleOptionAndParams(params, methodName, 'until');
            if (until !== undefined) {
                request['endTime'] = until;
            }
            else {
                request['endTime'] = this.milliseconds(); // is mandatory
            }
            if (limit !== undefined) {
                request['pageSize'] = limit;
            }
            let productType = 'umcbl';
            if (code === undefined) {
                productType = this.handleOption(methodName, 'productType', productType);
            }
            else if (code === 'USDT') {
                productType = 'umcbl';
            }
            else {
                productType = 'dmcbl';
            }
            [productType, params] = this.handleParamString(params, 'productType', productType);
            request['productType'] = productType;
            const response = await this.privateGetApiMixV1AccountAccountBusinessBill(this.extend(request, params));
            //
            //     {
            //         "code": "00000",
            //         "msg": "success",
            //         "requestTime": 1727971607663,
            //         "data": {
            //             "result": [
            //                 {
            //                     "id": "1225766556446064640",
            //                     "symbol": null,
            //                     "marginCoin": "ETH",
            //                     "amount": "-0.0016",
            //                     "fee": "0",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "trans_to_exchange",
            //                     "cTime": "1727971441425"
            //                 },
            //                 {
            //                     "id": "1225467081664061441",
            //                     "symbol": "ETHUSD_DMCBL",
            //                     "marginCoin": "ETH",
            //                     "amount": "-0.00052885",
            //                     "fee": "0",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "risk_captital_user_transfer",
            //                     "cTime": "1727900041024"
            //                 },
            //                 {
            //                     "id": "1225467075440189441",
            //                     "symbol": "ETHUSD_DMCBL",
            //                     "marginCoin": "ETH",
            //                     "amount": "-0.0083359",
            //                     "fee": "-0.00005996",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "burst_long_loss_query",
            //                     "cTime": "1727900039576"
            //                 },
            //                 {
            //                     "id": "1221416895715303426",
            //                     "symbol": "ETHUSD_DMCBL",
            //                     "marginCoin": "ETH",
            //                     "amount": "0.00004756",
            //                     "fee": "0",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "contract_settle_fee",
            //                     "cTime": "1726934401444"
            //                 },
            //                 {
            //                     "id": "1221413703233871873",
            //                     "symbol": "ETHUSD_DMCBL",
            //                     "marginCoin": "ETH",
            //                     "amount": "0",
            //                     "fee": "-0.00005996",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "open_long",
            //                     "cTime": "1726933640336"
            //                 },
            //                 {
            //                     "id": "1220288640761122816",
            //                     "symbol": null,
            //                     "marginCoin": "ETH",
            //                     "amount": "0.01",
            //                     "fee": "0",
            //                     "feeByCoupon": "",
            //                     "feeCoin": "ETH",
            //                     "business": "trans_from_exchange",
            //                     "cTime": "1726665404563"
            //                 }
            //             ],
            //             "lastEndId": "1220288641021337600",
            //             "nextFlag": false,
            //             "preFlag": false
            //         }
            //     }
            //
            const data = this.safeDict(response, 'data', {});
            result = this.safeList(data, 'result', []);
        }
        else {
            throw new errors.NotSupported(this.id + ' ' + methodName + '() does not support market type ' + marketType);
        }
        return this.parseLedger(result, currency, since, limit);
    }
    parseLedgerEntry(item, currency = undefined) {
        //
        // spot
        //     {
        //         "billId": "1220289012519190529",
        //         "coinId": 2,
        //         "coinName": "USDT",
        //         "groupType": "transfer",
        //         "bizType": "Transfer out",
        //         "quantity": "-40.00000000",
        //         "balance": "4.43878673",
        //         "fees": "0.00000000",
        //         "cTime": "1726665493092"
        //     }
        //
        // swap
        //     {
        //         "id": "1220288640761122816",
        //         "symbol": null,
        //         "marginCoin": "ETH",
        //         "amount": "0.01",
        //         "fee": "0",
        //         "feeByCoupon": "",
        //         "feeCoin": "ETH",
        //         "business": "trans_from_exchange",
        //         "cTime": "1726665404563"
        //     }
        //
        const timestamp = this.safeInteger(item, 'cTime');
        const settleId = this.safeString2(item, 'coinName', 'marginCoin');
        let market = undefined;
        const marketId = this.safeString(item, 'symbol');
        market = this.safeMarketCustom(marketId, market, settleId);
        let amountString = this.safeString2(item, 'quantity', 'amount');
        let direction = 'in';
        if (Precise["default"].stringLt(amountString, '0')) {
            direction = 'out';
            amountString = Precise["default"].stringMul(amountString, '-1');
        }
        const fee = {
            'cost': Precise["default"].stringAbs(this.safeString2(item, 'fee', 'fees')),
            'currency': this.safeString(item, 'feeCoin'),
        };
        return this.safeLedgerEntry({
            'id': this.safeString2(item, 'billId', 'id'),
            'info': item,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'account': undefined,
            'direction': direction,
            'referenceId': undefined,
            'referenceAccount': undefined,
            'type': this.parseLedgerEntryType(this.safeStringLower2(item, 'bizType', 'business')),
            'currency': this.safeCurrencyCode(settleId, currency),
            'symbol': market['symbol'],
            'amount': amountString,
            'before': undefined,
            'after': this.safeString(item, 'balance'),
            'status': 'ok',
            'fee': fee,
        }, currency);
    }
    parseLedgerEntryType(type) {
        const types = {
            'deposit': 'deposit',
            'withdraw': 'withdrawal',
            'buy': 'trade',
            'sell': 'trade',
            'deduction of handling fee': 'fee',
            'transfer-in': 'transfer',
            'transfer in': 'transfer',
            'transfer out': 'transfer',
            'rebate rewards': 'rebate',
            'airdrop rewards': 'rebate',
            'usdt contract rewards': 'rebate',
            'mix contract rewards': 'rebate',
            'system lock': 'system lock',
            'user lock': 'user lock',
            'open_long': 'trade',
            'open_short': 'trade',
            'close_long': 'trade',
            'close_short': 'trade',
            'trans_from_exchange': 'transfer',
            'trans_to_exchange': 'transfer',
            'contract_settle_fee': 'fee',
            'burst_long_loss_query': 'trade',
            'burst_short_loss_query': 'trade', // todo check
        };
        return this.safeString(types, type, type);
    }
    handleErrors(code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        if (!response) {
            return undefined; // fallback to default error handler
        }
        let message = this.safeString(response, 'msg');
        const feedback = this.id + ' ' + body;
        let messageCode = this.safeString(response, 'code');
        let success = (message === 'success') || (message === undefined);
        if (url.indexOf('batch') >= 0) { // createOrders, cancelOrders
            const data = this.safeDict(response, 'data', {});
            const failure = this.safeList2(data, 'failure', 'fail_infos', []);
            if (!this.isEmpty(failure)) {
                success = false;
                const firstEntry = this.safeDict(failure, 0, {});
                messageCode = this.safeString(firstEntry, 'errorCode');
                message = this.safeString(firstEntry, 'errorMsg');
            }
        }
        if (!success) {
            this.throwExactlyMatchedException(this.exceptions['exact'], messageCode, feedback);
            this.throwBroadlyMatchedException(this.exceptions['broad'], message, feedback);
            throw new errors.ExchangeError(feedback); // unknown message
        }
        return undefined;
    }
    sign(path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let endpoint = '/' + path;
        if (method === 'GET') {
            const query = this.urlencode(params);
            if (query.length !== 0) {
                endpoint += '?' + query;
            }
        }
        if (api === 'private') {
            this.checkRequiredCredentials();
            const timestamp = this.numberToString(this.milliseconds());
            let suffix = '';
            if (method !== 'GET') {
                body = this.json(params);
                suffix = body;
            }
            const payload = timestamp + method + endpoint + suffix;
            const signature = this.hmac(this.encode(payload), this.encode(this.secret), sha256.sha256, 'base64');
            headers = {
                'ACCESS-KEY': this.apiKey,
                'ACCESS-SIGN': signature,
                'ACCESS-TIMESTAMP': timestamp,
                'ACCESS-PASSPHRASE': this.password,
                'Content-Type': 'application/json',
                'X-CHANNEL-API-CODE': this.safeString(this.options, 'brokerId', '47cfy'),
            };
        }
        const url = this.urls['api'][api] + endpoint;
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
}

module.exports = coincatch;
