import React , { Fragment , useState } from 'react'


function Formulario({crearTurno}){
    //State que actualiza los turnos
    const [turno , actualizarTurno ] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    //Crear un nuevo state para manipular errores con booleans //luego agregar un alerta en el html
    const  [ error, actualizarError ] = useState(false)

    //funcion que se ejecuta cada que el usuario escribe en el input
    function handleChange(e){
        //usa la funcion de actualizar el state
        actualizarTurno({
            //Pero primero toma una copia del mismo
            ...turno,
            //Y luego completa sus campos con el valor del input en e que escribo
            [e.target.name]:e.target.value
        })
    }
    //Extraer los valores del objeto 
    const { mascota, propietario , fecha , hora , sintomas } = turno

    //Cuando se hace click en boton enviar
    function subirTurno(e){
        e.preventDefault();

        //validar el form si llegan campos vacios
        if(mascota.trim() === '' || propietario.trim() === ''|| fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            console.log('error')    
            actualizarError(true)
            return
        }
        //si esta todo correcto anulamos el error
        actualizarError(false)
        //crear un id para cada turno antes de subirlo
        turno.id= Date.now()
        //subir el turno ( recibo esta funcion como props)
        crearTurno(turno)
        //reiniciar el formulario ( los values en inputs se vuelven vacios )
        actualizarTurno({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }





    return(
        <Fragment>
            <h2>Pedir un nuevo turno</h2>


            <form onSubmit={subirTurno}>
                {error? <p className="alerta-error">Algunos campos estan incompletos</p> : null}

                <label>Nombre de tu mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de tu mascota"
                    onChange={handleChange}
                    value={mascota}

                />
                <label>Propietario</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Tu nombre"
                    onChange={handleChange}
                    value={propietario}

                />
                 <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}

                />
                 <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}

                />
                <label>Sintomas</label>
                <textarea 
                className="u-full-width"
                name="sintomas"
                onChange={handleChange}
                value={sintomas}
                >
                </textarea>
                <button 
                type="submit"
                className="u-full-width button-primary"
                >    
                    Pediro turno
                </button>
            </form>

        </Fragment>

    )

}

export default Formulario;
