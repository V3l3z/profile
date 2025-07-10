document.addEventListener('DOMContentLoaded', function() {
    console.log('El sitio web de CV de Hans Velez ha cargado completamente.');

    // Función para renderizar los niveles de habilidad
    function renderSkillLevels() {
        const skillLevels = document.querySelectorAll('.skill-level');

        skillLevels.forEach(levelDiv => {
            const level = parseInt(levelDiv.dataset.level); // Obtener el nivel del atributo data-level
            levelDiv.innerHTML = ''; // Limpiar cualquier contenido existente

            for (let i = 0; i < 5; i++) { // Siempre renderizamos 5 círculos
                const span = document.createElement('span');
                if (i < level) {
                    span.classList.add('filled'); // Añadir clase 'filled' si el círculo debe estar lleno
                }
                levelDiv.appendChild(span);
            }
        });
    }

    // Llama a la función para renderizar las habilidades cuando la página cargue
    renderSkillLevels();

    // Puedes añadir más funcionalidades de JavaScript aquí en el futuro.
    // Por ejemplo, desplazamiento suave, un modal para proyectos, etc.

    // Ejemplo de un efecto simple al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
