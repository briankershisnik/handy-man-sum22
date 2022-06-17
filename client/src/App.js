
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/shared/Home'
import Navbar from './components/shared/Navbar'
import Workers from './components/worker/Workers'

const App = () => {
  return (
    <div className="App">
   


    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<Workers />} />
    </Routes>
    </div>



  );
}

export default App;
