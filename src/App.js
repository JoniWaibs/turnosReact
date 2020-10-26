import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Turno from "./Components/Turno";
import "./index.css";


function App() {
  //chequear si existen citas en local storage de arranque
  let init = JSON.parse(localStorage.getItem("Turnos"));
  if (!init) {
    //si no existe ninguno se crea un array vacio
    init = [];
  }

  //pero si hay turnos en ls ,el state principal las almacena en su estado inicial
  const [allTurnos, updateAllTurnos] = useState(init);

  //usseEfect opera cuando hay cambios en useState ( cada vez que cambia el estado inicial digamos )
  useEffect(() => {
    //chequear si existen citas en local storage de arranque
    let init = JSON.parse(localStorage.getItem("Turnos"));
    //cada que se modifique el state se guarda una copia en local
    //si init tiene algo en cada modificacion
    if (init) {
      //guardo en local storag una copia
      localStorage.setItem("Turnos", JSON.stringify(allTurnos)); //si hay algo en ls se guarda
    } else {
      //y sino no guarda nada
      localStorage.setItem("Turnos", JSON.stringify([]));
    }
  }, [allTurnos]); //entre parensesis va la referencia de cambio es decir se va a ejecutar cada que cambie allTurnos, vale la aclaracion porque
  //puede haber muchos states en una aplicacion


  //funcion que recibe cada turno y lo guarda en el state principal
  const crearTurno = (turno) => {
    //Tomamos una copia de los turnos que ya esten cargados y almacenamos el turno nuevo
    updateAllTurnos([...allTurnos, turno]);
  };
  //funcion que elimina os turnos
  const borrarTurno = (turno) => {
    const result = allTurnos.filter((trn) => trn.id !== turno);
    updateAllTurnos(result);
  };

  //envio la funcion crear turno como prop para capturarla en el componente formularo y transferir cada turno
  return (
    <Fragment>
      <div className="coinainer">
        <h1>Administrador de turnos</h1>

        <div className="row">
          <div className="one-half column">
            <Formulario crearTurno={crearTurno} />
          </div>

          <div className="one-half column">
            <h2>
              {allTurnos.length < 1 ? "Agrega un turno" : "Turnos agendados"}
            </h2>

            {allTurnos.map((turno) => {
              return (
                <Turno key={turno.id} turno={turno} borrarTurno={borrarTurno} />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
