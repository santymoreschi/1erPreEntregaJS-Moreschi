document.addEventListener('DOMContentLoaded'), () => {
    // Menú desplegable
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Datos de productos
const products = [
    { id: 1, name: 'Smartphone', category: 'Electrónicos', price: 300, image: '../img/smartphone.jpg' },
    { id: 2, name: 'Smart TV', category: 'Electrónicos', price: 800, image: '../img/smart.jpg' },
    { id: 3, name: 'Laptop', category: 'Electrónicos', price: 1200, image: '../img/laptop.jpg' },
    { id: 4, name: 'Tablet', category: 'Electrónicos', price: 250, image: '../img/tablet.jpg' },
    { id: 5, name: 'Auriculares', category: 'Electrónicos', price: 250, image: '../img/auriculares.jpg' },
    { id: 6, name: 'Smart tv samsung', category: 'Electrónicos', price: 750, image: '../img/smartsamsung.jpg' },
    { id: 7, name: 'Cascos VR ps5', category: 'Electrónicos', price: 1250, image: '../img/vr.jpg' },
];


let filteredProducts = products.slice();

// Función para mostrar productos
function showProducts() {
const productListDiv = document.getElementById('productList');
productListDiv.innerHTML = '';

    filteredProducts.forEach((product) => {
        const productCard =  createProductCard(product);
        productListDiv.appendChild(productCard);

        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="height: 150px; object-fit: cover;">
        <h3>${product.name}</h3>
        <p>Categoría: ${product.category}</p>
        <p>Precio: $${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;

        productListDiv.appendChild(productCard);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });
    }

  //filtrar productos
    function filterProducts() {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
}
  // Mostrar productos al cargar la página
    showProducts();

  // Funcionalidad del carrito
    const cartItems = [];

    function showCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
        const cartItemLi = document.createElement('li');
        cartItemLi.innerHTML = `
        <img src="${cartItem.product.image}" alt="${cartItem.product.name}" style="height: 50px; object-fit: cover;">
        <span>${cartItem.product.name}</span>
        <span>$${cartItem.product.price}</span>
        <button class="remove-from-cart" data-id="${cartItem.product.id}">Quitar</button>
        `;
        cartItemsDiv.appendChild(cartItemLi);

        totalPrice += cartItem.product.price;
    });

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice}`;

    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach((button) => {
        button.addEventListener('click', removeFromCart);
    });
    }

    //funcion a cambiar
    function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const selectedProduct = products.find((product) => product.id === productId);

    const existingCartItem = cartItems.find((cartItem) => cartItem.product.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cartItems.push({ product: selectedProduct, quantity: 1 });
    }

    // Mostrar la pantalla emergente con el contenido del carrito
    showCartPopup();
}

// Función para mostrar la pantalla emergente del carrito
function showCartPopup() {
    const popupDiv = document.createElement('div');
    popupDiv.classList.add('popup');
    popupDiv.innerHTML = `
        <div class="popup-content">
            <h2>Carrito de Compra</h2>
            <ul id="cartItemsPopup">
                <!-- Contenido del carrito se mostrará aquí -->
            </ul>
            <p id="totalPricePopup"></p>
            <button id="closePopup">Cerrar</button>
        </div>
    `;

    const cartItemsPopupDiv = popupDiv.querySelector('#cartItemsPopup');
    const totalPricePopupElement = popupDiv.querySelector('#totalPricePopup');
    const closePopupButton = popupDiv.querySelector('#closePopup');

    cartItems.forEach((cartItem) => {
        const cartItemLi = document.createElement('li');
        cartItemLi.innerHTML = `
            <span>${cartItem.product.name} - ${cartItem.quantity} x $${cartItem.product.price}</span>
        `;
        cartItemsPopupDiv.appendChild(cartItemLi);
    });

    const totalPrice = cartItems.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
    }, 0);
    totalPricePopupElement.textContent = `Total: $${totalPrice}`;

    closePopupButton.addEventListener('click', () => {
        popupDiv.remove();
    });

    document.body.appendChild(popupDiv);
}






    
    function removeFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const existingCartItemIndex = cartItems.findIndex((cartItem) => cartItem.product.id === productId);

    if (existingCartItemIndex !== -1) {
        const existingCartItem = cartItems[existingCartItemIndex];
        if (existingCartItem.quantity > 1) {
        existingCartItem.quantity--;
        } else {
        cartItems.splice(existingCartItemIndex, 1);
        }
    }
    showCart();
    }







































































































































/*
//clase de productos
class producto{
    constructor(id, nombre, precio, cantidad) {
        this.nombre = nombre
        this.id = id
        this.precio
        this.cantidad = cantidad
    }
    descripcion(){
        return "id" + this.id+
                "nombre" + this.nombre+
                "\nprecio" + this.precio+
                "\ncantidad" + this.cantidad
    }
    descripcionDeCompra() {
        return "id" + this.id+
                "\nnombre" + this.nombre+
                "\nprecio" + this.precio+
                "\ncantidad" + this.cantidad
    }

    aumentarCantidad(cantidad){
        this.cantidad = cantidad
    }
}

class ProductoController{
    constructor() {
        this.listadeproductos = []
    }
    ingresar(producto) {
        this.listadeproductos.push(producto)
    }

    buscardorProductoPorID(id) {
        return this.listadeproductos.find(producto => producto.id == id)
    }

    exhibirproducto() {
        this.listadeproductos.forEach( producto => {
            console.log(producto.descripcion())
        })
    }
}

class carrito{
    constructor(){
    this.listaCarrito = []
    }
    ingresar(producto) {
        this.listaCarrito.push(producto)
    }

    //45minutos
    exhibirproducto() {
        let listaEnTexto = ""
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra()
            //console.log(producto.descripcionDeCompra())
        })
        alert(listaEnTexto)
    }

    calcularTotal(){
        return this,listaCarrito.reduce((acumulador,producto) => acumulador + producto.precio + producto.cantidad , 0)
    }

    calcularIva(){
        return this.calcularTotal() * 0.25
    }
}


const CP = new ProductoController()
const carrito = new carrito()
CP.ingresar(new producto(1,"producto1", 250, 0))
CP.ingresar(new producto(2, "producto1", 250, 0))
CP.ingresar(new producto(3, "producto1", 250, 0))
CP.ingresar(new producto(4, "producto1", 250, 0))
CP.ingresar(new producto(5,"producto1", 250, 0))



do {
    CP.exhibirproducto()
    let opcion = Number(prompt("ingrese el código del producto que desea agreagr"))
    let producto = CP.buscardorProductoPorID(opcion)
    let cantidad = Number(prompt("Ingrese la cantidad del producto seleccionado que desea"))
    producto.aumentarCantidad(cantidad)
    carrito.ingresar(producto,cantidad)
    console.log("El artículo se añadó correctamente: ")
    carrito.exhibirproducto()


    rta = prompt("ingrese 'ESC' para salir").toUpperCase()
}while(rta != "ESC")

console.log("El resultado total de su compra es de: "+ carrito.calcularTotal())
console.log("El resultado total de su compra es de:"+ carrito.calcularIva())





CP.exhibirproducto()*/





/*
const carrito = []
const listadeproductos = []

// Datos de listaproductos
const products = [
    { id: 1, name: 'Smartphone', category: 'Electrónicos', price: 300, image: '../img/smartphone.jpg' },
    { id: 2, name: 'Smart TV', category: 'Electrónicos', price: 800, image: '../img/smart.jpg' },
    { id: 3, name: 'Laptop', category: 'Electrónicos', price: 1200, image: '../img/laptop.jpg' },
    { id: 4, name: 'Tablet', category: 'Electrónicos', price: 250, image: '../img/tablet.jpg' },
    { id: 5, name: 'Auriculares', category: 'Electrónicos', price: 250, image: '../img/auriculares.jpg' },
    { id: 6, name: 'Smart tv samsung', category: 'Electrónicos', price: 750, image: '../img/smartsamsung.jpg' },
    { id: 7, name: 'Cascos VR ps5', category: 'Electrónicos', price: 1250, image: '../img/vr.jpg' },
];

carrito.push(listaproductos[0])
*/