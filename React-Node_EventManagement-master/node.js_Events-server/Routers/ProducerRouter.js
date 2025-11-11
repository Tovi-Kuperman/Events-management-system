const express = require('express');
const router = express.Router();

const{
    getProducer,
    getProducers,
    deleteProducer,
    postProducer,
    putProducer
}=require('../Controllers/ProducerController');

router.get('/',getProducers);
router.get('/:id', getProducer);
router.put('/:id', putProducer);
router.post('/', postProducer);
router.delete('/:id', deleteProducer);

module.exports = router;
