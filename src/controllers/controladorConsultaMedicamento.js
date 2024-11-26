//import { medicamentoSimulados } from "../data/simuladorMedicamento.js";

import {consultarMedicamentos} from "../services/serviciosMedicamento.js"
consultarMedicamentos()
.then(function(respuestaBack){
    let fila=document.getElementById("fila")

//debo recorrer los datos de la BD para pintarlos
respuestaBack.forEach(function(medicamento){
    console.log(medicamento)
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
    etiquetaNombre.textContent=medicamento.nombre 
    

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcono.src="../../assets/img/farmaco.png"

    let etiquetaPresentacion=document.createElement("h4")
    etiquetaPresentacion.classList.add("tex-start","textosura")
    etiquetaPresentacion.textContent="presentacion: "+medicamento.presentacion

    let etiquetaDosis=document.createElement("h5")
    etiquetaDosis.classList.add("tex-start")
    etiquetaDosis.textContent=("Dosis: "+medicamento.dosis)

    let etiquetaLaboratorio=document.createElement("h5")
    etiquetaLaboratorio.classList.add("tex-start")
    etiquetaLaboratorio.textContent=("laboratorio: "+medicamento.laboratorio)

    let etiquetaFechaCaducidad=document.createElement("h5")
    etiquetaFechaCaducidad.classList.add("tex-start")
    etiquetaFechaCaducidad.textContent=("fecha caducidad: "+medicamento.fechaCaducidad)

    let etiquetaContraIndicaciones=document.createElement("h5")
    etiquetaContraIndicaciones.classList.add("tex-start")
    etiquetaContraIndicaciones.textContent=("contra indicaciones: "+medicamento.contraIndicaciones)


    let etiquetaRegistroInvina=document.createElement("h5")
    etiquetaRegistroInvina.classList.add("tex-start","fw-bold")
    etiquetaRegistroInvina.textContent=("registro INVINA: "+medicamento.registroINVINA)
    
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
    tarjeta.appendChild(etiquetaPresentacion)
    tarjeta.appendChild(etiquetaDosis)
    tarjeta.appendChild(etiquetaLaboratorio)
    tarjeta.appendChild(etiquetaFechaCaducidad)
    tarjeta.appendChild(etiquetaContraIndicaciones)
    tarjeta.appendChild(etiquetaRegistroInvina)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    

    tarjeta.appendChild(eliminar)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

} )
})

