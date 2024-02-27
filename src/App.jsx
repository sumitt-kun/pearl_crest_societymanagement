import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from "./components/Home";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Addevents from "./components/Addevents"
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/db" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='events' element={<Addevents />} />
          </Route>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>  
  )
}

export default App;