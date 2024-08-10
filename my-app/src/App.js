
import './App.css';
import {Home} from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from './Album';
import Show from './Show';

function App() {
  return (
    
    <BrowserRouter>
     <Routes>
   <Route path='/' element= {<Home/>} />
   <Route path='/contact' element= {<Show/>} />
    
    
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
