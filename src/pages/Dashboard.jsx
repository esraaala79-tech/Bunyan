import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from"../components/Dashborad/Sidebar/Sidebar";
import Developer from "./Developer";
import Projects from "./Projects";
import StatusPage from "./StatusPage";
import Website from "./Website";
import Users from "./Users";


import Chat from "./Chat";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard"
function Dashboard() {
  const [isDraft, setIsDraft] = useState(false);
  
  return (
    <>
      <Navbar adminName="Esraa" />
      <div className="d-flex ">
      <Sidebar isDraft={isDraft}/>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<StatusPage/>}/>
          
           <Route path="/users" element={<Users setIsDraft={setIsDraft}/>} >
        {/* First Child */}
    <Route index element ={<TableDashboard name="Users"/>} />
        {/* Second Child */}
        <Route path="add" element = {<FormDashboard/>} />
           </Route>



    <Route path= "/developer" element= {<Developer/>} >
     {/* First child */}
 <Route index element = {<TableDashboard name="Developer" />} />
     {/* Second child */}
     <Route path="add" element = {<FormDashboard/>} />


    </Route>


    <Route path= "/projects" element= {<Projects/>} >
  {/* First child */}
  <Route index element ={<TableDashboard name="Projects Managment" />} />
  {/* Second child */}
  <Route path = "add" element = {<FormDashboard/>} />
          </Route>
       
          <Route path= "/website" element= {<Website/>} />
          <Route path= "/chat" element= {<Chat/>} />



        </Routes>
      
        </main> 
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
