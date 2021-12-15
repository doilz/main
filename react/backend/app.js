const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//middle ware 요청된 json data를 읽을 수 있게 해준다.
app.use(bodyParser.json());

//미들웨어에 들어오는 요청을 콘솔에 표시해주는 패키지
const morgan = require('morgan');
app.use(morgan('tiny'));

//mongoose
const mongoose = require("mongoose");




require('dotenv/config');
const api = process.env.API_URL;

// 스케마
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
});
const Product = mongoose.model('Product', productSchema);

// http://localhost:3000/
app.get(`${api}/products`, async (req, res) => {
   const productList = await Product.find();
   if(!productList) {
       res.status(500).json({success: false})
   }

   res.send(productList);
});
app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error:  err,
            success: false
        })
    })
});


// uris 몽고디비 연결
mongoose.connect(process.env.CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // dbName: 'cluster0',
})
.then(()=>{
    console.log('DATABASE is ready')
})
.catch((err)=>{
    console.log(err)
})
//starting server
app.listen(3000, () => {
    console.log("Server is running  http://localhost:3000")
});