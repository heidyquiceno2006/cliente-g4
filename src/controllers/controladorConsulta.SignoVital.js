//import { signoVitalSimulados } from "../data/simuladorSignoVital.js"; 

import {consultarSignoVitales} from"../services/serviciosSignoVital.js"

    consultarSignoVitales()
    .then(function(respuestaBack){
        let fila=document.getElementById("fila")

        //debo recorrer los datos de la BD para pintarlos
        respuestaBack.forEach(function(signoVital){
            console.log(signoVital)
            //aplicando  traversing
        
            //1. crear una columna para cada paciente
            let columna=document.createElement("div")
            columna.classList.add("col")
        
            //2. creo una tarjeta para cadsa paciente
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","p-5","shadow")
        
            //3 creo una etiqueta para el nombre de cada paciente
            let etiquetaNombre=document.createElement("h3")
            etiquetaNombre.classList.add("nombre","fw-bold")
            etiquetaNombre.textContent=signoVital.nombre 
            
        
            let etiquetaIcono=document.createElement("img")
            etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
            etiquetaIcono.src="../../assets/img/presion-arterial.png"
        
            let etiquetaValor=document.createElement("h4")
            etiquetaValor.classList.add("tex-start","textosura")
            etiquetaValor.textContent="valor: "+signoVital.valor
        
            let etiquetaFechaMedida=document.createElement("h4")
            etiquetaFechaMedida.classList.add("tex-start","textosura")
            etiquetaFechaMedida.textContent="fecha medida: "+signoVital.fechaMedida
        
            
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
            tarjeta.appendChild(etiquetaValor)
            tarjeta.appendChild(etiquetaFechaMedida)
            tarjeta.appendChild(eliminar)
            tarjeta.appendChild(editar)
            
        
            tarjeta.appendChild(eliminar)
            
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        
        } )
    })

