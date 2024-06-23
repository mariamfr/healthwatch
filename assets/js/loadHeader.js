document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Obtener el nombre de la página actual
            const currentPage = document.location.pathname.split('/').pop().split('.').shift();
            console.log(`primera:${currentPage}`);
            // Deshabilitar el enlace de la página actual
            document.querySelectorAll('.nav-link').forEach(link => {
                console.log(`segunda:${currentPage} link es ${link.dataset.page}`);
                if (link.dataset.page === currentPage) {
                    link.classList.add('disabled');
                    link.removeAttribute('href');
                    console.log(`tercera:${currentPage}`);
                }
            });
        });
});
