import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
// console.log("BACKEND_URL", BACKEND_URL)
const API_URL = `${BACKEND_URL}/api/users/`


// Validate Email

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

// Register User
const register = async (userData) => {
    try {
        const response = await axios.post(API_URL + "register", userData,
            {withCredentials: true,} // will send in cookies
        );
        return response.data      
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
            toast.toString();
        toast.error(message)
    }
    
}; 

// Login User
const login = async (userData) => {
    try {
        const response = await axios.post(API_URL + "login", userData,
            {withCredentials: true,}
        );
        
        return response.data    
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
            toast.toString();
        toast.error(message)
    }
    
};

// Logout 
const logout = async () => {
    try {
        const response = await axios.get(API_URL + "logout");
        return response.data;    
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
            toast.toString();
        toast.error(message)
    }
    
}

const authServices = {
    register,
    login,
    logout
}

export default authServices;