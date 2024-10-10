// Función para cargar JSON y generar cards
function cargarSeccion(url, containerId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId);
            let cardHTML = `
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <div class="card">
                        <img src="${data.imagen}" class="card-img-top" alt="${data.seccion}" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
                        <div class="card-body text-center">
                            <h5 class="card-title">${data.seccion}</h5>`; // Este ya mostrará el emoji

            // Cargamos la información formal o los items
            if (data.formal) {
                cardHTML += `
                    <h6 class="card-subtitle mb-2">Formal</h6>
                    <ul class="list-unstyled">`;
                data.formal.forEach(item => {
                    cardHTML += `<li>${item}</li>`;
                });
                cardHTML += `</ul>`;
                cardHTML += `
                    <h6 class="card-subtitle mb-2">No Formal</h6>
                    <ul class="list-unstyled">`;
                data.noFormal.forEach(item => {
                    cardHTML += `<li>${item}</li>`;
                });
                cardHTML += `</ul>`;
            } else {
                cardHTML += `<ul class="list-unstyled">`;
                data.items.forEach(item => {
                    cardHTML += `<li>${item}</li>`;
                });
                cardHTML += `</ul>`;
            }

            cardHTML += `</div></div></div>`;
            container.innerHTML += cardHTML;
        })
        .catch(error => console.error('Error al cargar la sección:', error));
}

// Cargar todas las secciones
cargarSeccion('educacion.json', 'card-container');
cargarSeccion('idiomas.json', 'card-container');
cargarSeccion('hobbies.json', 'card-container');
