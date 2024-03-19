import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelection = () => {
    const { availableCurrencies, dispatch } = useContext(AppContext);
    const [currencyName, setCurrencyName] = useState(availableCurrencies[0].name)

    const handleClick = (symbol) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol
        })
        setCurrencyName(availableCurrencies.filter((c) => c.symbol === symbol)[0].name)

    }
    return (
        <div className="dropdown">
            <button className="btn btn-success dropdown-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currencyName})
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