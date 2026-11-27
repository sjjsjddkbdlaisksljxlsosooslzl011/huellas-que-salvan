// HUELLAS QUE SALVAN 🐾
// JavaScript - Interactividad de la página

// 1. Mensaje de bienvenida
window.addEventListener("load", function() {
    alert("🐾 ¡Bienvenido a HUELLAS QUE SALVAN! 💚\nCada vida merece una segunda oportunidad.");
});

// 2. Mensaje al pulsar los enlaces de ayuda
const enlaces = document.querySelectorAll('a[href="#ayuda"]');

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        console.log("¡Gracias por querer ayudar a los animales! 🐶🐱");
    });
});

// 3. Efecto en las imágenes
const imagenes = document.querySelectorAll("img");

imagenes.forEach(function(imagen) {
    imagen.addEventListener("mouseenter", function() {
        imagen.style.transform = "scale(1.03)";
        imagen.style.transition = "0.3s";
    });

    imagen.addEventListener("mouseleave", function() {
        imagen.style.transform = "scale(1)";
    });
});

// 4. Mensaje de campaña
const campana = document.querySelector("#campana");

if (campana) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "💚 ¡Tu ayuda puede cambiar una vida!";
    mensaje.style.fontWeight = "bold";
    campana.appendChild(mensaje);
}

// 5. Mostrar año actual en el pie de página
const footer = document.querySelector("footer");

if (footer) {
    const anio = document.createElement("p");
    anio.textContent = "© " + new Date().getFullYear() +
        " Huellas que Salvan - Todos los derechos reservados.";
    footer.appendChild(anio);
}

// 6. Mensaje al hacer clic en los enlaces de navegación
const navegacion = document.querySelectorAll("nav a");

navegacion.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        console.log("Navegando por Huellas que Salvan 🐾");
    });
});

// 7. Mensaje final
console.log("🐾 Huellas que Salvan está funcionando correctamente.");
console.log("💚 Gracias por apoyar la protección animal.");

