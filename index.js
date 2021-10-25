//required for use
const gdax = require ('gdax');
const config = require('./configuration');

//access to the gdax api
const key = config.get('GDAX_API_KEY');
const secret = config.get('GDAX_API_SECRET');
const passphrase = config.get('GDAX_API_PASSPHRASE');
