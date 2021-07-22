import React, {Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //FUNCION DE EVENTO input
    const definirPresupuesto = e => {
        // console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value));
    }
    //evento submit
    const agregarPresupuesto = e => {
        e.preventDefault();//Evitamos que se recargue la page y pase como query string los values
        if(cantidad<1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> :null}

            <form 
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;