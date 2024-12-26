import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Stoneservices from './Stonecrusher/Stoneservices';
import Aggregate from './Aggregate';
import Aggregate10mm from './Aggregate10mm';
import Aggregate20mm from './Aggregate20mm'
import Aggregate30mm from './Aggregate30mm'
import Washedsand from './Stonecrusher/Washedsand'
import Artificialsand from './Stonecrusher/Artificialsand'

// import Apidata from "./Apidata";
// import Regformdemo from "./Regformdemo";
// import './Stonecrusher/Services.css'

function App() {
  return (

   
    <>
   
  

      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Stoneservices />} />
      <Route exact path='/Aggregate' element={<Aggregate/>}/>
      <Route path="/Aggregate10mm" element={<Aggregate10mm />} />
      <Route path="/Aggregate20mm" element={<Aggregate20mm/>} />
      <Route path="/Aggregate30mm" element={<Aggregate30mm />} />
      <Route path="/Washedsand" element={<Washedsand />} />
      <Route path="/Artificialsand" element={<Artificialsand />} />
     </Routes>
      </BrowserRouter>  
      {/* <Apidata/>
      <Regformdemo/> */}
   </>
  );
}

export default App;