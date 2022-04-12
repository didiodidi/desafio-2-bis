import { carritoIndex } from "./carritoIndex.js";
import { productos } from "./stock.js";

const mostrarProductos = (productos) => {

    const contenedorProductos = document.getElementById("producto-contenedor");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML +=`<p>Hola</p>`;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        carritoIndex(producto.id)
    })
}) 
};
mostrarProductos(productos);
