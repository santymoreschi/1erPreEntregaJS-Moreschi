

/*function saludar(){
    console.log("hola alumnos")
    console.log("¿como va con js ?")
    console.log("espero que de 10")

}*/



//acumulador de productos
let resultado = 0
let ticket = "Detalle de la Compra:"

let rta = ""

do{
    let producto = prompt("ingrese el nombre del producto:")
    let precio = Number(prompt("ingrese el valor del producto: "))
    
    resultado = resultado + precio
    ticket = ticket + "\n" + Producto + "\t$" + precio
  
    rta = prompt("desea salir?(ingrese 'salir' para salir.)")

}while(rta != "salir")

alert(ticket + "\nTotal: "+resultado)















/*let uncolor = "Rojo"


con (uncolor == "rojo") comparamos si uncolor es igual "Rojo"

if (uncolor == "Rojo") {
    console.log("el rojo es Rojo");
}else {
    la instruccion se interpreta cuando unColor no es "Rojo" 
      console.log("el color NO es Rojo");
}


var numero = 10;

if (numero < 11) {
  alert("se ejecutaron las instrucciones");
}else {
    //instrucciones
    alert("no se ejecutaron las instrucciones");
}




  CLASE NUMERO 3

let entrada = ""


REPETIMIS CON while hasta que el usuario ingtrsa "ESC"
while (condicion) {

    
        1 le pregunto el nombre de usuario 
        2 lo muestro
        3 desea continuar cargando usuarios?
    
}

let rta = "ESC"

while (rta = "ESC") {

    1 le pregunto el nombre de
    let nombre = prompt("¿cual es si nombre?")


    2 le pregunto su apellido
    let apellido = prompt("¿cual es su apellido?")

    3 notificar al usuario 
    alert("los datos fueron cargados con exitos")
    alert("los datos guardados son \nNombre : " + nombre + "\nApellido: " + apellido)

}



let opcion = 2;

switch (opcion) {
    case 1:
        console.log("La opción seleccionada es 1");
      break;
    case 2:
        console.log("La opción seleccionada es 2");
        break;
    case 3:
        console.log("La opción seleccionada es 3");
        break;
    default:
        console.log("La opción seleccionada no es válida");
//} 

*/



