//required for use
const gdax = require("gdax");
const config = require("./configuration");

//access to the gdax api configurations for authenticated clients with trading
const key = config.get("GDAX_API_KEY");
const secret = config.get("GDAX_API_SECRET");
const passphrase = config.get("GDAX_API_PASSPHRASE");
const apiURL = config.get("GDAX_API_URL");

//public client for public access and auth client for when you already have a gdax account and are ready to trade on your own account
const client = new Gdax.PublicClient();
const auth = new Gdax.AuthenticatedClient(key, secret, passphrase, apiURL);

// FOR TRADING BITCOIN IN USD
const product = "BTC-USD";
