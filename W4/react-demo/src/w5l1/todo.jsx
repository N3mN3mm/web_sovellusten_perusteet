import React from 'react'
import {useState} from 'react'
import TodoItem from './TodoItem'
import NewTodo from './NewTodo';

export default function TodoList() {

    // const todos = [
    //   {id: 1, title: 'Lue kirjaa', done: false},
    //   {id: 2, title: 'Tee tehtäviä', done: false},
    //   {id: 3, title: 'Opiskele', done: false}
    // ];

    const [todos, setTodos] = useState([
       {id: 1, title: 'Lue kirjaa', done: false},
       {id: 2, title: 'Tee tehtäviä', done: false},
       {id: 3, title: 'Opiskele', done: false}
    ]);

    const [addModeActive, setAddModeActive] = useState(false);

    function toggleTodo(id) {
        console.log('toggleTodo id:' + id)
        const nextTodos = todos.map((todo) => { 
            if (todo.id === id) { 
            // Palauta uusi todo-olio, jossa done on päinvastainen. 
                todo = {...todo, done: !todo.done}
            } 
        
            return todo; 
        }); 
        
        setTodos(nextTodos); 
    } 

    function deleteTodo(id) { 
        const nextTodos = todos.filter((todo) => todo.id !== id); 
        setTodos(nextTodos); 
    } 

    let output;
    
    if(addModeActive === true){
        output = <NewTodo cancelButton={() => setAddModeActive(false)}/>
    }
    else{
        output =
        <div>
            <button onClick={() => setAddModeActive(true)}>Uusi Tehtävä</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} doneButtonClicked={toggleTodo} deleteClicked={deleteTodo} />
                ))}
            </ul>
        </div>
    }

    return (
        output
  )
}
