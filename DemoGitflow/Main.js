// =========================
// NAVEGACIÓN SUAVE
// =========================

document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =========================
// VALIDACIÓN DEL FORMULARIO
// =========================

const formulario = document.querySelector('form');

if (formulario) {

    formulario.addEventListener('submit', function(e) {

        e.preventDefault();

        const nombre =
            document.querySelector(
                'input[type="text"]'
            ).value.trim();

        const correo =
            document.querySelector(
                'input[type="email"]'
            ).value.trim();

        const modalidad =
            document.querySelector(
                'select'
            ).value;

        if (
            nombre === '' ||
            correo === '' ||
            modalidad === 'Seleccione modalidad'
        ) {

            alert(
                'Por favor complete todos los campos obligatorios.'
            );

            return;
        }

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correo)) {

            alert(
                'Ingrese un correo electrónico válido.'
            );

            return;
        }

        alert(
            'Registro enviado correctamente. ¡Gracias por participar!'
        );

        formulario.reset();

    });

}

// =========================
// AÑO AUTOMÁTICO EN FOOTER
// =========================

const elementoAnio =
    document.getElementById('anio');

if (elementoAnio) {

    elementoAnio.textContent =
        new Date().getFullYear();

}

// =========================
// EFECTO DE APARICIÓN
// =========================

const secciones =
    document.querySelectorAll('section');

const observador =
    new IntersectionObserver(
        entradas => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = '1';
                    entrada.target.style.transform = 'translateY(0)';

                }

            });

        },
        {
            threshold: 0.2
        }
    );

secciones.forEach(seccion => {

    seccion.style.opacity = '0';
    seccion.style.transform = 'translateY(30px)';
    seccion.style.transition = 'all 0.6s ease';

    observador.observe(seccion);

});