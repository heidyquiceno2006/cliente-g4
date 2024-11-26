export async function guardarMedicamento(datosMedicamento){

    const URL="http://localhost:8080/api/medicamento"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedicamento) 
    }

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
    


}

export async function consultarMedicamentos(){
    //1. pa onde voy - URL DEL SERVICIO
    const URL="http://localhost:8080/api/medicamento"

    //2. Que vas a hacer alla ome - CONFIGURO LA PETICION
    let peticion={
        method:"GET"
    }

    //3. Arranque ps mijo - CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal

}