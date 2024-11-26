import { guardarPaciente } from "../services/serviciosPaciente.js"


//controlador=archivo de js para manipular la interfaz grafica

//OBJETIVO=RECOGER los datos de un formulario

//1.asignamos un id a cada imput select o textarea del formulario
//2.asignar un id a cada boton de envio de formulario
//3. a cada id asuganado le creo una variable en js
//4. asociar a cada variable el id que se configuro en html 

let cajaNombre=document.getElementById("nombrepaciente")
let cajaFechaNacimiento=document.getElementById("nacimientopaciente")
let cajaCiudad=document.getElementById("ciudadpaciente")
let cajaCorreo=document.getElementById("correopaciente")
let cajaIPS=document.getElementById("ipspaciente")
let cajaTelefono=document.getElementById("telefonopaciente")
let cajaFechaAfiliacion=document.getElementById("afiliacionpaciente")
let cajaGrupoIngreso=document.getElementById("grupoingresopaciente")
let cajaAsegurado=document.getElementById("tienepoliza")
let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//5. detectar el evento de clc en el boton 
botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    //6.recoger los datos(los nombres del objeto)
    let datosFormularioPaciente={
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        ips:cajaIPS.value,
        tienePoliza:true,
        grupoIngresos:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value
    }
    
    guardarPaciente(datosFormularioPaciente)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "buen trabajo",
           text: "ya haces parte de nuestra familia",
            icon: "success"
       });
    })
})