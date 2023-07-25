//Saludo
function saludar() {
    alert("Sección de carrito");
    alert("esperamos que hayas tomado nota de los articulos con sus precios para que puedas verificar tus gastos!! COMENCEMOS: ")
}

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