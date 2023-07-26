
//Saludo
function saludar() {
    alert("Bienvenido a Games Market");
    alert("A continuación te pediremos que ingreses algunos datos para poder darte una experiencia grandiosa");
    alert("Recuerda que toda esta informacion es 100% confidencial y con objetivos de brindar la mejor asistencia para su comodidad");
    alert("Recuerda tambien tomar nota de las compras que incluyas en el carrito para que puedas asegurar los gastos que estas por realizar");
}
saludar();

//¿Eres mayor de edad?
let edad = 20;

if (edad >= 18) {
console.log("Eres mayor de edad");
} else {
console.log("Eres menor de edad");
} 



// Datos de los productos disponibles en la tienda del index
const products = [
    { id: 1, name: 'Smartphone', category: 'Electrónicos', price: 300, image: 'img/smartphone.jpg' },
    { id: 2, name: 'Smart TV', category: 'Electrónicos', price: 800, image: 'img/smart.jpg' },
    { id: 3, name: 'Laptop', category: 'Electrónicos', price: 1200, image: 'img/laptop.jpg' },
    { id: 4, name: 'Tablet', category: 'Electrónicos', price: 250, image: 'img/tablet.jpg' },
    { id: 5, name: 'Auriculares', category: 'Electrónicos', price: 50, image: 'img/auriculares.jpg' },
];

// Variable para almacenar los productos filtrados
let filteredProducts = products.slice(); // Creamos una copia del array original

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




/*
//Acumulador de productos
let resultado = 0;
let ticket = "Detalle de la Compra:";
let rta = "";

do {
let producto = prompt("ingrese el nombre del producto:");
let precio = Number(prompt("ingrese el valor del producto: "))


if (producto && precio && !isNaN(precio)) {
resultado += precio;
ticket += "\n" + producto + "\t$" + precio.toFixed(2);
rta = prompt("¿Desea salir? (Ingrese 'SI' para salir.)").toUpperCase();
} else {
alert("Ingrese valores válidos para el nombre y el precio del producto.");
}
} while (rta !== "SI");
alert(ticket + "\nTotal: $" + resultado.toFixed(2));




function calcularArea() {
    const radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio)) {
        document.getElementById('resultado').innerText = "Ingresa un número válido.";
        return;
    }

    const area = Math.PI * Math.pow(radio, 2);
    document.getElementById('resultado').innerText = `El área del círculo es: ${area.toFixed(2)}`;
}
*/