const FuzionX = require('../index');
require('dotenv').load();

const API_KEY = process.env.API_KEY || '';
const API_SECRET = process.env.API_SECRET || '';
const client = new FuzionX({ apiKey: API_KEY, apiSecret: API_SECRET });

client
	.getTicker('btc-usdt')
	.then((data) => {
		console.log(data);
		console.log('The volume is', data.volume);
	})
	.catch((err) => {
		console.log(err);
	});

// connect to websocket
/*
	events (emitted) : trades (trades), orderbook (orderbook), user (userInfo, userWallet, userOrder, userTrades, userUpdate), all

	symbols : btc-usdt
*/

client.connect(['orderbook']);

client.ws.on('message', (data) => {
	data = JSON.parse(data);
	console.log(data);
});



setTimeout(() => {
	client.disconnect();
}, 10000);