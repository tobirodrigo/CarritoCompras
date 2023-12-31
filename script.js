var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
}); 

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30, 
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints : {
        0: {
            slidesPerview: 1
        },
        520: {
            slidesPerview: 2
        },
        950: {
            slidesPerview: 3
        }
    }
});

//Carrito 

document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("carrito");
    const lista1 = document.getElementById("lista-1");
    const lista2 = document.getElementById("lista-2");
    const lista3 = document.getElementById("lista-3");
    const lista = document.querySelector("#list-cart tbody");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    cargarEventListeners();

    function cargarEventListeners() {
        lista1.addEventListener("click", comprarElemento);
        lista2.addEventListener("click", comprarElemento);
        lista3.addEventListener("click", comprarElemento);
        carrito.addEventListener("click", eliminarElemento);

        vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
    }

    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains("agregar-carrito")) {
            const elemento = e.target.parentElement.parentElement.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector("img").src,
            titulo: elemento.querySelector("h3").textContent,
            precio: elemento.querySelector(".precio").textContent,
            id: elemento.querySelector("a").getAttribute("data-id")
        }

        insertarCarrito(infoElemento);

    }

    function insertarCarrito(elemento) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${elemento.imagen}" width="100">
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="" class="borrar" data-id="${elemento.id}">Borrar</a>
            </td>
        `;

        lista.appendChild(row);
    }

    function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains("borrar")) {
            const elemento = e.target.parentElement.parentElement;
            const elementoId = elemento.querySelector("a").getAttribute("data-id");
            elemento.remove();
        }
    }

    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }
});
