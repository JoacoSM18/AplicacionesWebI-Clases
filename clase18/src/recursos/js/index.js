import productos from "./productos.js"
import {productosMascotas} from './productos.js'
import { filtrarPorTalle, renderizarCatalogo } from "./funciones.js"

const contenedorProductos = document.getElementById("contenedor-productos")
const productosFiltrados = filtrarPorTalle (productosMascotas, 'S')

renderizarCatalogo (contenedorProductos, productosFiltrados)

