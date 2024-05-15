const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")


function mostrarFormulario(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderFormulario(){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}