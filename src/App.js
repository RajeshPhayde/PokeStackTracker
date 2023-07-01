import Login from './Component/Login';
import Main from './Component/Main';
import Protect from './Component/Protect';
import Signup from './Component/Signup';
import './Component/Style.css'
import {Route, BrowserRouter, Routes, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main' element={ <Protect Child={Main}/>  }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
