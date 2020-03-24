import { createCliente, getCliente } from "./cliente"
import { createContrato } from "./Contrato"

let dateString = '2020-03-22T00:00:00';
let newDate = new Date(dateString)

//createCliente("6273428", "Manuel", "Perez", "25", "214 .jpg")
createContrato("6273428","001", newDate, "disponible")
