//import { medicoSimulados } from "../data/simuladorMedico.js";

import {consultarMedicos} from"../services/serviciosMedico.js"

consultarMedicos()
.then(function(respuestaBack){
    let fila=document.getElementById("fila")

//debo recorrer los datos de la BD para pintarlos
    respuestaBack.forEach(function(medico){
    console.log(medico)
    //aplicando  traversing

    //1. crear una columna para cada paciente
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creo una tarjeta para cadsa paciente
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3 creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=medico.nombre 
    

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcono.src="../../assets/img/doctor.png"

    let etiquetaIPS=document.createElement("h4")
    etiquetaIPS.classList.add("tex-start","textosura")
    etiquetaIPS.textContent="IPS: "+medico.ips

    let etiquetaCorreo=document.createElement("h5")
    etiquetaCorreo.classList.add("tex-start")
    etiquetaCorreo.textContent=("correo electronico: "+medico.correo)

    let etiquetaTelefono=document.createElement("h5")
    etiquetaTelefono.classList.add("tex-start")
    etiquetaTelefono.textContent=("telefono: "+medico.telefono)

    let etiquetaEspecialidad=document.createElement("h5")
    etiquetaEspecialidad.classList.add("tex-start")
    etiquetaEspecialidad.textContent=("especialidad: "+medico.especialidad)

    let etiquetaSalario=document.createElement("h5")
    etiquetaSalario.classList.add("tex-start")
    etiquetaSalario.textContent=("salario: "+medico.salario)

    let etiquetaDireccion=document.createElement("h5")
    etiquetaDireccion.classList.add("tex-start")
    etiquetaDireccion.textContent=("direccion: "+medico.direccion)
    
    let eliminar=document.createElement("button")
    eliminar.classList.add("btn","btn-primary","w-25")
    
    let iconoBasura=document.createElement("i")
    iconoBasura.classList.add("bi", "bi-trash-fill")

    let editar=document.createElement("button")
    editar.classList.add("btn","btn-primary","w-25","my-2")
    
    let iconoEditar=document.createElement("i")
    iconoEditar.classList.add("bi", "bi-pencil-fill")






    //paso final: asocio las etiquetas 
    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaIPS)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaEspecialidad)
    tarjeta.appendChild(etiquetaSalario)
    tarjeta.appendChild(etiquetaDireccion)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    

    tarjeta.appendChild(eliminar)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

} )

})

