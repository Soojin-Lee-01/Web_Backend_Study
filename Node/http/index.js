const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    // console.log(request); // 요청 객체 정보

    console.log('url: ', request.url);

    // response
    // response.writeHead(200, {"content-type" : "text/html; charset=utf-8"});
    // response.write('<p>응답1</p>')
    // response.write('<p>응답2</p>')
    // response.write('<p>응담3</p>')
    // response.write('<h3>응답 종료</h3>')

    try{
        // try문 실행코드
        // 실행코드
        const data = fs.readFileSync('./inde.html');
        response.writeHead(200, {"content-type" : "text/html; charset=utf-8"})
        response.end(data);
    }catch(err){
        // try 문에서 어떤 에러가 발생되었는지 error 객체를 넘겨줌 (생략가능)
        // try문에서 에러가 났을 때 실행될 코드
        console.log(err);
        response.writeHead(404, {"content-type" : "text/html; charset=utf-8"});

        // 404.html을 만들고
        // 파일 이름읽을 때 오타가 낫을 때 404 페이지 보여주기
        const data = fs.readFileSync('./404.html');
        response.end(data)
    }

});

const PORT = 8080;

// 서버 이벤트 - connection, request
server.on(`connection`, (request, response)=>{
    console.log('connection event 발생');
})
server.on(`request`, (request, response)=>{
    console.log('request event 발생');
})

// 포트 열기
server.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
})