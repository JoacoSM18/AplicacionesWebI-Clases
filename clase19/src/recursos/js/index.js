import productos from "./productos.js"
import {productosMascotas} from './productos.js'
import { filtrarPorTalle, renderizarCatalogo } from "./funciones.js"

const productosEnCarro = []
const contenedorProductos = document.getElementById("contenedor-productos")
const productosFiltrados = filtrarPorTalle (productosMascotas, 'S')
const botonEvento = document.getElementById ('boton-evento')
const dialogo = document.getElementById ('dialogo')
const productosSeleccionados = document.getElementById ('productos-seleccionados')

renderizarCatalogo (contenedorProductos, productosFiltrados)

botonEvento.addEventListener('click', (evento)=>{
    //console.log (evento)
    dialogo.showModal()
})

//Aplicar escuchadores a los botones
const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-producto')
console.log (botonesProducto)

botonesProducto.forEach ((boton)=>{
    //Cuerpo del callback forEach
    boton.addEventListener('click', (evento)=>{
        //Cuerpo del callback (handler) del escuchador
        const idProducto = parseInt(boton.dataset.id)
        //console.log (idProducto)
        productosEnCarro.push (idProducto)
        console.log (productosEnCarro)
        productosSeleccionados.textContent = productosEnCarro.length
    })
})

