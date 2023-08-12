const carritoContainer = document.getElementById("carritoContainer")
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

console.table(cartItems);
const setCartItems = new Set(cartItems)

console.table(setCartItems);

if (cartItems.length > 0) {
    carritoContainer.innerHTML = ''
    cartItems.forEach(i =>{
    carritoContainer.innerHTML +=`<img src="${i.image}" alt="${i.name}" style="height: 150px; object-fit: cover;">
    <h3>${i.name}</h3>
    <p>Categoría: ${i.category}</p>
    <p>Cantidad: ${i.quantity}</p>
    <p>Precio: $${i.price * i.quantity}</p>
`
})
}else{
    carritoContainer.innerHTML = `<h1>Vaya, parece que todavia no has agregado productos al carrito</h1>`
}
