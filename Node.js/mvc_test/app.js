const express = require("express");
const app = express();
const PORT = 8080;

// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 라우터 분리
const userRouter = require('./routes/user');
app.use('/', userRouter);


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});


