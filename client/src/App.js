
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/shared/Home'
import Navbar from './components/shared/Navbar'
import Workers from './components/shared/worker/Workers'

const App = () => {
  return (
    <div className="App">
    <h1>APP!</h1>


    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<Workers />} />
    </Routes>
    </div>



  );
}

export default App;
