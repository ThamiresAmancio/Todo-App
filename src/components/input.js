import { useState } from 'react/cjs/react.development';
import './newboxform.css'
import { IconSave } from './style';


function Input ({onSubmit,edit}) {
    const [input,setInput] = useState(edit.title);

    function handleChange (event) {
        const task = event.target.value
        setInput(task);
    }

    return(

        <form>
            <div className="forms-edit">
            <input value={input}  onChange={handleChange} id="tarefa" type="text" placeholder="Edite uma tarefa..."/>
            <IconSave onClick={()=>{
                onSubmit(input)
            }} />
            </div>
        </form>
        
    )
}

export default Input;