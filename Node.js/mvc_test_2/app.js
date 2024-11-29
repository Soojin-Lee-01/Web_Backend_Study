const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 라우터 분리
const userRouter = require('./routes/user');
app.use('/', userRouter);


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
