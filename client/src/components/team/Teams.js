import { useState, useEffect } from 'react';
import axios from 'axios';
import AllTeam from './AllTeam'



const Teams = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data))
      .catch( err => console.log(err) )
  }, [])

  return(

    <>


	  <h1>Teams</h1>
    <br/>

    <AllTeam workers={workers}/>


    <br/>
    </>
  )

}

export default Teams;