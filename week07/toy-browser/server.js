const http = require('http')
const fs = require('fs')
const { extname } = require('path')
const mime = require('./options/mime')

const hostname = 'localhost'
const port = 3000

const now = new Date().toGMTString()
let header = {}
let filePath = ''
let contentType = ''
let cacheControl = ''

const server = http.createServer((req, res) => {
	console.log(req.headers)
	filePath = './static' + req.url.split('?').shift()

	if (req.url === '/') filePath = './static/index.html'

	fs.readFile(filePath, (err, data) => {
		if (err) {
			data = '404'
			contentType = 'text/plain'
		} else {
			contentType = mime[extname(filePath)] || 'text/plain'
		}

		if (contentType === mime['.html']) cacheControl = 'private,no-cache,max-age=15552000'
		else cacheControl = 'public,max-age=15552000'

		res.writeHead(
			err ? 404 : 200, {
				'Content-Type': `${contentType}; charset=utf-8`,
				'Content-Length': Buffer.byteLength(data),
				'Cache-Control': cacheControl,
				'Last-Modified': now,
				'Transfer-Encoding': 'chunked'
			}
		)
		res.end(data)

		init()
	})
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
})

function init() {
	header = {}
	filePath = ''
	contentType = ''
	cacheControl = ''
}
