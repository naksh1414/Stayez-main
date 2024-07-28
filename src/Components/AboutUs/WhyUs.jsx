import ChooseUsCard from "../Cards/ChooseUsCard";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
const WhyUs = () => {
  return (
    <main>
      <div className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-white font-semibold text-[2.2rem] md:text-[3rem]">
          <span className="text-[#03A9F4]">Why Choose</span> Us ?
        </h1>
        <div className="flex flex-col md:flex-row w-full items-center space-y-5 md:space-y-0 justify-around md:px-10 mt-20">
          <ChooseUsCard
            icon={
              <MdCheckCircleOutline className="text-[#03A9F4] h-20 w-20"></MdCheckCircleOutline>
            }
            data={"Verified results for your preferences"}
          />
          <ChooseUsCard
            icon={
              <FaHandshakeAngle className="text-[#03A9F4] h-20 w-20"></FaHandshakeAngle>
            }
            data={"Trusted partner of 50+ hostels"}
          />
          <ChooseUsCard
            icon={<IoPeople className="text-[#03A9F4] h-20 w-20"></IoPeople>}
            data={"500+ students connected with us"}
          />
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
