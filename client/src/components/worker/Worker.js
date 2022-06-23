import { useState } from 'react'
import WorkerForm from './WorkerForm';


const Worker = ({ id, first_name, last_name, image, updateWorker, deleteWorker }) => {

  const [editing, setEdit] = useState(false)

  return (
    <>  
      {
        editing ?
        <>
        
          <WorkerForm 
        
            id={id} 
            first_name={first_name}
            last_name={last_name}
            image={image}
            updateWorker={updateWorker}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
     
          <div>
            <h3>Name: {first_name } {last_name}</h3>
        
            <h3>image: {image}</h3>
          
         
            <button onClick={() => setEdit(true)}>Edit</button>
   
            <button onClick={() => deleteWorker(id)}>Delete</button>
          
            
            <hr />
          </div>
          <br />
        </>
      }
    </>
  )
}

export default Worker;