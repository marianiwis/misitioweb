const datosSecciones = [
    {
        seccion: "Educación",
        imagen: "imgCards/educacion.jpg",
        descripcion: "Conoce más sobre mi formación, te cuento donde estudié de manera formal y los conocimientos que me ayudaron a formarme cultivando mi curiosidad por el conocimiento.",
        url: "educacion.html"
    },
    {
        seccion: "Música",
        imagen: "imgCards/musica.jpg",
        descripcion: "Las mejores canciónes del planeta de todos los géneros posibles, me apasiona la música como forma de expresión humana. En este lugar vas a encontrar mis mejores recomendaciones para abrir tus gustos.",
        url: "musica.html"
    },
    {
        seccion: "Mágia Por El Mundo",
        imagen: "imgCards/mundo.jpg",
        descripcion: "Las cuidades guardan historias, los lugares tienen pasados y futuros. En el presente finito que se me escapa capturo movimientos y bellezas escondidas al transeúnte.",
        url: "mundo.html"
    },
    {
        seccion: "Mis Hermanas de la Vida",
        imagen: "imgCards/hermanas.jpg",
        descripcion: "Les presento a mi familia, a mis amigas del alma. Mis musas captadas por mi cámara posan como hadas adornando y embelleciendo todos los lugares que ocupan.",
        url: "hermanas.html"
    },
    {
        seccion: "El Rincón del Libro",
        imagen: "imgCards/libros.jpg",
        descripcion: "Si sos un seguidor de las palabras ajenas, de las historias y poemas que retratan la humanidad en su gran espectro de colores este es tu lugar. Podés encontrar mis recomendaciones de libros junto con mis reviews (sin spoilers)",
        url: "libros.html"
    }

];

function cargarCards(containerId) {
    const container = document.getElementById(containerId);
    let cardHTML = '';

    datosSecciones.forEach(data => {
        cardHTML += `
            <div class="col-12 col-sm-6 col-md-4 mb-4">
                <div class="card h-100 shadow" onclick="window.location.href='${data.url}'" style="cursor: pointer;">
                    <img src="${data.imagen}" class="card-img-top" alt="${data.seccion}">
                    <div class="card-body text-center">
                        <h5 class="card-title" style="color: rgb(195, 3, 105);">${data.seccion}</h5>
                        <p class="card-text">${data.descripcion}</p>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = cardHTML;
}

// Cargar las cards en el contenedor
cargarCards('card-container');
