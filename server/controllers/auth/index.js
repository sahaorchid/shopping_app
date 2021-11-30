const { userLogin,UserRegister } = require('../../models/auth/index')
const { userEmailCheck } = require('../../utils')
async function checkUserLogin(req,res){
    try{
        const { email, password } = req.body
        const result = await userLogin({email, password})
        if(result.length === 1){
            res.json({msg:"success"})
        }else{
            const result = await userEmailCheck(email)
            if(result.length === 1){
                res.json({msg:"password is incorrect"})
            }else{
                res.json({msg:"user is not present"})
            }
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function newUserRegister(req,res){
    try{
        const { name,email,address,description,password } = req.body
        const user = await userEmailCheck(email)
        if(user.length == 0){
            const result = await UserRegister({name,email,address,description,password})
            res.status(200).json({msg:"success"})
        }else{
            res.json({msg:"email is already exist"})
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

module.exports = {
    checkUserLogin,
    newUserRegister
}

