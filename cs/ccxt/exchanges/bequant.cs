namespace ccxt;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

public partial class bequant : hitbtc
{
    public override object describe()
    {
        return this.deepExtend(base.describe(), new Dictionary<string, object>() {
            { "id", "bequant" },
            { "name", "Bequant" },
            { "pro", true },
            { "countries", new List<object>() {"MT"} },
            { "urls", new Dictionary<string, object>() {
                { "logo", "https://github.com/user-attachments/assets/0583ef1f-29fe-4b7c-8189-63565a0e2867" },
                { "api", new Dictionary<string, object>() {
                    { "public", "https://api.bequant.io/api/3" },
                    { "private", "https://api.bequant.io/api/3" },
                } },
                { "www", "https://bequant.io" },
                { "doc", new List<object>() {"https://api.bequant.io/"} },
                { "fees", new List<object>() {"https://bequant.io/fees-and-limits"} },
                { "referral", "https://bequant.io/referral/dd104e3bee7634ec" },
            } },
        });
    }
}
