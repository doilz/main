const express = require("express");
const app = express();

app.set('view engine', 'pug');    // 뷰엔진 퍼그
app.set('views', './views');    // 뷰스 예약어, 보이는 화면는 ./뷰스폴더에 연결한다.

const host = '127.0.0.1';
const port = 3001;




app.get('/', (req, res) => {
    res.render('firstview');
});

app.listen(port, host, () => {
    console.log(`Index is running at http://${host}:${port}`);
})

app.get('/dynamic_view', (req, res) => {
    res.render('dynamic', {
        name: "kdigital 4 class",
        url: "https://www.daum.net/"
    })
});


app.get('/dynamic_view2', (req, res) => {
    res.render('dynamic2', {
        name: "apple.com ",
        url: "https://www.daum.net/"
    })
});





app.get('/hi', (req, res) => {
    res.render('hifriend', {
        user : {name: "Michael", age: "20"}
    });
});

app.get('/components', (req, res) => {
    res.render("content");
});