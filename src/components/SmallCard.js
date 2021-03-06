import React from 'react';
import PropTypes from 'prop-types';

function SmallCard({ color, title, icono, value }) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}> {title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

SmallCard.defaultProps = {
    title: 'Default title',
    color: 'secondary',
    value: 10,
    icono: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icono: PropTypes.string.isRequired
    })
}



export default SmallCard;