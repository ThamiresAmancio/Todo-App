
import { useState } from 'react';
import Input from './input';
import './newboxform.css'
import { IconEdit, IconRemove } from './style';


function Todo ({tasks, removeTodo, updateTodo, check}) {

    const [edit,setEdit] = useState({  
        id:null,
        text:''
    })

    const submitUpdate = text => {
        updateTodo(edit.id, text);
        setEdit({
          id: null,
          text: ''
        });
    };

    
  
    return(
           <>
                {
                tasks.map((task) => {
 
                    return <div className="tasks" key={task.id}>
                    {edit.id === task.id ? <Input edit={edit} onSubmit={submitUpdate}/> : <p className={` p ${task.complete ?  'risckText'  : '' }`}>{task.text}</p> } 
                    <IconRemove onClick={() => removeTodo(task.id)}/>
                    <IconEdit onClick={ () => setEdit({ id: task.id, title: task.text })}/>
                    <input  className="checkbox" type="checkbox" onClick={() => check(task.id)}/>
                </div> 
                })
            }   
           </>
    )
}



export default Todo;