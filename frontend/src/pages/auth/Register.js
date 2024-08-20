import { TiUserAddOutline } from "react-icons/ti";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./auth.css";
import { useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import { validateEmail } from "../../redux/features/auth/authServices";
import { register } from "../../redux/features/auth/authSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [ isLoading, setIsLoading ] = useState(false);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be upto 6 characters");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    if (password !== password2) {
      return toast.error("Password do not match");
    }

    const userData = {
      name,
      email,
      password,
    };
    setIsLoading(true);

    try {
      await dispatch(register(userData));
      toast.success("registration successful")
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth">
      {isLoading && <Loader />}/
      <div className="form-register">
        <div className="--flex-center">
          <TiUserAddOutline size={35} color="blue" />
        </div>

        <h2>Register</h2>

        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="password2"
            required
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />

          <button type="submit" className="--btn --btn-primary --btn-block">
            Register
          </button>
        </form>

        <span className="register">
          <Link to="/">Home</Link>
          <p> &nbsp; Already have an account? &nbsp;</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
