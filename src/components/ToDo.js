import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} style={{textDecoration: todo.complete ? 'line-through' : ''}} key={todo.id + todo.task} data-testid="todo" onClick={handleClick} className="todo">
            {todo.task}
        </div>
    );
};

export default ToDo;