const { userDetails,updateDetails,updatePassword } = require('../../models/users/index')
const { userEmailCheck } = require('../../utils')

async function getUserDetails(req,res){
    try{
        const id = req.params.id;
        const result = await userDetails(id)
        res.json(result)
    }catch{
        res.status(200).json({msg:"error occured"});
    }

}

async function updateUserDetails(req,res){
    try{
        const { id,name,email,address,description } = req.body
        const rslt = await userEmailCheck(email,id)
        console.log(rslt)
        if(rslt.length === 0){
            const result = await updateDetails({ id,name,email,address,description })
            res.send({mag:'success'})
        }else{
            res.status(200).json({msg:"email is already exist"});
        }
    }catch(err){
        console.log(err)
        res.status(200).json({msg:"error occured"});
    }
}

async function updateUserPassword(req,res){
    try{
        const { id,password } = req.body
        const result = await updatePassword({ id,password })
        res.send({mag:'success'})
    }catch{
        res.status(200).json({msg:"error occured"});
    }
}

module.exports = {
    getUserDetails,
    updateUserDetails,
    updateUserPassword
}