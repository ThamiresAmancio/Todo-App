import { useState } from 'react';
import NewBoxForm from './NewTodoForm';
import Todo from './Todo'


function TodoList () {


    const getLocalTask =  () => {
        let task = localStorage.getItem('TAREFAS');
   
        if(task){
            return JSON.parse(localStorage.getItem('TAREFAS')) 
        }else{
            return[]
        }
    }

    const [itens, setItens] = useState(getLocalTask());
    
    localStorage.setItem('TAREFAS',JSON.stringify(itens))

   

    function itensTaks(tarefa){
        if (!tarefa.text || /^\s*$/.test(tarefa.text)) {
            return;
        }
        setItens([tarefa, ...itens])
    }

    
    const updateTodo = (taskId, newValue) => {
        const editar = itens.map(item => {
            if(item.id === taskId){
               const editTasks = {
                   id : taskId,
                  text: newValue
               }
               return editTasks
            }
            return item
        })
        setItens(editar);
    };

    
    function removeTodo (id) {
        const newList = itens.filter(item => item.id !== id)
        setItens(newList)
    }

    function check (id) {
        const updateTodos = itens.map(tarefa => {
            if(tarefa.id === id){
                tarefa.complete = !tarefa.complete
            }
            return tarefa
        })
        
        setItens(updateTodos)
    }

    return(
        <>
        <div className="titulo">
            <h1>To do list</h1>
            <NewBoxForm onSubmit={itensTaks} itens={itens}/> 
        </div>
        
        <div className="container">
            
            <Todo tasks={itens} removeTodo={removeTodo} updateTodo={updateTodo} check={check} />
        </div>
        </>
    );
}

export default TodoList;