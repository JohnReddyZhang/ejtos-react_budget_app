import React, { useContext } from 'react';
import { TiMinus, TiPlus, TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({id, name, cost}) => {
    const { dispatch, currency } = useContext(AppContext);
    
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

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type:"RED_EXPENSE",
            payload: expense
        })
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{currency} {cost}</td>
            <td><TiPlus onClick={event => increaseAllocation(name)}>+</TiPlus></td>
            <td><TiMinus onClick={event => decreaseAllocation(name)}>+</TiMinus></td>
            <td><TiDelete size='1.5em' onClick={handelDeleteExpense}></TiDelete></td>
        </tr>
    )

}

export default ExpenseItem;