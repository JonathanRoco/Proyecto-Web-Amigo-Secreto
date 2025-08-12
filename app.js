// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    let nombreIngresadoPorUsuario = document.getElementById("amigo").value;

    if (nombreIngresadoPorUsuario === "") {
        alert("Por favor, inserte un nombre.");
        } else {
            listaDeAmigos.push(nombreIngresadoPorUsuario);
            mostrarListaDeAmigo();
            limpiarCaja();
        }
        return;
    }


function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo")
    valorCaja.value = "";
}


function mostrarListaDeAmigo() {
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}


function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  
    let amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<strong>El amigo secreto es:</strong> ${amigoSeleccionado}`;
}