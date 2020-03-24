import mongoose = require("mongoose")
import { connectMongoDB } from "./helpers"

export interface ICliente extends mongoose.Document {
    identificacion: string;
    nombre: string;
    apellido: string;
    edad: string;
    contrato: string;
}

const ClienteSchema = new mongoose.Schema({

    identificacion: { type: String, required: true},
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    edad: { type: String, required: true},
    contrato: { type: String, required: true}

});

export const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);

export const createCliente = async function(
    identificacion: string,
    nombre: string,
    apellido: string,
    edad: string,
    contrato: string
){
    await connectMongoDB;

    const newOne = new Cliente();
    newOne.identificacion = identificacion;
    newOne.nombre = nombre;
    newOne.apellido = apellido;
    newOne.edad = edad;
    newOne.contrato = contrato;

    newOne.save( (err: any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    });

}
export function getCliente(_id: string): Promise<any>{
    return new Promise<any>( resolve => {
        Cliente.findOne({ identificacion: _id}, (err:any, data:any)=>{
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        });
    });
}