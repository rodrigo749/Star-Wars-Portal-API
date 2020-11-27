const Char= require ('../models/character.model');

exports.create = async(req, res) =>{
    const char = await Char.create(req.body);

    if(char){
        res.status(200).send({message:'Character sucessfully regitered'})
    }else{
        res.status(500).send({message:'Error when registering the character'});
    }
}


exports.getAll = async(req, res) =>{
   
    const char = await Char.getAll();
    res.status(200).send(char)

}