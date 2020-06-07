const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = "mongodb://localhost/todoDatabase"

function connectDB() {
    mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    db.on('open' , _ => {
        console.log('Database connected');
    })

    db.on('error' , err => {
        console.log(err);
    })
}   

connectDB()