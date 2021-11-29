const { userDetails } = require('../../models/users/index')

async function getUserDetails(req,res){
    try{
        const id = req.params.id;
        const result = await userDetails(id)
        res.json(result)
    }catch{
        res.status(200).json({msg:"error occured"});
    }

}

module.exports = {
    getUserDetails,
}