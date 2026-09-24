import React from 'react'

export default function TodoItem( { todo, doneButtonClicked, deleteClicked } ) {

    const styles = {};

    if(todo.done == true){
        styles.textDecoration = "line-through";
    }

    return (
        <li>
            <span style={ styles }>{todo.title}</span>
            <button onClick={() => doneButtonClicked(todo.id)}>Tehty</button>
            <button>Muokkaa</button>
            <button onClick={() => deleteClicked(todo.id)}>Poista</button>
        </li>
    )

}