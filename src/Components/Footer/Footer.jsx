import { useState } from "react";
import Logo from "../../assets/FooterLogo.png";
import BtnImg from "../../assets/Play stote and app store icon for website .png";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    // footer for laptops and bigger screens
    <>
      <main className="bg-[#152038] flex-col hidden md:flex justify-center items-center w-full h-[300px] px-3">
        {/* <img className="object-cover w-full" src={FImg} alt="" /> */}
        <div className="text-white text-[1.1rem] font-semibold flex justify-around w-[80%] lg:mt-5">
          <NavLink to={"/"}>
            <h1>Home</h1>
          </NavLink>
          <NavLink to={"/aboutus"}>
            <h1>About</h1>
          </NavLink>
          <NavLink to={"/"}>
            <h1>Company</h1>
          </NavLink>
          <NavLink to={"/flats"}>
            <h1>Services</h1>
          </NavLink>
          <NavLink to={"/"}>
            <h1>Contact Us</h1>
          </NavLink>
        </div>
        <div className="mt-5 flex flex-row items-center justify-between w-full">
          <div className="pl-5">
            <img className="md:h-[100px] lg:h-[140px] md:w-[120px] lg:w-[170px]" src={Logo} alt="" />
          </div>
          <div className="mt-10">
            <img className="md:h-18 md:w-[80%] w-full md:ml-5" src={BtnImg} alt="" />
          </div>
          <div className="text-white font-semibold text-[1rem] mt-[-30px] pr-5 items-center justify-center flex flex-col">
            <h1 className="text-[1.1rem]">Subscribe For Updates </h1>
            <div className="mt-2 flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/30 md:w-[150px] lg:w-[220px] placeholder:text-white px-5 py-3 rounded-tl-2xl rounded-bl-2xl"
                placeholder="Your Mail"
              />
              <button className="text-[#03A9F4] bg-white px-5 py-3 rounded-tr-2xl rounded-br-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full mt-5 pb-2 flex items-center justify-between">
          <div className="flex justify-between font-semibold space-x-3 w-[200px] mt-3 text-white">
            <h1>Terms</h1>
            <h1>Conditions</h1>
            <h1>Privacy</h1>
          </div>
          <div>
            <p className="text-white mt-3">
              @ 2024 StayEz , ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="text-white flex space-x-8 mt-3">
            <FaTwitter className="h-6 w-6"></FaTwitter>
            <FaYoutube className="h-6 w-6"></FaYoutube>
            <FaFacebook className="h-6 w-6"></FaFacebook>
            <FaInstagram className="h-6 w-6"></FaInstagram>
          </div>
        </div>
      </main>
      <main className="flex flex-col md:hidden bg-[#152038] h-screen w-full">
        <div className="pl-5">
          <img className="h-[140px] w-[170px]" src={Logo} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-white text-[1.1rem] font-semibold flex flex-col justify-around w-[80%] mt-5 pl-8 space-y-4">
            <NavLink to={"/"}>
              <h1>Home</h1>
            </NavLink>
            <NavLink to={"/aboutus"}>
              <h1>About</h1>
            </NavLink>
            <NavLink to={"/"}>
              <h1>Company</h1>
            </NavLink>
            <NavLink to={"/flats"}>
              <h1>Services</h1>
            </NavLink>
            <NavLink to={"/"}>
              <h1>Contact Us</h1>
            </NavLink>
          </div>
          <div className="text-white text-[1.1rem] mt-[-65px] font-semibold flex flex-col justify-around w-[80%] pl-8 space-y-4">
            <NavLink to={"/"}>
              <h1>Terms</h1>
            </NavLink>
            <NavLink to={"/"}>
              <h1>Privacy</h1>
            </NavLink>
            <NavLink to={"/"}>
              <h1>Conditions</h1>
            </NavLink>
          </div>
        </div>
        <div className="mt-10 p-4">
          <img src={BtnImg} alt="" />
        </div>
        <div className="text-white font-semibold text-[1rem] mt-4 items-center justify-center flex flex-col">
          <h1 className="text-[1rem]">Subscribe For Updates </h1>
          <div className="mt-2 px-4 flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/30 text-[1rem] w-[150px] placeholder:text-white px-3 py-2 rounded-tl-2xl rounded-bl-2xl"
              placeholder="Your Mail"
            />
            <button className="text-[#03A9F4] bg-white px-3 py-2 rounded-tr-2xl rounded-br-2xl">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-white flex justify-center space-x-8 mt-10">
          <FaTwitter className="h-6 w-6"></FaTwitter>
          <FaYoutube className="h-6 w-6"></FaYoutube>
          <FaFacebook className="h-6 w-6"></FaFacebook>
          <FaInstagram className="h-6 w-6"></FaInstagram>
        </div>
        <div>
          <p className="text-white text-[0.8rem] text-center mt-3">@ 2024 StayEz , ALL RIGHTS RESERVED</p>
        </div>
      </main>
    </>
  );
};

export default Footer;
