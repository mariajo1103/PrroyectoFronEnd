import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Info from '../pages/Info';
import Principal from '../pages/Principal';
import InIslas from '../pages/InIslas';
import Adm from '../pages/Adm';
import Publi from '../pages/Publi';




function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/Register" element={<Register/>}/>
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/" element={<Principal/>}/>
                            <Route path="/Info" element={<Info/>}/>
                            <Route path="/Islas" element={<InIslas/>}/>
                            <Route path="/Admi" element={<Adm/>}/>
                            <Route path="/Publi" element={<Publi/>}/>


                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
