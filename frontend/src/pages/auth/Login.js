import { BiLogIn } from "react-icons/bi";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../redux/features/auth/authServices";
import "./auth.css"
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
const {email, password} = formData;

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
};

const loginUser = async (e) => {
    e.preventDefault();

    if(!email || !password){
        return toast.error("All fields are required");
    }

    if(!validateEmail(email)){
        return toast.error("Please enter a valid email");
    }

    const userData = {
        email,
        password
    }
    setIsLoading(true)

    try {
        await dispatch(login(userData))
        navigate("/dashboard")
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
    }
    }

  return (
    <div className='auth'>
           {isLoading && <Loader/>}
            <div className='form-login'>
             <div className="--flex-center">
              <BiLogIn size={35} color="blue"/>
             </div>

             <h2>login</h2>

             <form onSubmit={loginUser}>
                <input
                type='email'
                placeholder='Email'
                required
                name='email'
                value={email}
                onChange={handleInputChange}
                />

                <input
                type='password'
                placeholder='Password'
                required
                name='password'
                value={password}
                onChange={handleInputChange}
                />
                
                <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
             </form>

             <span className="register">
                <Link to="/" >Home</Link>
                <p> &nbsp; Don't have an account? &nbsp;</p>
                <Link to="/register">Register</Link>
             </span>
            </div>
    </div>
  )
}

export default Login