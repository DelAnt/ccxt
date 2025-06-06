using ccxt;
namespace Tests;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class testMainClass : BaseTest
{
    async static public Task<object> testFeatures(Exchange exchange, object skippedProperties)
    {
        object marketTypes = new List<object>() {"spot", "swap", "future", "option"};
        object subTypes = new List<object>() {"linear", "inverse"};
        object features = exchange.features;
        object keys = new List<object>(((IDictionary<string,object>)features).Keys);
        for (object i = 0; isLessThan(i, getArrayLength(keys)); postFixIncrement(ref i))
        {
            testSharedMethods.assertInArray(exchange, skippedProperties, "features", keys, i, marketTypes);
            object marketType = getValue(keys, i);
            object value = getValue(features, marketType);
            // assert (value !== undefined, 'exchange.features["' + marketType + '"] is undefined, that key should be either absent or have a value');
            if (isTrue(isEqual(value, null)))
            {
                continue;
            }
            if (isTrue(isEqual(marketType, "spot")))
            {
                testFeaturesInner(exchange, skippedProperties, value);
            } else
            {
                object subKeys = new List<object>(((IDictionary<string,object>)value).Keys);
                for (object j = 0; isLessThan(j, getArrayLength(subKeys)); postFixIncrement(ref j))
                {
                    object subKey = getValue(subKeys, j);
                    testSharedMethods.assertInArray(exchange, skippedProperties, "features", subKeys, j, subTypes);
                    object subValue = getValue(value, subKey);
                    // sometimes it might not be available for exchange, eg. future>inverse)
                    if (isTrue(!isEqual(subValue, null)))
                    {
                        testFeaturesInner(exchange, skippedProperties, subValue);
                    }
                }
            }
        }
        return true;
    }
    public static void testFeaturesInner(Exchange exchange, object skippedProperties, object featureObj)
    {
        object format = new Dictionary<string, object>() {
            { "sandbox", false },
            { "createOrder", new Dictionary<string, object>() {
                { "marginMode", false },
                { "triggerPrice", false },
                { "triggerPriceType", new Dictionary<string, object>() {
                    { "mark", false },
                    { "last", false },
                    { "index", false },
                } },
                { "stopLossPrice", false },
                { "takeProfitPrice", false },
                { "attachedStopLossTakeProfit", new Dictionary<string, object>() {
                    { "triggerPriceType", new Dictionary<string, object>() {
                        { "last", false },
                        { "mark", false },
                        { "index", false },
                    } },
                    { "price", false },
                } },
                { "timeInForce", new Dictionary<string, object>() {
                    { "GTC", false },
                    { "IOC", false },
                    { "FOK", false },
                    { "PO", false },
                    { "GTD", false },
                } },
                { "hedged", false },
                { "trailing", false },
            } },
            { "createOrders", new Dictionary<string, object>() {
                { "max", 5 },
            } },
            { "fetchMyTrades", new Dictionary<string, object>() {
                { "marginMode", false },
                { "daysBack", 0 },
                { "limit", 0 },
                { "untilDays", 0 },
                { "symbolRequired", false },
            } },
            { "fetchOrder", new Dictionary<string, object>() {
                { "marginMode", false },
                { "trigger", false },
                { "trailing", false },
                { "symbolRequired", false },
            } },
            { "fetchOpenOrders", new Dictionary<string, object>() {
                { "marginMode", false },
                { "limit", 0 },
                { "trigger", false },
                { "trailing", false },
                { "symbolRequired", false },
            } },
            { "fetchOrders", new Dictionary<string, object>() {
                { "marginMode", false },
                { "limit", 0 },
                { "daysBack", 0 },
                { "untilDays", 0 },
                { "trigger", false },
                { "trailing", false },
                { "symbolRequired", false },
            } },
            { "fetchClosedOrders", new Dictionary<string, object>() {
                { "marginMode", false },
                { "limit", 0 },
                { "daysBack", 0 },
                { "daysBackCanceled", 0 },
                { "untilDays", 0 },
                { "trigger", false },
                { "trailing", false },
                { "symbolRequired", false },
            } },
            { "fetchOHLCV", new Dictionary<string, object>() {
                { "limit", 0 },
            } },
        };
        object featureKeys = new List<object>(((IDictionary<string,object>)featureObj).Keys);
        object allMethods = new List<object>(((IDictionary<string,object>)exchange.has).Keys);
        for (object i = 0; isLessThan(i, getArrayLength(featureKeys)); postFixIncrement(ref i))
        {
            testSharedMethods.assertInArray(exchange, skippedProperties, "features", featureKeys, i, allMethods);
            testSharedMethods.assertStructure(exchange, skippedProperties, "features", featureObj, format, null, true); // deep structure check
        }
    }

}