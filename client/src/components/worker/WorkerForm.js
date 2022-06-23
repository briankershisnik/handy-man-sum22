import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const WorkerForm = ({ addWorker, id, first_name, last_name, image, updateWorker, setEdit }) => {

  const [worker, setWorker] = useState({ first_name: '', last_name: '', image: '' })


  useEffect( () => {
  
    if (id) {

      setWorker({ first_name, last_name, image })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
   
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }

    setWorker({ first_name: '', last_name: '', image: ''})
  }


  return (
    <>
      <h1>{id ? "Edit" : "Create" } Worker </h1>
      <Form onSubmit={handleSubmit}>
        {/* <label></label> */}
        
    

        <Form.Group className="mb-3 w-50 m-2">
          <Form.Label>First Name:</Form.Label>
          <Form.Control 
            name='first'
            value={worker.first_name}
            onChange={(e) => setWorker({ ...worker, first_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50 m-2">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control 
            name='last_name'
            value={worker.last_name}
            onChange={(e) => setWorker({ ...worker, last_name: e.target.value })}
            required
          />
        </Form.Group>
 
        <Form.Group className="mb-3 w-50 m-2">
          <Form.Label>Image:</Form.Label>
          <Form.Control 
            name='image'
            value={worker.image}
            onChange={(e) => setWorker({ ...worker, image: e.target.value })}
            required
          />
        </Form.Group>
       <Button variant="primary" type="submit">{id ? "Update" : "Submit" }</Button>
       
      </Form>
    </>
  )
}

export default WorkerForm;