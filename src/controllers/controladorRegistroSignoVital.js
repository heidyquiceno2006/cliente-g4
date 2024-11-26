import {guardarSignoVital} from"../services/serviciosSignoVital.js"

let cajaNombre=document.getElementById("nombreSignoVital")
let cajaValor=document.getElementById("valorSignoVital")
let cajaFechaMedida=document.getElementById("fechaMedida")
let botonRegistroSignoVital=document.getElementById("botonregistroSignoVital")

botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()

    let datosFormularioSignoVital={
        nombre:cajaNombre.value,
        valor:cajaValor.value,
        fechaMedida:cajaFechaMedida.value
    }

    guardarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "buen trabajo",
           text: "ya haces parte de nuestra familia",
            icon: "success"
       });
   })

 })

 