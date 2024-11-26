import {guardarMedicamento} from "../services/serviciosMedicamento.js"

let cajaNombre=document.getElementById("nombremedicamento")
let cajaPresentacion=document.getElementById("presentacionmedicamento")
let cajaDosis=document.getElementById("dosismedicamento")
let cajaLaboratorio=document.getElementById("laboratoriomedicamento")
let cajaFechaCaducidad=document.getElementById("fechacaducidadmedicamento")
let cajaContraIndicaciones=document.getElementById("contraindicacionesmedicamento")
let cajaRegistro=document.getElementById("registromedicamento")
let cajaTieneCopago=document.getElementById("tienecopago")

let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

//5. detectar el evento de clc en el boton 
botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()

    //6.recoger los datos(los nombres del objeto)
    let datosFormularioMedicamento={
        nombre:cajaNombre.value,
        presentacion:cajaPresentacion.value,
        dosis:cajaDosis.value,
        laboratorio:cajaLaboratorio.value,
        fechacaducidad:cajaFechaCaducidad.value,
        contraindicaciones:cajaContraIndicaciones.value,
        registroINVINA:cajaRegistro.value,
        tieneCopago:true
    }

        guardarMedicamento(datosFormularioMedicamento)
        .then(function(respuestaBack){
            console.log(respuestaBack)
            Swal.fire({
                title: "buen trabajo",
               text: "ya haces parte de nuestra familia",
                icon: "success"
           });
       })
     })

       

    
