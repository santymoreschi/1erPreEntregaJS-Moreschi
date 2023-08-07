  // NO LE DEN IMPORTANCIA A ESTA CARPETA



















  // Menú desplegable
document.addEventListener('DOMContentLoaded'), () => {
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
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
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

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

  // Menú desplegable
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });

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
                                       //código exhibido del after class (guia)
class Producto {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.descripcion = descripcion
        this.img = img
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    levantarStorage(){
        this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []
        /*
        let listaCarritoJSON = localStorage.getItem("listaCarrito")
        if(listaCarritoJSON){
            this.listaCarrito = JSON.parse(listaCarritoJSON)
        }else{
            this.listaCarrito = []
        }
        
    }

    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    agregar(productoAgregar) {
        //this.listaCarrito.push(productoAgregar)
        let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)

        if( existeElProducto ){
            let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
            producto.cantidad = producto.cantidad + 1
        }else{
            this.listaCarrito.push(productoAgregar)
        }
    }

    eliminar(productoEliminar){
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice,1)
    }

    mostrarProductos() {
        let contenedor_carrito = document.getElementById('contenedor_carrito')

        contenedor_carrito.innerHTML = ""

        this.listaCarrito.forEach( producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <button class="btn btn-danger" id="eliminar-${producto.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>`
        })

        //damos evento al botón "Eliminar producto del carrito"
        this.listaCarrito.forEach(producto => {
            let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
            btn_eliminar.addEventListener("click", () => {
                this.eliminar(producto)
                this.guardarEnStorage()
                this.mostrarProductos()
            })
        })
}


class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto)
    }

    mostrarProductos() {
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-primary" id="ap-${producto.id}">Añadir al carrito</a>
            </div>
        </div>
            `
        })

        //damos evento al botón "añadir al carrito"
        this.listaProductos.forEach(producto => {

            const btn = document.getElementById(`ap-${producto.id}`)

            btn.addEventListener("click", () => {
                carrito.agregar(producto)
                carrito.guardarEnStorage()
                carrito.mostrarProductos()
            })
        })
    }
}


//Instancias de Producto
const p1 = new Producto(1, "ryzen 3", 100000, "un producto de gama baja", "https://img.xentra.com.mx/xentra_jbsystem/img/productos/YD3200C5FHBOX/YD3200C5FHBOX_842_31_07_21_06_39.webp")
const p2 = new Producto(2, "ryzen 5", 150000, "un producto de gama media", "https://m.media-amazon.com/images/I/51f2hkWjTlL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p3 = new Producto(3, "ryzen 7", 300000, "un producto de gama alta", "https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p4 = new Producto(4, "ryzen 9", 500000, "un producto de gama alta", "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg")


//Instancia de Carrito | Es para los productos que el cliente escoja
const carrito = new Carrito()
carrito.levantarStorage()
carrito.mostrarProductos()

//Instancia de ProductoController - Gestiona todos los productos, es decir: mostrar, calcularTotal
const controlador_productos = new ProductoController()

controlador_productos.agregar(p1)
controlador_productos.agregar(p2)
controlador_productos.agregar(p3)
controlador_productos.agregar(p4)

controlador_productos.mostrarProductos()
*/









/*

                                CODIGO PRINCIPAL
MENU DESPLEGABLE
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

CONSOL.LOG
//¿Eres mayor de edad?
let edad = 20;

if (edad >= 18) {
console.log("Eres mayor de edad");
} else {
console.log("Eres menor de edad");
} 



// Datos de los productos disponibles en la tienda del index
const products = [
    { id: 1, name: 'Smartphone', category: 'Electrónicos', price: 300, image: '../img/smartphone.jpg' },
    { id: 2, name: 'Smart TV', category: 'Electrónicos', price: 800, image: '../img/smart.jpg' },
    { id: 3, name: 'Laptop', category: 'Electrónicos', price: 1200, image: '../img/laptop.jpg' },
    { id: 4, name: 'Tablet', category: 'Electrónicos', price: 250, image: '../img/tablet.jpg' },
    { id: 5, name: 'Auriculares', category: 'Electrónicos', price: 250, image: '../img/auriculares.jpg' },
    { id: 6, name: 'Smart tv samsung', category: 'Electrónicos', price: 750, image: '../img/smartsamsung.jpg' },
    { id: 7, name: 'Cascos VR ps5', category: 'Electrónicos', price: 1250, image: '../img/vr.jpg' },
];

//https://stylewatch.vtexassets.com/arquivos/ids/236507/Smart_TV_Samsung_SMUN75BU8000G_01.jpg?v=638247627788670000

// Variable para almacenar los productos filtrados
let filteredProducts = products.slice();

// Función para mostrar los productos en la página
function showProducts() {
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    filteredProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="height: 150px; object-fit: cover;">
            <h3>${product.name}</h3>
            <p>Categoría: ${product.category}</p>
            <p>Precio: $${product.price}</p>
        `;

        productListDiv.appendChild(productCard);
    });
}

// Función para filtrar productos por nombre
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const foundProduct = products.find((product) =>
        product.name.toLowerCase() === searchTerm
    );
    // Si se encuentra un producto, lo muestro en la lista filtrada
    if (foundProduct) {
        filteredProducts = [foundProduct];
    } else {
        filteredProducts = products.slice();
    }

    showProducts();
}
// Mostrar los productos al cargar la página
showProducts();



//funciones para el menu del index
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function calcularArea() {
    const radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio)) {
        document.getElementById('resultado').innerText = "Ingresa un número válido.";
        return;
    }

    const area = Math.PI * Math.pow(radio, 2);
    document.getElementById('resultado').innerText = `El área del círculo es: ${area.toFixed(2)}`;
} */
