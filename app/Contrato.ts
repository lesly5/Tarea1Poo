import mongoose = require("mongoose")
import { connectMongoDB } from "./helpers"
import { ICliente, getCliente } from "./cliente"

interface IContrato extends mongoose.Document{
    Ncontrato: string;
    fechadecontrato: Date;
    estado: string;
    cliente:  ICliente;

}

const ContratoSchema = new mongoose.Schema({
    Ncontrato: { type: String, required: true},
    fechadecontrato: { type: Date, required: true},
    estado: { type: String, required: true},
    cliente: { type: mongoose.Schema.Types.ObjectId,ref:"Cliente"}
 
});

export const Contrato = mongoose.model<IContrato>("Contrato", ContratoSchema);

export const createContrato = async function(
    identificacionCliente: string,
    Ncontrato: string,
    fechadecontrato: Date,
    estado: string,
   
){
    await connectMongoDB;

    const cliente:any = await getCliente(identificacionCliente);

    const v = new Contrato();
    v.Ncontrato = Ncontrato
    v.fechadecontrato = fechadecontrato
    v.estado = estado
    v.cliente = cliente
 
    
    v.save((err:any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log(v);
        }
    });
}