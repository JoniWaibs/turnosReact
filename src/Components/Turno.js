import React from 'react'

function Turno({turno , borrarTurno}){
    return(
        <div className="cita">
            <p>Mascota: <span>{turno.mascota}</span></p>
            <p>Propietario: <span>{turno.propietario}</span></p>
            <p>Fecha: <span>{turno.fecha}</span></p>
            <p>Hora: <span>{turno.hora}</span></p>
            <p>Sintomas: <span>{turno.sintomas}</span></p>


            <button 
            className="button eliminar u-full-width"
            onClick={()=> borrarTurno(turno.id)}

            >Eliminar &times;</button>
        </div>
    )
}

export default Turno;