import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelection = () => {
    const { availableCurrencies, currency, dispatch } = useContext(AppContext);
    
    const handleClick = (symbol) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload:symbol
        })
    }
    return (
        <div className="dropdown">
            <button className="btn btn-success dropdown-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency {currency}
            </button>
            <ul className="dropdown-menu">
                {
                    availableCurrencies.map((currency, index) => (
                        <li key={index}><button className="dropdown-item" onClick={() => handleClick(currency.symbol)}>{currency.name}</button></li>
                    ))
                }
            </ul>
        </div>

    )
}

export default CurrencySelection;