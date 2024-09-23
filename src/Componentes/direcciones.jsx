import axios from "axios";
export const obtenerDirecciones = async(id_cliente) =>{
    const direcciones = await axios.get(`http://localhost:5000/api/direcciones/${id_cliente}`)
    return direcciones.data;
}