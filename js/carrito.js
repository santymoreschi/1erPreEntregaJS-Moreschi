document.addEventListener("DOMContentLoaded", ()=>{
    renderCarrito()
})

//MENU DESPLEGABLE
document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});


function renderCarrito(){
    const carritoContainer = document.getElementById("carritoContainer");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const setCartItems = new Set(cartItems);
    
    if (cartItems.length > 0) {
        carritoContainer.innerHTML = "";
        cartItems.forEach((i) => {
        carritoContainer.innerHTML += `
        <div class="card col-12 col-md-6 col-lg-4">
        <img src="${i.image}" class="card-img-top" alt="${"Imagen de " + i.name}">
        <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text"></p>
        <p class="card-text">Categoría: ${i.category}</p>
        <p class="card-text">Precio unitario: $${i.price}</p>
        <p class="card-text" >Precio: $${i.price * i.quantity}</p>
        <div class="d-flex">
        <button type="button" onclick="restarProducto('${i.id}')" class="btn btn-secondary rounded-end-0 m-0 border-end-0" data-bs-toggle="button">-</button>
        <button type="button"  class="btn btn-primary active rounded-0" data-bs-toggle="button disabled" aria-pressed="true">${i.quantity}</button>
        <button type="button" onclick="sumarProducto('${i.id}')"  class="btn btn-secondary rounded-start-0 m-0 border-start-0" data-bs-toggle="button">+</button>
        </div>
        <button type="button" onclick="eliminarProducto('${i.id}')" class="btn btn-danger mt-2">Eliminar producto</button>
        </div>
        </div>
    `;
        });
    } else {
        carritoContainer.innerHTML = `<h1>Vaya, parece que todavía no has agregado productos al carrito</h1>`;
    }
}

function sumarProducto(id){
    console.log("ID de mi producto: ", id);
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productIndex = cartItems.findIndex(product => product.id == id)
    console.log("Carrito: ", cartItems);
    console.log("Index: ",productIndex);
    console.log("Producto en carrito: ",cartItems[productIndex]);
    cartItems[productIndex].quantity ++
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    renderCarrito()
}

function restarProducto(id){
    console.log("ID de mi producto: ", id);
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productIndex = cartItems.findIndex(product => product.id == id)
    cartItems[productIndex].quantity --
    if (cartItems[productIndex].quantity < 1) {
        cartItems.splice(productIndex, 1)
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    renderCarrito()   
}

function eliminarProducto(id){
    //...
}

window.sumarProducto = sumarProducto
window.restarProducto = restarProducto
window.eliminarProducto = eliminarProducto


/* REVISION
let Eliminar = carritoContainer.querySelector(".delete-product")
Eliminar.addEventListener("click", () => {
    eliminarProdcuto(producto.id);
})
const eliminarProdcuto = (id) => {
    const foundId = carrito.find((Element) => Element.id === id);

    console.table(foundId);

    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundId;
    });
}
<button type="button" className={Styles.eliminar} onClick={() => eliminarProdcuto(producto.id)}>Eliminar Producto</button>
const eliminarProdcuto = (id) => {
    console.table(id);
}
return (
    <component {
        eliminarProducto = {eliminarProducto}
    }
    ></component>
)
const deleteButtons = document.querySelectorAll(".delete-product");
deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        eliminarProducto(productId);
    });
});
const eliminarProducto = (id) => {
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    actualizarCarrito();
};
const actualizarCarrito = () => {
    if (cartItems.length > 0) {
        carritoContainer.innerHTML = '';
        cartItems.forEach(i => {
            carritoContainer.innerHTML += `
                <!-- ... tu código para mostrar el producto ... -->
                <button class="delete-product" data-id="${i.id}">Eliminar Producto</button>
            `;
        });
    } else {
        carritoContainer.innerHTML = `<h1>Vaya, parece que todavía no has agregado productos al carrito</h1>`;
    }
};
actualizarCarrito();
*/
