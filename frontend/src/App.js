import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import axios from "axios";
import Home from "./pages/home/Home.js"
import Register from "./pages/auth/Register.js";
import Login from "./pages/auth/Login.js";
import Dashboard from "./pages/dashboard/Dashboard.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from "./pages/dashboard/inventoryModule/itemSetup/items/Items.js";

// const backend = process.env.REACT_APP_BACKEND_SERVER_URL
// console.log("backend", backend)
axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/items" element={<Items/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
