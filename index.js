const qs = require('querystring')
const url = require('url')
const fs = require('fs')
const {send} = require('micro')

// Load data
let data
fs.readFile('data.json', 'utf8', (err, jsonString) => {
  data = JSON.parse(jsonString)
})

module.exports = async function (req, res) {
  const query = qs.parse(url.parse(req.url).query)
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, data.sections[query.section])
}
