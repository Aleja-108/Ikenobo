console.log("OK");

const productos = [
    {
        nombre: "Iris",
        imagen: "./imgs/iris.jpg",
        descripción: "Renace en primavera, frescura y color",
        precio:65000
    },
    {
        nombre: "Rosas y Calas",
        imagen: "./imgs/rosas_calas.jpg",
        descripción: "Elegancia de verano para celebraciones",
        precio:75000
    },
    {
        nombre: "Gerberas rojas",
        imagen: "./imgs/gerberas_rojas.jpg",
        descripción: "Colores vibrantes para el otoño",
        precio:85000
    },
    {
        nombre: "Astromelias",
        imagen: "./imgs/astromelias.jpg",
        descripción: "Frescura y alegría primaveral",
        precio:90000
    },
    {
        nombre: "Glebe",
        imagen: "./imgs/glebe.jpg",
        descripción: "Cálido y acogedor para el invierno",
        precio:95000
    },
    {
        nombre: "Gerberas",
        imagen: "./imgs/gerberas_.jpg",
        descripción: "Energía y color de otoño",
        precio:95000
    },
]
console.log(productos);

/*let ikebanaHTML = `
                <div class="card">
                    <img src=${productos[indice].imagen}>
                    <h3 class="card-title">${productos[indice].nombre}</h3>
                    <p class="card-text"> ${productos[indice].descripción}</p>
                    <p class="product-price">$${productos[indice].precio}</p>
                    <div>
                        <button type="submit" class="btn-full"><i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
`;*/
let ikebanaHTML ="";
for(let indice = 0; indice < productos.length; indice++){

    ikebanaHTML +=`
                <div class="card">
                    <img src=${productos[indice].imagen}>
                    <h3 class="card-title">${productos[indice].nombre}</h3>
                    <p class="card-text"> ${productos[indice].descripción}</p>
                    <p class="product-price">$${productos[indice].precio}</p>
                    <div>
                        <button type="submit" class="btn-full"><i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
    `;
}
console.log(ikebanaHTML);
const ikebanaContainer = document.getElementById("ikebanaContainer");
ikebanaContainer.innerHTML = ikebanaHTML;

//** Agregar un listener a los botones de los productos */

const btnAgregar = document.querySelectorAll(".btn-full");
console.log (btnAgregar);

const listCarrito = document.querySelector("#carrito ul");
console.log(listCarrito);
const totalCarrito = document.querySelector("#carrito p")
console.log(totalCarrito);

const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalPagar = 0;

//agregamos el listener a c/btn

for(let indice = 0; indice < btnAgregar.length; indice++){

    function agregarElemCarrito(){
        console.log("click " + indice);
        const elementoLi = document.createElement("li");
        
        elementoLi.innerText = `Ikebana ${productos[indice].nombre} $${productos[indice].precio}`
        console.log(elementoLi);

        listCarrito.appendChild(elementoLi);

        totalPagar += productos[indice].precio;

        totalCarrito.innerText = "Total a pagar: $" + totalPagar;
    }

    btnAgregar[indice].addEventListener("click", agregarElemCarrito);
}


// agregar listener al botón Borrar

const botonBorrar = document.querySelector("#btn_borrar");
console.log(botonBorrar);



function borrarCarrito(){
    listCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalPagar = 0;
    mensajePagarCarrito.innerText = ""
}
botonBorrar.addEventListener("click", borrarCarrito);

// agregar listener al btn Pagar

const botonPagar = document.querySelector("#btn_pagar");

function irPagar(){
    if(listCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No has seleccionado productos"

    } else {

        window.location.href = "/pages/pagos.html";
    }
}

botonPagar.addEventListener("click", irPagar)
