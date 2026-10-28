import productosMascotas from "./productos.js"

function renderizarCatalogo (contenedor, productos){
    let productosHTML = ''
    productos.forEach((producto)=>{
        productosHTML += `
            <article>
                <h3>
                    ${producto.nombre}
                </h3>
                <picture>
                    <img src="./recursos/imagenes/productos/pexels-artem-makarov-289670876-13228217 (1).jpg" alt=${producto.nombre}>
                </picture>
                <p>
                    ${producto.descripcion}
                </p>
                <ul>
                    <li>
                        ${producto.talles}
                    </li>
                    <li>
                        ${producto.precio}
                    </li>
                </ul>
                <button class="boton-agregar-producto" data-id= "${producto.id}">Añadir al Carrito</button>
            </article>
        `
    })
contenedor.innerHTML = productosHTML
}

function filtrarPorTalle (productos, talle){
    return productos.filter ((producto)=> {
        return producto.talles.includes (talle.toUpperCase())
    })
}
export { filtrarPorTalle, renderizarCatalogo}