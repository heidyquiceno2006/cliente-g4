import {guardarEnfermedad} from"../services/serviciosEnfermedad.js"

let cajaNombre=document.getElementById("nombreenfermedad")
let cajaSintomas=document.getElementById("sintomasenfermedad")
let cajaClasificacion=document.getElementById("clasificacionenfermedad")
let cajaGrado=document.getElementById("gradoenfermedad")
let cajaProbabilidadVida=document.getElementById("probabilidadvidaenfermedad")
let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()

    let datosFormularioEnfermedad = {
        nombre:cajaNombre.value,
        sintomas:cajaSintomas.value,
        clasificacion:cajaClasificacion.value,
        grado:cajaGrado.value,
        probabilidadVivir:cajaProbabilidadVida.value
    }

    guardarEnfermedad(datosFormularioEnfermedad)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "buen trabajo",
           text: "ya haces parte de nuestra familia",
            icon: "success"
       });
   })
    })

    