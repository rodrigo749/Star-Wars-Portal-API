const Chars= require ('../models/character.model');

exports.create = async(req, res) =>{
    const chars = await Chars.create(req.body);

    if(chars){
        res.status(200).send({message:'Character sucesseful regireted'})
    }else{
        res.status(500).send({message:'Erro at register Character'});
    }
}


exports.getAll = async(req, res) =>{
   
    const chars = await Chars.getAll();
    res.status(200).send(chars)

}