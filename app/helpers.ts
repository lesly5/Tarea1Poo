import mongoose = require("mongoose");

const uri: string = "mongodb+srv://Lesly:aguilar@cluster0-zffcc.azure.mongodb.net/Rentadoradevehiculos?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
