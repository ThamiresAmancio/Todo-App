
import { Fragment, useState } from 'react/cjs/react.development';

import uuid from 'react-uuid'
import './newboxform.css'
import { IconAdd } from './style';


function NewBoxForm ({onSubmit}) {

    const [tarefa,setTarefa] = useState('');

    function handleChange (event) {
        setTarefa(event.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
          id: uuid(),
          text: tarefa
        });
        setTarefa('');
      };

    return(
        <Fragment>
        
        <form onSubmit={handleSubmit}>
            <div className="forms">
                <input  id="tarefa" type="text"  value={tarefa} onChange={handleChange}/>
                <IconAdd onClick={handleSubmit}/>
            </div>
        </form>
        </Fragment>
    )
}

export default NewBoxForm;