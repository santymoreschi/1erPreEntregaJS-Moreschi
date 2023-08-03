document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

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
}
