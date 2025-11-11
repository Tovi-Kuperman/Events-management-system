const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use(cors()); // זה מאפשר לכל המקורות

// או אם נרצה להגדיר רק מקור ספציפי
app.use(cors({
    origin: 'http://localhost:5173'
}));

const productionRouter=require('./Routers/ProductionRouter');
const producerRouter=require('./Routers/ProducerRouter');

app.use('/program',productionRouter);
app.use('/producer',producerRouter);

 mongoose.connect('mongodb://localhost:27017/Programs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3000, () => {
    console.log("Server is Successfully Running, and App is listening on port 3000")
});
