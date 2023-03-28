const express=require('express');
const app=express();
const PORT=5600;
const connection=require('./DataBase/mongoose');
const bodyparser=require('body-parser');
const employeeRouter=require('./Routes/employee')

app.use(bodyparser.json());
app.use(employeeRouter);

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Server started at the port ${PORT}`);
        console.log("Connecting to DataBase....");
        console.log("Succesfully connected");
    }catch(error){
        console.log("Error",error);
    }
})