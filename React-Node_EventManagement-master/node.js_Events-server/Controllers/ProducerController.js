const Producer=require('../Models/ProducerModel');

const getProducers=async(req,res)=>{
    const Producers=await Producer.find({});
    res.status(200).send(JSON.stringify(Producers));
}

const getProducer=async(req,res)=>{
    // console.log(req.params);
    try {
        if (!req.params.id) {
            return res.status(400).send("email is missing");
        }
        const producer = await Producer.findOne({ email: req.params.id });
        // console.log(req.params.id);
        res.status(200).send(JSON.stringify(producer));
    }
    catch(e){
        console.log(e);
        res.status(404).send('producer not found');
    }
}

const deleteProducer=async(req,res)=>{
    const producer=await Producer.findOneAndDelete({email:req.params.email});
    res.status(200).json('Producer was deleted');
}

const postProducer=async(req,res)=>{
    const p=req.body;
    const email=p.email;
    const existProducer=await Producer.findOne({email:email});
    if(existProducer)
    {
        res.status(404).send('Producer already exists');

    }
    else{   
    const newProducer=await Producer.create({
        // _id:p._id,
        name: p.name,
        email: p.email,
        phone: p.phone,
        // description:p.description
    });
    res.status(200).send(JSON.stringify(newProducer));

    // res.status(200).json('Producer was created'+JSON.stringify(newProducer));
 }
}

const putProducer=async(req,res)=>{
    console.log(req.body);
    try{
        const updatedProducer= await Producer.updateOne({ email: req.params.id}, {
            name: req.body.name,
            phone: req.body.phone,
            description: req.body.description,
        });
        res.status(200).send(JSON.stringify(updatedProducer));

    }
    catch(e){
        console.log(e);
        res.status(400).send('bad request');
    }
}

module.exports={
    getProducer,
    getProducers,
    deleteProducer,
    postProducer,
    putProducer
}