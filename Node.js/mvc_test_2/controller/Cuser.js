const User = require('../model/User');

exports.main = (req, res) =>{
    res.render("index");
}

exports.login = (req, res) => {
    console.log(User.user);
    const userData = User.user.split("\n");
    const finalData = [];
    for (let i = 0 ; i < userData.length ; i++) {
        finalData.push(userData[i].split("//"))
    };

    for (let i = 0 ; i < finalData.length ; i++) {
        if (finalData[i][0] === req.body.userId && finalData[i][1] === req.body.userPw) {
            return res.send({isSuccess : true, userName : finalData[i][2]});
        } 
    }
    res.send({isSuccess:false});
}
