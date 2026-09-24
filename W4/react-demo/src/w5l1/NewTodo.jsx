import React from 'react'

export default function NewTodo({cancelButton}) {
  return (
    <div>
        <h1>Uusi tehtävä</h1>
        <label>
            <input type="text"/>
        </label>
        <button onClick={cancelButton}>Peru</button>
        <button>Tallenna</button>
    </div>
  )
}
