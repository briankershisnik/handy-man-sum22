import Worker from './Worker';

const AllWorker = ({ workers, updateWorker, deleteWorker }) => (
  <>
    <h1>All Workers</h1>
    
    {
      workers.map( w => 
   
        <Worker 
          key={w.id}
  
          {...w} 
          updateWorker={updateWorker} 
          deleteWorker={deleteWorker} 
        />
      )
    }
  </>
)

export default AllWorker;