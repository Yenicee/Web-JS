//EJERCICIO DE LA PRIMERA PRE ENTREGA 
//DEFINAMOS UNA VARIABLE CON UN VALOR

//let nombreUsuario = prompt("Por favor, ingresa tu nombre: ");
// evaluemos si ingreso su nombre con la sentencia if
//if(nombreUsuario){
//   alert("Hola, " + nombreUsuario +  " gracias por usar nuestros servicios");
//} else {
//si no pone su nombre, ejecutar algo que diga que no lo hizo
// alert("No ingresaste tu nombre. Por favor dejanos tu dato");
//}

//DEFINIMOS UNA VARIABLE "EDAD" CON UN VALOR INICIAL DE CERO EN UN CICLO 

//let edad = 0;
//creamos en ciclo
//while ( isNaN(edad) || edad < 18){
//   edad = prompt("Por favor, ingresa tu edad: ");
//   edad = parseInt(edad);
//si el usuario ingresa un valor que no es un numero o menor que 18, pedir de nuevo su edad
//  if(isNaN(edad) || edad < 1){
//  alert("Edad invalida");
// }
//}
//alert("Tu edad es de" + edad +  "años");

// PEDIMOS AL USUARIO QUE INGRESE EL PRECIO
//let precioProducto = prompt("Ingresa el precio del producto:");

// Convertimos la entrada del usuario a un número utilizando la función parseFloat()
//precioProducto = parseFloat(precioProducto);

// Verificamos si el usuario ingresó un valor válido para el precio
//if (isNaN(precioProducto) || precioProducto <= 0) {
// console.log("Precio inválido. Por favor, inténtalo de nuevo.");
//} else {
// Pedimos al usuario que ingrese la cantidad de unidades del producto que desea comprar
//let cantidadProducto = prompt("Ingresa la cantidad de unidades que deseas comprar:");

// Convertimos la entrada del usuario a un número utilizando la función parseInt()
//cantidadProducto = parseInt(cantidadProducto);

// Verificamos si el usuario ingresó un valor válido para la cantidad
//if (isNaN(cantidadProducto) || cantidadProducto <= 0) {
//  console.log("Cantidad inválida. Por favor, inténtalo de nuevo.");
//} else {
// Calculamos el precio total de la compra
// let precioTotal = precioProducto * cantidadProducto;

// Imprimimos un mensaje en la consola que muestra el precio total de la compra
// console.log("El precio total de tu compra es de $" + precioTotal.toFixed(2));
// }
//}

//declaracion de variables para la pagina login
// document.getElementById("btn__iniciarsesion").addEventListener('click', iniciarSecion);
// document.getElementById("btn__registrarse").addEventListener('click', register);
// window.addEventListener("resize", anchoPagina).addEventListener('click', anchoPagina);


// var contenedor_login_register = document.querySelector(".contenedor__login-register");
// var formulario_login = document.querySelector(".formulario__login");
// var formulario_register = document.querySelector(".formulario__register");
// var caja_trasera_login = document.querySelector(".caja__trasera-login");
// var caja_trasera_register = document.querySelector(".caja__traseta-register");

// function anchoPagina(){
// if(window.innerWidth > 850){
//   caja_trasera_login.style.display = "block";
//   caja_trasera_register.style.display = "block";
// }else{
//   caja_trasera_register.style.display ="block";
//   caja_trasera_register.opacity = "1";
//   caja_trasera_login.style.display = "none";
//   formulario_login.style.display = "block";
//   formulario_register.style.display = "none";
//   contenedor_login_register.style.left = "0px"
// }
// }




// function iniciarSecion() {

//  if (window.innerWidth > 850) {
//   formulario_register.style.display = "none";
//   contenedor_login_register.style.left = "10px";
//   formulario_login.style.display = "block";
//  caja_trasera_register.style.opacity = "1";
//   caja_trasera_login.style.opacity = "0";
// } else {
//   formulario_register.style.display = "none";
//   contenedor_login_register.style.left = "10px";
//   formulario_login.style.display = "block";

// caja_trasera_register.style.display = "block";
//   caja_trasera_login.style.display = "none";
// }

// }

// function register() {

// if (window.innerWidth > 850) {
// formulario_register.style.display = "block";
// contenedor_login_register.style.left = "410px";
// formulario_login.style.display = "none";

// caja_trasera_register.style.opacity = "0";
//  caja_trasera_login.style.opacity = "1";
// } else {
// formulario_register.style.display = "block";
// contenedor_login_register.style.left = "410px";
// formulario_login.style.display = "none";
// caja_trasera_register.style.display = "none";
// caja_trasera_login.style.display = "block";
// caja_trasera_login.style.style = "1";
// }


// }


///////////////SEGUNDA PRE-ENTREGA//////////////////////////
//ACA VA LA HORA DE LA PAGINA
console.log(new Date);

// let nombreUsuario = prompt("Por favor, ingresa tu nombre: ");
// // evaluemos si ingreso su nombre con la sentencia if
// if(nombreUsuario){
//  alert("Hola, " + nombreUsuario +  " gracias por usar nuestros servicios");
// } else {
// //si no pone su nombre, ejecutar algo que diga que no lo hizo
// alert("No ingresaste tu nombre. Por favor dejanos tu dato");
// }
// // Creamos un array con las marcas de celulares disponibles
// let marcasDisponibles = ["Samsung", "Apple", "Xiaomi"];

// // Creamos un objeto con los modelos disponibles para cada marca
// let modelosDisponibles = {
//   Samsung: {
//     "Galaxy S21": 12000,
//     "Galaxy A52": 8000,
//     "Galaxy Note 20": 10000
//   },
//   Apple: {
//     "iPhone 12": 15000,
//     "iPhone 11": 10000,
//     "iPhone SE": 6000
//   },
//   Xiaomi: {
//     "Redmi Note 10": 7000,
//     "Mi 11 Lite": 9000,
//     "Poco X3 Pro": 8000
//   }
// };

// // Simulamos el proceso de selección del usuario
// let marcaSeleccionada = prompt("Ingrese la marca de celular que desea comprar: " + marcasDisponibles.join(", "));
// while (!marcasDisponibles.includes(marcaSeleccionada)) {
//   marcaSeleccionada = prompt("Marca no válida. Ingrese la marca de celular que desea comprar: " + marcasDisponibles.join(", "));
// }

// let modelosDisponiblesParaMarca = modelosDisponibles[marcaSeleccionada];
// let modeloSeleccionado = prompt("Ingrese el modelo que desea comprar: " + Object.keys(modelosDisponiblesParaMarca).join(", "));
// while (!Object.keys(modelosDisponiblesParaMarca).includes(modeloSeleccionado)) {
//   modeloSeleccionado = prompt("Modelo no válido. Ingrese el modelo que desea comprar: " + Object.keys(modelosDisponiblesParaMarca).join(", "));
// }

// let precioSeleccionado = modelosDisponiblesParaMarca[modeloSeleccionado];

// // Simulamos la compra
// let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
// while (isNaN(cantidad) || cantidad < 1) {
//   cantidad = parseInt(prompt("Cantidad no válida. Ingrese la cantidad que desea comprar: "));
// }

// let precioTotal = cantidad * precioSeleccionado;

// // Imprimimos el resultado en la consola
// console.log("Has seleccionado el siguiente celular:");
// console.log("Marca: " + marcaSeleccionada);
// console.log("Modelo: " + modeloSeleccionado);
// console.log("Cantidad: " + cantidad);
// console.log("Precio unitario: $" + precioSeleccionado);
// console.log("Precio total: $" + precioTotal);

//////////////////////////////////TERCERA PREENTREGA////////////////////////////////////////////////////////////////

// Código JavaScript para el carrito de compras
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const clearCartButton = document.getElementById('clear-cart');

let cartItems = [];
let cartTotal = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

clearCartButton.addEventListener('click', clearCart);

// Recuperar datos del carrito del almacenamiento local (si existen)
if (localStorage.getItem('cartItems')) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
  calculateCartTotal();
  updateCartUI();
}

// Agregar un producto al carrito
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-product-id');
  const productElement = button.parentNode;
  const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Precio: $', '')); // Corregido
  const productName = productElement.querySelector('h3').textContent;

  const item = {
    id: productId,
    name: productName,
    price: productPrice
  };

  cartItems.push(item);
  calculateCartTotal();
  updateCartUI();
  saveCartData();
  button.classList.add('selected');
}

// Calcular el total de la compra
function calculateCartTotal() {
  cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
}

// Actualizar la interfaz de usuario del carrito
function updateCartUI() {
  cartItemsElement.innerHTML = '';
  cartTotalElement.textContent = `$${cartTotal.toFixed(3)}`;

  cartItems.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(cartItem);
  });
}

// Vaciar el carrito
function clearCart() {
  cartItems = [];
  cartTotal = 0;
  updateCartUI();
  saveCartData();
  addToCartButtons.forEach(button => {
    button.classList.remove('selected');
  });
}

// Guardar datos del carrito en el almacenamiento local
function saveCartData() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

//SWEETALERT

// Swal.fire(
//   {
//     title: 'Sea bienvenido',
//     icon:'success',
//     iconColor: '#85c1e9',
//     //da los segundos y desaparece solo
//    // timer: '5000',
//     //input pone datos de la persona
//     input: 'text' ,
//     inputPlaceholder: 'Ingrese tu edad',
//     min: 17,
//     max: 100,
//     step:1
//   }
// );

//entrada 

Swal.fire({
  title: 'Me indicas tu edad?',
  icon: 'question',
  input: 'range',
  inputLabel: 'Su edad',
  inputAttributes: {
    min: 8,
    max: 120,
    step: 1
  },
  inputValue: 25
})



//CREAR FETCH CARGA DE DATOS NUEVOS PARA LA ENTREGA FINAL

function enviarDatos(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  // Crear un objeto con los datos del formulario
  var datos = {
    nombre: nombre,
    email: email,
    contrasena: contrasena
  };

  // Enviar los datos al servidor utilizando Fetch
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la respuesta del servidor');
    }
  })
  .then(function(data) {
    // Aquí puedes manejar la respuesta del servidor
    console.log(data);
    alert('Datos enviados correctamente');
  })
  .catch(function(error) {
    // Aquí puedes manejar los errores
    console.log(error);
    alert('Error al enviar los datos');
  });
}

