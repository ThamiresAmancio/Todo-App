import { useState } from 'react/cjs/react.development';
import './newboxform.css'
import { FormsEdit, IconSave } from './style';


function Input({ onSubmit, edit }) {
    const [input, setInput] = useState(edit.title);

    function handleChange(event) {
        const task = event.target.value
        setInput(task);
    }

    return (

        <form>
            <FormsEdit>
                <input value={input} onChange={handleChange} id="tarefa" type="text" placeholder="Edite uma tarefa..." />
                <IconSave onClick={() => {
                    onSubmit(input)
                }} />
            </FormsEdit>
        </form>

    )
}

export default Input;