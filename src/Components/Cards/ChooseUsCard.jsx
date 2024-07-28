// import React from "react";

const ChooseUsCard = ({ icon, data }) => {
  return (
    <div className="border-2 border-[#03A9F4] h-[300px] w-[300px] flex flex-col justify-center items-center">
      {icon}
      <h1 className="text-[white] text-[1.2rem] text-center font-semibold">{data}</h1>
    </div>
  );
};

export default ChooseUsCard;
