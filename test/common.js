const expect = require('chai').expect;
const FuzionX = require('../index');

require('dotenv').load();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const client = new FuzionX({ accessToken: ACCESS_TOKEN });
const symbolPair = 'btc-usdt';

module.exports = {
	expect,
	client,
	symbolPair
};
