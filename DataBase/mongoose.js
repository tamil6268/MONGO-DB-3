const mongoose=require('mongoose');

mongoose.set('strictQuery',true);

const connection=mongoose.connect("mongodb://127.0.0.1:27017/Human_Resource")
// const connection=mongoose.connect("mongodb+srv://ts7371797:Tamil123@shopping-app.hepxosx.mongodb.net/?retryWrites=true&w=majority")

module.exports=connection;