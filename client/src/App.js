import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/shared/Home'
import MainNavbar from './components/shared/MainNavbar'
import Workers from './components/worker/Workers'
import TeamsHome from './components/team/TeamsHome';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <div className="App">
   


    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/teamshome' element={<TeamsHome/>} />
      
    </Routes>
    <Footer/>


    </div>



  );
}

export default App;
