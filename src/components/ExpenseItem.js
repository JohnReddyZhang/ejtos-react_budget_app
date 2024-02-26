import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({id, name, cost}) => {
    const { dispatch } = useContext(AppContext);
    
    const handelDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
        })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type:"ADD_EXPENSE",
            payload: expense
        })
    }

    return(
        <tr>
            <td>{name}</td>
            <td>${cost}</td>
            <td><button onClick={event => increaseAllocation(name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handelDeleteExpense}></TiDelete></td>
        </tr>
    )

}

export default ExpenseItem;