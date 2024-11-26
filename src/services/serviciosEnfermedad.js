export async function guardarEnfermedad(datosEnfermedad){

    const URL="http://localhost:8080/api/enfermedad"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnfermedad) 
    }

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
    


}

export async function consultarEnfermedades(){
    //1. pa onde voy - URL DEL SERVICIO
    const URL="http://localhost:8080/api/enfermedad"

    //2. Que vas a hacer alla ome - CONFIGURO LA PETICION
    let peticion={
        method:"GET"
    }

    //3. Arranque ps mijo - CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal

}