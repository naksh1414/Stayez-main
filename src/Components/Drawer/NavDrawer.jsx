import { useState } from "react";
import { Button, Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./style.css";
const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <IoMenu />
      </Button>
      <Drawer
        className="text-[1.4rem]"
        title="StayEz"
        onClose={onClose}
        open={open}
      >
        <NavLink to={"/"} onClick={handleLinkClick}>
          {" "}
          <h1>Home</h1>
        </NavLink>
        <NavLink to={"/aboutus"} onClick={handleLinkClick}>
          <h1>Know More</h1>
        </NavLink>
        <NavLink to={"/flats"} onClick={handleLinkClick}>
          <h1>Flats</h1>
        </NavLink>
        <NavLink to={"/login"} onClick={handleLinkClick}>
          <h1 className="text-[#03A9F4]">Log In</h1>
        </NavLink>
      </Drawer>
    </>
  );
};
export default NavDrawer;
