import { FaHeart } from "react-icons/fa";
import LOgo from "../../assets/logo.png";
import Button from "../Buttons/Button";
import { Button2 } from "../Buttons/Button";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import NavDrawer from "../../Components/Drawer/NavDrawer";
import KnowMoreModal from "../Modal/KnowMoreModal";
// import Request from "../Modal/Request";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
// import { IoIosCall } from "react-icons/io";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  console.log(isLoggedIn);
  const [KnowMoreModalIsOpen, setKnowMoreModalIsOpen] = useState(false);
  // const [requestModalIsOpen, setRequestModalIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const openModal = () => setKnowMoreModalIsOpen(true);
  const closeModal = () => setKnowMoreModalIsOpen(false);
  // const openRequestModal = () => setRequestModalIsOpen(true);
  // const closeRequestModal = () => setRequestModalIsOpen(false);

  const handleLogout = () => {
    logout();
    // alert("Logged out successfully");
  };

  return (
    <nav className="bg-none border-white border-b-[1.2px]">
      <div className="!z-10 flex flex-row justify-between bg-none p-5">
        {/* StayEz logo  */}
        <NavLink to={"/"}>
          <img className="h-10 md:h-20 bg-none" src={LOgo} alt="Logo" />
        </NavLink>
        {/* Navigation links for Mobiles */}
        <div className="flex md:hidden text-white !z-10">
          <NavDrawer className="text-white h-8 w-8" />
        </div>
        {/* Navigation links for Tablets and Laptops*/}
        <div className="bg-none hidden md:[text-1rem] lg:text-[1.2rem] md:flex flex-row justify-center items-center space-x-10 pr-10">
          {/* <NavLink to={"/aboutus"}> */}
          <button
            onClick={openModal}
            className="text-white font-semibold bg-none flex flex-row justify-center items-center"
          >
            Know More
            <MdKeyboardArrowDown></MdKeyboardArrowDown>
          </button>
          <KnowMoreModal
            isOpen={KnowMoreModalIsOpen}
            onRequestClose={closeModal}
          />
          {/* <Request
            isOpen={requestModalIsOpen}
            onRequestClose={closeRequestModal}
          /> */}
          {/* </NavLink> */}

          <NavLink to={"/wishlist"}>
            <h1 className="bg-none text-white font-semibold flex items-center">
              <FaHeart className="text-white bg-none" />
              {/* Wishlist */}
            </h1>
          </NavLink>
          {/* <Button2
            onClick={openRequestModal}
            data={"Request a CallBack"}
            icon={<IoIosCall className="mr-3"></IoIosCall>}
          ></Button2> */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white rounded-[10px] font-semibold px-8 py-3"
            >
              Logout
            </button>
          ) : (
            <Button data={"Get Started"} path={"/login"} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
