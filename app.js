let port 	= require('./port.js')
let ip 		= require('./ip.js')

let app 	= require('express')()

app.get('/', (request, response) => {
	var content = "It Works !"
	response.writeHead({ "ContentType": "text/plain" })
	response.write(content)
	console.log(response)
	response.end()
}).listen(port.Port, ip.Ip, (err) => {
	if (err) {
		console.log(err)
		throw(err)
	} else {
		console.log("server lunched on:" + ip.Ip + ":" + port.Port)
	}
})