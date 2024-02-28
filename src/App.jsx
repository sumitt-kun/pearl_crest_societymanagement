import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from "./components/Home";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Addevents from "./components/Addevents"
import AddPaymentVoucher from "./components/AddPaymentVoucher";
import AddComplaints from "./components/AddComplaints";
import FacilityReservation from "./components/FacilityReservation";
import Societypayments from "./components/Societypayments";
import UserProfile from "./components/UserProfile";
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/db" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='events' element={<Addevents />} />
            <Route path='addpv' element = {<AddPaymentVoucher />} />
            <Route path='addcomplain' element = {<AddComplaints />}></Route>
            <Route path='reserve' element={<FacilityReservation />}></Route>
            <Route path='payments' element={<Societypayments />}></Route>
            <Route path='profile' element={<UserProfile />}></Route>
          </Route>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>  
  )
}

export default App;