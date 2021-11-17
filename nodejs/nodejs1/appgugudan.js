var gugudan = require('gugudan');
var resultNumber = require('./gugudan');
const homePage = '127.0.0.1';
// local host ip
const port = 3002;


const server = gugudan.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html charset=utf-8');
    res.write("The date and time" + dt.myDateTime());
    res.end();
});

server.listen(port, homePage, () => {
    console.log(`Server running at http://${homePage}:${port}/`);
})

// console.log(typeof Date());