export async function guardarPaciente(datosPaciente){       

      const URL="http://localhost:8080/api/paciente"
            let peticion={
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(datosPaciente)
}

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
}

export async function consultarPacientes(){
    const URL="http://localhost:8080/api/paciente"

    let peticion={
        method:"GET"
    }

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
}