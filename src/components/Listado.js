import React from 'react';
import Gasto from './Gasto'
import PropTypes from 'prop-types';

const Listado = ({items}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {items.map(item=> (
            <Gasto
                key={item.id}
                item={item}
            />
        ))}
    </div>
);
 
Listado.propTypes = {
    items: PropTypes.array.isRequired
}

export default Listado;