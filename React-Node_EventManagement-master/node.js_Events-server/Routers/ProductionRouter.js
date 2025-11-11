const express = require('express');
const router = express.Router();

const{
    getProduction,
    getProductions,
    deleteProduction,
    postProduction,
    putProduction
}=require('../Controllers/ProductionController');

router.get('/',getProductions);
router.get('/:id', getProduction);
router.put('/:id', putProduction);
router.post('/', postProduction);
router.delete('/:id', deleteProduction);

module.exports = router;
