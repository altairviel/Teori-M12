const userService = require("../services/userService");

exports.register = (req, res, next)=>{
    let {emailId} = req.body;
    //console.log( `Ayoyoyo: ${emailId}`,JSON.stringify(req.body));
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password,
    };
    userService.register(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(200).send({
            success:1,
            data: results,
        });
    });
};

exports.login = (req, res, next)=>{
    const data = {
        emailId: req.body.emailId,
        password: req.body.password,
    };
    userService.login(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({
                success:0, data: "Bad request"
            });
        }
        return res.status(200).send({
            success:1,
            data: results,
        })
    })
}