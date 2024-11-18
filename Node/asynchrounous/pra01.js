function call(name, cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(name);
            cb(name);
            resolve();
        }, 1000)
    })
}

function back(cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('back');
            cb('back');
            resolve();
        }, 1000)
    })
}

function hell(cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            cb('callback hell');
            resolve();
        }, 1000)
    })
}


// call('kim', function cb(name) {
//     console.log(name + "반가워!");
// }).then(()=>{
//     return back(function (txt){
//         console.log(txt + "을 실행했구나");
//     })
// }).then(()=>{
//     return hell(function(message){
//         console.log("여기는" + message);
//     });
// });


async function execute() {
    await call('kim', function cb(name) {
        console.log(name + "반가워!");
    })
    await back(function (txt){
        console.log(txt + "을 실행했구나");
    })
    await hell (function(message){
        console.log("여기는" + message);
    })

}

execute();
