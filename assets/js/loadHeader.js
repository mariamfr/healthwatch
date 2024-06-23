document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Obtener el nombre de la página actual
            const currentPage = document.location.pathname.split('/').pop().split('.').shift();
            console.log(`encuentra pagina actual:${currentPage}`);
            // Deshabilitar el enlace de la página actual
            document.querySelectorAll('.nav-link').forEach(link => {
                console.log(`Recorre buscando:${currentPage} el link en ${link.dataset.page}`);
                if (link.dataset.page === currentPage) {
                    link.classList.add('disabled');
                    link.removeAttribute('href');
                    console.log(`encuentra en la pagina:${currentPage} el elemento ${link.dataset.page}`);
                }
            });
        });
});
