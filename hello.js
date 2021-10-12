const express = require('express')
const os = require('os')
const app = express()
const port = 3000

app.get('/', function (req, res) {
	var jsonResp = {
		msg: `สวัสดี Hello World! from ${String(os.hostname())}`,
		author: `Kittisak K.`,
		hostname: String(os.hostname())
	};
	res.status(200).send(jsonResp);
})

app.listen(port, () => console.log(`Hello World! listening on port ${port}!`))
