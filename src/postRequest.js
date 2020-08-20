var http = require('http');
var options = require('./config');

function postRequest (params) {
      http.request(options, res => {
        let dataStr = ""
        res.on("data", d => {
            dataStr += d
        })
        res.on("end", () => {
            console.log("dataStr", dataStr)
        })
    })
    .on("error", console.error)
    .end(params)
}

postRequest('34536531')

module.exports =  postRequest
