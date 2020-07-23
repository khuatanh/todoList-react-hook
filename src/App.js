import React, { useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox/index';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { title: 'Thức dậy lúc 6h'},
    { title: 'Đi vệ sinh cá nhân'},
    { title: 'Đi ăn sáng và đi làm'},
  ]);
  function handleTodoList(todo){
    const index= todoList.indexOf(todo);
    if(index <0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleFormValueSubmit(formValue){
    const newtodo= {
      ...formValue
    }
    const newTodoList= [...todoList];
    newTodoList.push(newtodo);
    setTodoList(newTodoList);
    
  }
  return (
    <div className="app">
      <h2>Todolist on everday</h2>
      <input type='checkbox' className='input-check-box' id='check'/>
      <div className='todoList' for='check'>
          <TodoList onSubmit={handleFormValueSubmit} todos={todoList} onTodoClick={handleTodoList}/>
      </div>
    </div>
  );
}

export default App;
