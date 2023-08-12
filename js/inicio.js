//MENU DESPLEGABLE
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

/*
// Función para saludar al cliente y solicitar nombre, edad y localidad
function saludar() {
var nombre = prompt("Por favor, ingresa tu nombre:");
var apellido = prompt("Por favor, ingresa tu apellido:");
if (nombre === null || nombre === "") {
    alert("No ingresaste un nombre válido.");
} else if (apellido === null || apellido === "") {
    alert("No ingresaste un apellido válido.");
} else {
    alert("¡Hola, " + nombre + " " + apellido + "! Bienvenido/a a Games Market.");
    var edad = prompt("Por favor, ingresa tu edad:");
    if (edad === null || edad === "" || isNaN(edad)) {
        alert("No ingresaste una edad válida.");
    } else {
        var localidad = prompt("Por favor, ingresa tu localidad:");
        if (localidad === null || localidad === "") {
            alert("No ingresaste una localidad válida.");
        } else {
        alert("Gracias por proporcionar tus datos.");
        alert("¡Hola, " + nombre + " " + apellido + "! Bienvenido/a a Games Market.");
        alert("A continuación te pediremos que vayas tomando nota de los productos que te pueden interesar para poder brindarte una experiencia grandiosa.");
        alert("Recuerda que toda esta información es 100% confidencial y con objetivos de brindar la mejor asistencia para tu comodidad.");
        alert("Recuerda también tomar nota de las compras que incluyas en el carrito para que puedas asegurar los gastos que estás por realizar. Muchas gracias por confiar en nosotros");
            }
        }
    }
}
// Llamamos a la función para que muestre los mensajes y solicite los datos al cliente.
saludar();
//¿Eres mayor de edad?
let edad = 20;
if (edad >= 18) {
console.log("Eres mayor de edad");
} else {
console.log("Eres menor de edad");
}
*/
