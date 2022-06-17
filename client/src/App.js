
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/shared/Home'

const App = () => {
  return (
    <div className="App">
    <h1>APP!</h1>



    <Routes>
      <Route path='/' element={<Home />} />
      
    </Routes>
    </div>



  );
}

export default App;
