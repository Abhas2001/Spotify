
import './App.css';
import {Home} from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from './Album';
import Show from './Show';
import Body from './Body';

function App() {
  return (
  
    
   <Routes>
     
     <Route path='/' element={<Home/>}/>
     <Route path='/albums' element={<Home/>} />
     <Route path='/body' element={<Body/>} />
     </Routes>
 

  );
}

export default App;
