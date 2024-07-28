import { NavLink } from "react-router-dom";

const Button = ({ data, path }) => {
  return (
    <NavLink to={path}>
      <button className="bg-[#00A1FF] font-semibold text-white rounded-[10px] py-3 px-8">
        {data}
      </button>
    </NavLink>
  );
};

export default Button;

export const Button2 = ({ data, onClick, icon, path }) => {
  return (
    <NavLink to={path}>
      <button
        onClick={onClick}
        className="bg-[#00A1FF] font-semibold text-white rounded-[10px] py-3 px-5 flex flex-row justify-center items-center mx-2"
      >
        {icon}
        {data}
      </button>
    </NavLink>
  );
};

export const Button3 = ({ data, path }) => {
  return (
    <NavLink to={path}>
      <button className="bg-[#00A1FF] font-semibold text-black rounded-[10px] py-3 px-4 md:px-10">
        {data}
      </button>
    </NavLink>
  );
};
