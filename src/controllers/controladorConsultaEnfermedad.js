//import { enfermedadSimulados } from "../data/simuladorEnfermedad.js";

import {consultarEnfermedades} from"../services/serviciosEnfermedad.js"

    consultarEnfermedades()
    .then(function(respuestaBack){
        let fila=document.getElementById("fila")

//debo recorrer los datos de la BD para pintarlos
respuestaBack.forEach(function(enfermedad){
    console.log(enfermedad)
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
    etiquetaNombre.textContent=enfermedad.nombre 
    

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcono.src="../../assets/img/equipo-medico.png"

    let etiquetaSintomas=document.createElement("h4")
    etiquetaSintomas.classList.add("tex-start","textosura")
    etiquetaSintomas.textContent="sintomas: "+enfermedad.sintomas

    let etiquetaClasificacion=document.createElement("h5")
    etiquetaClasificacion.classList.add("tex-start")
    etiquetaClasificacion.textContent=("Clasificacion: "+enfermedad.clasificacion)

    let etiquetaGrado=document.createElement("h5")
    etiquetaGrado.classList.add("tex-start")
    etiquetaGrado.textContent=("Grado: "+enfermedad.grado)

    let etiquetaProbabilidadVivir=document.createElement("h5")
    etiquetaProbabilidadVivir.classList.add("tex-start")
    etiquetaProbabilidadVivir.textContent=("Provabilidad de vivir : "+enfermedad.probabilidadVivir)

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
    tarjeta.appendChild(etiquetaSintomas)
    tarjeta.appendChild(etiquetaClasificacion)
    tarjeta.appendChild(etiquetaGrado)
    tarjeta.appendChild(etiquetaProbabilidadVivir)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    

    tarjeta.appendChild(eliminar)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})
 })

