import axios from "axios";
export const obtenerClientes = async(id_cliente) =>{
    const clientes = await axios.get('http://localhost:5000/api/clientes')
    return clientes.data;
}