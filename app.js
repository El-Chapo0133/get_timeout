let port 	= require('./port.js')
let ip 		= require('./ip.js')

let app 	= require('express')()
let timer	= require('./timer_js.js')

app.get('/', (request, response) => {
	timer.start()
	var content = "It Works !"
	response.writeHead(200, { "ContentType": "text/plain" })
	response.write(content)
	response.end()
	timer.stop()
	console.log(timer.getMilliSecond())
	timer.setCount(0)
}).listen(port.Port, ip.Ip, (err) => {
	if (err) {
		console.log(err)
		throw(err)
	} else {
		console.log("server lunched on:" + ip.Ip + ":" + port.Port)
	}
})
