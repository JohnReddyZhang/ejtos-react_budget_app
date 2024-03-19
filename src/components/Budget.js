import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { maxBudgetAllowed, budget, totalExpenses, dispatch, currency } = useContext(AppContext);
    const [inputFieldValue, setInputFieldValue ] = useState(budget);

    const handleBlur = (event) => {
        let newBudget = event.target.value;
        if (newBudget < totalExpenses) {
            alert(`You cannot reduce the budget value lower than the spending ${totalExpenses}`)
            newBudget = totalExpenses;
        } else if (newBudget > maxBudgetAllowed) {
            alert(`You cannot set the budget higher than ${currency} ${maxBudgetAllowed}`)
            newBudget = maxBudgetAllowed
        }
        setInputFieldValue(newBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }

    const handleBudgetChange = (event) => {
        setInputFieldValue(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={inputFieldValue} onChange={handleBudgetChange} onBlur={handleBlur}></input>
        </div>
    );
}

export default Budget;