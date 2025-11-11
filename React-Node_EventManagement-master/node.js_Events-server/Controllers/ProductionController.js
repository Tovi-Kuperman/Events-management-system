const Production=require('../Models/ProductionModel');

const getProductions=async(req,res)=>{
    const productions=await Production.find({});
    res.status(200).send(productions);
}

const getProduction=async(req,res)=>{
    const production=await Production.findById(req.params.name).exec();
    console.log(req.params.name);
    res.status(200).send(production);
}

const deleteProduction=async(req,res)=>{
    const production=await Production.findByIdAndDelete(req.params.name);
    res.status(200).json('Production was deleted');
}

const postProduction=async(req,res)=>{
    const p=req.body;
    const name=p.name;
    const existProduction=await Production.findOne({name:name});
    if(existProduction)
    {
        console.log(existProduction);
        res.status(404).send('Production already exists');

    }
    else{ 
    const newProduction=await Production.create({
        // _id:p._id,
        name:p.name,
        description:p.description,
        price:p.price,
        producerId:p.producerId
    });
    res.status(200).json(JSON.stringify(newProduction));
}
}

const putProduction=async(req,res)=>{
    try{
         const pro=req.body;
     
      const updatedProduction=await Production.updateOne({ name: req.params.name}, {
            // _id:pro._id,
        name:pro.name,
        description:pro.description,
        price:pro.price,
        producerId:pro.producerId
        });
        res.status(200).send(JSON.stringify(updatedProduction));
    }
    catch(e){
        console.log(e);
        res.status(400).send('bad request');
    }
   
}


module.exports={
    getProduction,
    getProductions,
    deleteProduction,
    postProduction,
    putProduction
}