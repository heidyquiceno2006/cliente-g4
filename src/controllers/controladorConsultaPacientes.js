//import { pasientesSimulados } from "../data/simuladorPacientes.js";
 
import { consultarPacientes } from "../services/serviciosPaciente.js"

consultarPacientes()
.then(function(respuestaBack){
    let fila=document.getElementById("fila")

//debo recorrer los datos de la BD para pintarlos
respuestaBack.forEach(function(paciente){
    console.log(paciente)
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
    etiquetaNombre.textContent=paciente.nombre 
    

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcono.src="../../assets/img/paciente.png"

    let etiquetaIPS=document.createElement("h4")
    etiquetaIPS.classList.add("tex-start","textosura")
    etiquetaIPS.textContent="IPS: "+paciente.ips

    let etiquetaCorreo=document.createElement("h5")
    etiquetaCorreo.classList.add("tex-start")
    etiquetaCorreo.textContent=("correo electronico: "+paciente.correo)

    let etiquetaTelefono=document.createElement("h5")
    etiquetaTelefono.classList.add("tex-start")
    etiquetaTelefono.textContent=("telefono: "+paciente.telefono)

    let etiquetaAnioNacimiento=document.createElement("h5")
    etiquetaAnioNacimiento.classList.add("tex-start")
    etiquetaAnioNacimiento.textContent=("año nacimiento: "+paciente.anioNacimiento)

    let etiquetaCiudad=document.createElement("h5")
    etiquetaCiudad.classList.add("tex-start")
    etiquetaCiudad.textContent=("ciudad: "+paciente.ciudad)

    let etiquetaGrupoIngreso=document.createElement("h5")
    etiquetaGrupoIngreso.classList.add("tex-start")
    etiquetaGrupoIngreso.textContent=("cgrupo Ingreso: "+paciente.grupoIngresos)

    let etiquetaFechaAfiliacion=document.createElement("h5")
    etiquetaFechaAfiliacion.classList.add("tex-start","fw-bold")
    etiquetaFechaAfiliacion.textContent=("fecha afiliacion: "+paciente.fechaAfiliacion)
    
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
    tarjeta.appendChild(etiquetaAnioNacimiento)
    tarjeta.appendChild(etiquetaCiudad)
    tarjeta.appendChild(etiquetaGrupoIngreso)
    tarjeta.appendChild(etiquetaFechaAfiliacion)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    

    tarjeta.appendChild(eliminar)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

} )
})

