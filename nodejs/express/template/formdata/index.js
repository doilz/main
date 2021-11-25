const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

let upload = multer();
let app = express();

const host = '127.0.0.1';
const port = 3001;

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render("form");         //form 이라는 퍼그 만듬
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));   // 트루를 사용하면 쿼리스트링을 qs사용, 폴스하면 내장된 쿼리스트링 사용.

app.use(upload.array());

app.use(express.static('public'));  // ./public becomes root

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("recieved request");
});  //root = public

app.listen(port, host, () => {
    console.log(`Application server is running at http://${host}:${port}`);
});

