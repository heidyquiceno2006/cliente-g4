import {guardarMedico} from"../services/serviciosMedico.js"


let cajaNombre=document.getElementById("nombremedico")
let cajaTelefono=document.getElementById("telefonomedico")
let cajaCorreo=document.getElementById("correomedico")
let cajaIPS=document.getElementById("IPSmedico")
let cajaMatriculaProfesional=document.getElementById("matriculaprofesionalmedico")
let cajaEspecialidad=document.getElementById("especialidadmedico")
let cajaSalario=document.getElementById("salariomedico")
let cajaDireccion=document.getElementById("direccionmedico")
let cajaDisponible=document.getElementById("disponiblefinsemana")

let botonRegistroMedico=document.getElementById("botonregistromedico")

//5. detectar el evento de clc en el boton 
botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()

    //6.recoger los datos(los nombres del objeto)
    let datosFormularioMedico={
        nombre:cajaNombre.value,
        telefono:cajaTelefono.value,
        correo:cajaCorreo.value,
        ips:cajaIPS.value,
        matricula:cajaMatriculaProfesional.value,
        especialidad:cajaEspecialidad.value,
        salario:cajaSalario.value,
        direccion:cajaDireccion.value,
        estadisponibleFindeemana:true
    }

    guardarMedico(datosFormularioMedico)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "buen trabajo",
           text: "ya haces parte de nuestra familia",
            icon: "success"
       });
   })
})

    