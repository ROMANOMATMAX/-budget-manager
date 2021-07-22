import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helpers'
import PropTypes from 'prop-types';


const ControlPresupuesto = ({presupuesto, restante, guardarPresupuesto, guardarRestante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired, 
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired
}
 
export default ControlPresupuesto;