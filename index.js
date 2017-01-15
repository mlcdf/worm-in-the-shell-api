const {send} = require('micro');
const qs = require('querystring');
const url = require('url');
const fs = require('fs');

// Load data
let data;
fs.readFile('data.json', 'utf8', (err, jsonString) => {
	data = JSON.parse(jsonString);
});

module.exports = async function (req, res) {
	const query = qs.parse(url.parse(req.url).query);
	send(res, 200, data.sections[query.section]);
};
