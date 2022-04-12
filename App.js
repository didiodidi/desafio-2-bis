import { productos } from "./stock.js";

const mostrarProductos = (productos) => {

    const contenedorProductos = document.getElementById("producto-contenedor");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML +=`<div class="card" style="width: 18rem;">
                                <img src=${producto.img} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        carritoIndex(producto.id)
    })
    }) 
};
mostrarProductos(productos);