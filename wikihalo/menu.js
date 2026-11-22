const boton = document.getElementById('abrir');
const menu = document.getElementById("menu");

boton.addEventListener('click', function () {
    if(menu.style.display === "flex") {
        menu.style.display = '';
        boton.textContent = "☰";
    } else {
        menu.style.display = "flex";
      boton.textContent = "✕";
    }
});