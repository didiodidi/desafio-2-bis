const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('cerrar');
const modalCarrito = document.querySelector('.modal-carrito')


abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active');
})

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})


























/* const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');


open.addEventListener('click', () =>{
    modal_container.classList.add('show')
});

close.addEventListener('click', () =>{
    modal_container.classList.remove('show')
})
 */

































/* const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');


abrirCarrito.addEventListener ('click', () => {
    modalContenedor.classList.toggle('modal-active');
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
}) */

