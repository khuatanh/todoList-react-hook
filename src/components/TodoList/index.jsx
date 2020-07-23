import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import PropTypes from 'prop-types';
import './TodoList.scss';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClickon: PropTypes.func, 
  onSubmit: PropTypes.func, 
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
    onSubmit: null
}

function TodoList(props) {
    const {todos, onTodoClick, onSubmit} = props;
    const [value, setvalue]= useState('')

    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    };
    function handleValueChange(e){
        setvalue(e.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
            if(!onSubmit) return;
            const formValue= {
                title: value,
            }
            
            onSubmit(formValue);
            setvalue('');     
    }
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup className='from-input' >
                    <Input type="text"  placeholder="Moi ban nhap..." 
                    value={value} 
                    onChange={handleValueChange}
                    
                     />
                    <Button color="success" >Submit</Button>
                </FormGroup>
            
                <div>
                    <ul className="todoItem">
                        {
                            todos.map((todo, index )=> (
                                
                                <li key={index} onClick={() =>handleClick(todo)}
                                >
                                    {todo.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
             </Form>    
            
        );
}

export default TodoList;