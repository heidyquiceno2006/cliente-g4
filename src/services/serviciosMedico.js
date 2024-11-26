export async function guardarMedico(datosMedico){

    const URL="http://localhost:8080/api/medico"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedico) 
    }

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
    


}

export async function consultarMedicos(){
    //1. pa onde voy - URL DEL SERVICIO
    const URL="http://localhost:8080/api/medico"

    //2. Que vas a hacer alla ome - CONFIGURO LA PETICION
    let peticion={
        method:"GET"
    }

    //3. Arranque ps mijo - CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal

}