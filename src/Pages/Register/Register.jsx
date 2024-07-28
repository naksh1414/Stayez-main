import { useState } from "react";
import LoginImg from "../../assets/LOgin.png";
import or from "../../assets/or.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
import axiosInstance from "../../API/axiosConfig";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  // axios.defaults.withCredentials = true;

  const handleRegister = async () => {
    const res = await axiosInstance.post("/main/user-register/", {
      first_name: fname,
      last_name: lname,
      email: email,
      contact: phone,
      password: password,
    });
    if (res.data.message === "User Registered Succesfully") {
      alert("User registered successfully.");
      navigate("/login");
    } else {
      alert("Bad network! Backend chutiya hai.");
    }
  };

  return (
    <main>
      <div className="w-full flex">
        <div className="hidden md:flex md:w-[50%]">
          <img className="object-cover w-full h-full" src={LoginImg} alt="" />
        </div>
        <div className="flex w-full md:w-[50%] items-center flex-col">
          <h1 className="text-[#03A9F4] font-semibold text-[1.8rem] md:text-[3rem] mt-10">
            Create an Account
          </h1>
          {/* <h3 className="text-[#03A9F4] text-[1.4rem] md:text-[2rem] md:mt-10">Sign Up</h3> */}
          {/* <h3 className="text-white/70 text-[1rem] md:text-[1.2rem] mt-2">
            Please Create Your Account !
          </h3> */}
          <div className="flex flex-col w-[60%]">
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              *First Name
            </label>
            <input
              className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="Full Name"
              type="text"
              required
              value={fname}
              onChange={(e) => setFName(e.target.value)}
              aria-required
            />
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              *Last Name
            </label>
            <input
              className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="Full Name"
              type="text"
              required
              value={lname}
              onChange={(e) => setLName(e.target.value)}
              aria-required
            />
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              * Phone Number{" "}
            </label>

            <input
              className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="+91 90000009909"
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              * Email{" "}
            </label>
            <input
              className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="StayEz@gmail.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              * Password{" "}
            </label>
            <input
              className="my-2 h-10  bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="************"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-white font-semibold text-[1.2rem] mt-4">
              * Confirm Password{" "}
            </label>
            <input
              className="my-2 h-10  bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white]"
              placeholder="************"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-[58%] md:w-[60%]">
            <h1></h1>
            <h2 className="text-[#03A9F4]">Forgot Password ?</h2>
          </div>
          <div className="mt-5 flex flex-col">
            <button
              onClick={handleRegister}
              className="bg-[#03A9F4] text-white rounded-[10px] font-semibold px-8 py-3 mt-5"
            >
              Register
            </button>
            <h1 className="text-white mt-4">
              Already Have an Account ?
              <NavLink to="/login">
                <button>
                  <span className="text-[#03A9F4]"> Log In !</span>
                </button>
              </NavLink>
            </h1>
          </div>
          <div className="mt-3 mb-5 md:mb-0 w-[60%]">
            <img className="md:h-20  md:object-contain" src={or} alt="" />
          </div>
          <div className="mb-5 md:mb-4">
            <button className="text-white flex items-center space-x-3 py-2 px-5 border-2 border-white/40 rounded-2xl">
              <FcGoogle className="md:h-10 md:w-16"></FcGoogle> Sign Up with
              Google Account
            </button>
          </div>
        </div>

        {/* <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[5rem] text-white mt-10 font-semibold">
            Welcome To StayEz
          </h1>
          <div className="h-[700px] md:w-[400px] flex-col items-center flex mt-10">
            <h1 className="text-[#03A9F4] text-[2rem] font-bold mt-5">Login</h1>
            <h2 className="text-white mt-4">Please enter your Details</h2>
            <input
              className="my-5 h-10 rounded-[10px] p-5 placeholder:text-[black]"
              placeholder="☻ Enter Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="my-5 h-10 rounded-[10px] p-5 placeholder:text-[black]"
              placeholder="✉ Enter Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="my-5 h-10 rounded-[10px] p-5 placeholder:text-[black]"
              placeholder="🔒 Enter password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between w-[78%] md:w-[80%]">
              <h1></h1>
              <h2 className="text-[#03A9F4]">Forgot Password ?</h2>
            </div>

            <div className="mt-5 flex flex-col">
              <button className="bg-[#03A9F4] text-white rounded-[10px] font-semibold px-8 py-3 mt-5">
                Login
              </button>
              <h1 className="text-white mt-4">
                Don&apos;t Have an Account ?
                <NavLink to="/register">
                  <button>
                    <span className="text-[#03A9F4]"> Sign Up !</span>
                  </button>
                </NavLink>
              </h1>
            </div>
            <div className="mt-10">
              <img className="md:h-20  md:object-contain" src={or} alt="" />
            </div>
            <div className="mt-10">
              <button className="text-white flex items-center space-x-3 py-2 px-5 border-2 border-white/40 rounded-2xl">
                <FcGoogle className="h-10 w-16"></FcGoogle> Sign In with Google
                Account
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Register;
