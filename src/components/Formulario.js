import React, {useState} from 'react';
import Error from './Error'
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types';

const Formulario = ({restante, guardarRestante, items, agregarItem}) => {

    const [concepto, guardarConcepto]= useState("");
    const [monto, guardarMonto]= useState(0);
    const [error, actualizarError] = useState(false);

    //Funciones que manejan los eventos
    const tomarNuevoGasto = e => {
        // console.log(e.target.value);
        guardarConcepto(e.target.value);
    }

    const tomarNuevoMonto = e => {
        // console.log(parseInt(e.target.value));
        guardarMonto(parseInt(e.target.value));
    }

    const agregarNuevoItem = e => {

        e.preventDefault();

        console.log(concepto);

        if(concepto===""||concepto===null) {
            actualizarError(true);
            return;
        }

        if(monto<1|| isNaN(monto)) {
            actualizarError(true);
            return;
        }

        actualizarError(false);

        const nuevoGasto = {
            nombre: concepto,
            cantidad: monto,
            id: uuid()
        }

        guardarRestante(restante - monto);

        guardarMonto(0);
        guardarConcepto('');


        agregarItem(
            [...items,
                nuevoGasto,
            ]
        )
    }

    return (  
        <form 
            onSubmit={agregarNuevoItem}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> :null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder= "Ej. Transporte"
                    value={concepto}
                    onChange={tomarNuevoGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder= "Ej. 300"
                    value={monto}
                    onChange={tomarNuevoMonto}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    restante: PropTypes.number.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    agregarItem: PropTypes.func.isRequired
}
 
export default Formulario;