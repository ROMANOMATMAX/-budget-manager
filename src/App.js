import React, {useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  //definir presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [items, agregarItem]= useState([]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ?  (
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ): (
            <div className="row">
            <div className="one-half column">
              <Formulario 
                restante={restante}
                guardarRestante={guardarRestante}
                items={items}
                agregarItem={agregarItem}
              />
            </div>
            <div className="one-half column">
              <Listado 
                items={items}
              />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
              />
            </div>
          </div>
          )          
          }
        </div>
      </header>
    </div>
  );
}

export default App;
