import { useState, useContext } from "react";
import LoginImg from "../../assets/LOgin.png";
import or from "../../assets/or.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";
import axiosInstance from "../../API/axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post(
        "/main/api/token/",
        { username: email, password: password }
        // { withCredentials: true }
      );
      console.log("Server response:", res.data);

      if (res.status === 200) {
        toast.success("Successfully Logged In", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });

        const { access, refresh } = res.data;
        console.log("access", access);
        console.log("refresh", refresh);

        // Verify setting tokens in local storage
        localStorage.setItem("token", access);
        localStorage.setItem("refresh", refresh);

        // Print tokens to verify
        console.log("Stored access token:", localStorage.getItem("token"));
        console.log("Stored refresh token:", localStorage.getItem("refresh"));

        login();
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        if (error.response.status === 400) {
          setError("User doesn't exist. Please register and try again!");
          toast.error("User doesn't exist. Please register and try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else if (error.response.status === 404) {
          setError("Invalid credentials. Please try again!");
          toast.error("Invalid credentials. Please try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        } else {
          setError("An error occurred. Please try again later.");
          toast.error("An error occurred. Please try again later.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        }
      } else {
        setError("Bad Network Error. Try again later.");
        toast.error("Bad network error. Please try again after some time", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (!trimmedEmail || !trimmedPassword) {
      setError("Fields cannot be empty or contain only spaces");
      toast.error("Fields cannot be empty or contain only spaces", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setError("Invalid email format");
      toast.error("Invalid email format", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
      return;
    }

    handleLogin();
  };

  return (
    <main>
      <div className="w-full flex">
        <div className="hidden md:flex md:w-[50%]">
          <img
            className="object-cover w-full h-[900px]"
            src={LoginImg}
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-white mt-10 font-semibold">
            Welcome Back
          </h1>
          <div className="h-[700px] md:w-[400px] flex-col flex mt-5">
            <h1 className="text-[#03A9F4] text-[2.5rem] text-center font-bold mt-5">
              Login
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="text-white font-semibold text-[1.2rem] mt-4">
                * Email
              </label>
              <input
                className="my-2 h-10 bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="StayEz@gmail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required
              />
              <label className="text-white font-semibold text-[1.2rem] mt-4">
                * Password
              </label>
              <div className="relative">
                <input
                  className="my-2 h-10 bg-transparent border-2 text-white rounded-[10px] p-5 placeholder:text-[white] w-full"
                  placeholder="***************"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-white h-6 w-6" />
                  ) : (
                    <AiFillEye className="text-white h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="flex justify-between w-[100%] md:w-[100%]">
                <h1></h1>
                <h2 className="text-[#03A9F4]">Forgot Password ?</h2>
              </div>

              <div className="mt-5 flex flex-col">
                <button
                  type="submit"
                  className="bg-[#03A9F4] text-white rounded-[10px] font-semibold px-8 py-3 mt-5"
                >
                  Login
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <h1 className="text-white text-center mt-4">
                  Don&apos;t Have an Account ?
                  <NavLink to="/register">
                    <button>
                      <span className="text-[#03A9F4]"> Sign Up !</span>
                    </button>
                  </NavLink>
                </h1>
              </div>
            </form>
            <div className="mt-10">
              <img className="md:h-20  md:object-contain" src={or} alt="" />
            </div>
            <div className="mt-10 flex justify-center">
              <button className="text-white flex items-center space-x-3 py-2 px-5 border-2 border-white/40 rounded-2xl">
                <FcGoogle className="h-10 w-16"></FcGoogle> Sign In with Google
                Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
