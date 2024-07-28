import ThumbGallery from "../../Components/Carousel/ThumbGallery";
import { PiWhatsappLogoLight } from "react-icons/pi";
// import BasicSwitches from "../../Components/Switch/switch";
import Button from "../../Components/Buttons/Button";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import { FaHandsWash } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdBalcony } from "react-icons/md";
import { CiWifiOn } from "react-icons/ci";
import { LuParkingCircle } from "react-icons/lu";
import { FaSwimmer } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import map from "../../assets/Map.png";
const SpecificFlat = () => {
  const [activeSection, setActiveSection] = useState("description");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const features = [
    {
      icon: <FaHandsWash className="text-[#03A9F4] text-[1.5rem]" />,
      title: "Washroom",
    },
    {
      icon: <TbAirConditioning className="text-[#03A9F4] text-[1.5rem]" />,
      title: "AC",
    },
    {
      icon: <MdBalcony className="text-[#03A9F4] text-[1.5rem]" />,
      title: "Balcony",
    },
    // Add more features here
  ];
  const facilities = [
    {
      icon: <CiWifiOn fontSize={"20px"} />,
      title: "Free WiFi",
      detail: "Available",
    },
    {
      icon: <LuParkingCircle fontSize={"20px"} />,
      title: "Parking",
      detail: "Included",
    },
    {
      icon: <MdCall fontSize={"20px"} />,
      title: "24/7 Support",
      detail: "Available",
    },
    {
      icon: <GiWeightLiftingUp fontSize={"20px"} />,
      title: "Gym",
      detail: "On-Site",
    },
    {
      icon: <FaSwimmer fontSize={"20px"} />,
      title: "Swimming Pool",
      detail: "Available",
    },
    {
      icon: <FaHotel fontSize={"20px"} />,
      title: "Restaurant",
      detail: "On-Site",
    },
    // Add more facilities here
  ];
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-[50%] md:border-r-2 m-10 text-white ">
          <h1 className="font-semibold text-[1.5rem] md:text-[2rem]">
            Boy&apos;s Pg
          </h1>
          <p className=" font-normal  text-[0.8rem] md:text-[1.3rem]">
            {" "}
            At StayEz, we understand the unique needs of students !
          </p>
          <div className="mt-10 w-full md:w-[90%]">
            <ThumbGallery />
          </div>
          <div className="mt-10 md:space-x-4 flex space-x-2">
            <Button data={"View"}></Button>
            {/* <Button data={"Compare"}></Button> */}
          </div>
          <div className="mt-10">
            <h1 className="text-white text-[1.2rem] md:text-[1.5rem] font-semibold">
              Starts From{" "}
            </h1>
            <h1 className="text-[#03A9F4] text-[1.5rem] md:text-[2rem]">
              Rs 1200.00/mo
            </h1>
          </div>
          <div className="mt-10 flex flex-col justify-around text-[1.2rem]  text-black mr-6">
            <div className="flex flex-col md:flex-row justify-around mt-5 rounded-md p-5 space-y-2">
              <button
                className={
                  activeSection === "description"
                    ? "bg-[#03A9F4] text-white px-3 py-2 rounded-md font-semibold"
                    : "font-semibold text-white border-2 px-3 py-2 rounded-md"
                }
                onClick={() => handleSectionChange("description")}
              >
                Description
              </button>
              <button
                className={
                  activeSection === "features"
                    ? "bg-[#03A9F4] text-white px-3 py-2 rounded-md font-semibold"
                    : "font-semibold text-white border-2 px-3 py-2 rounded-md"
                }
                onClick={() => handleSectionChange("features")}
              >
                Features
              </button>
              <button
                className={
                  activeSection === "facilities"
                    ? "bg-[#03A9F4] text-white px-3 py-2 rounded-md font-semibold"
                    : " font-semibold text-white border-2 px-3 py-2 rounded-md"
                }
                onClick={() => handleSectionChange("facilities")}
              >
                Facilities
              </button>
            </div>
            <div className="mt-10 bg-transparent">
              {activeSection === "description" && (
                <div>
                  <h1 className="text-white font-semibold md:px-5 text-[1.5rem] md:text-[2rem]">
                    Description
                  </h1>
                  <p className="text-white md:p-5 text-[1rem]">
                    {/* Add your description content here */}
                    At StayEz, we understand the unique needs of students and
                    have fine-tuned our platform to cater specifically to those
                    requirements. Our mission is to transform your stay into a
                    seamless experience, ensuring comfort and convenience every
                    step of the way.: At StayEz, we understand the unique needs
                    of students and have fine-tuned our platform to cater
                    specifically.
                  </p>
                </div>
              )}
              {activeSection === "features" && (
                <div>
                  <h1 className="text-white font-semibold text-[1.5rem] md:text-[2rem]">
                    Features
                  </h1>
                  <div className="flex flex-col md:flex-row">
                    {" "}
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex w-full mt-10 items-center space-x-4 p-4 bg-gray-800 rounded-lg"
                      >
                        <div className="text-[#03A9F4] text-[1.5rem]">
                          {feature.icon}
                        </div>
                        <div className="text-white">
                          <h2 className="font-semibold">{feature.title}</h2>
                          {feature.detail && <p>{feature.detail}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeSection === "facilities" && (
                <div>
                  <h1 className="text-white font-semibold text-[2rem]">
                    Facilities
                  </h1>
                  <div className="flex flex-col space-y-4 mt-10">
                    {facilities.map((facility, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
                      >
                        <div className="text-[#03A9F4] text-[1.5rem]">
                          {facility.icon}
                        </div>
                        <div className="text-white md:justify-between md:flex w-full">
                          <h2 className="font-semibold">{facility.title}</h2>
                          {facility.detail && <p>{facility.detail}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 md:p-0">
          <div className="flex flex-col items-center border-2 border-[#03A9F4] md:p-10 h-[600px] md:w-[80%] mt-10 rounded-2xl md:ml-20">
            <h1 className="text-[#03A9F4] text-[1.5rem] md:text-[2rem] font-semibold  mt-10">
              Schedule a Visit
            </h1>
            <div className="flex flex-col items-center mt-10 space-y-5 ">
              <input
                className="h-10 w-[250px] md:w-[400px] p-5 placeholder:text-[#03A9F4]"
                type="text"
                placeholder="Name"
              />
              <input
                className="h-10 w-[250px] md:w-[400px] p-5 placeholder:text-[#03A9F4]"
                type="number"
                placeholder="+91 9900990099"
              />
              <div className="flex flex-col w-[250px] md:w-[400px]">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex items-center">
                    <PiWhatsappLogoLight className="text-green-300 h-10 w-10"></PiWhatsappLogoLight>
                    <h1 className="text-white text-[0.9rem] font-semibold">
                      Get Updates over Whatsapp{" "}
                    </h1>
                  </div>
                  {/* <BasicSwitches></BasicSwitches> */}
                </div>

                <div className="flex mt-10 space-x-2">
                  <input className="h-10 w-10" type="checkbox" />
                  <h1 className="text-white">
                    I have read and agreed to the{" "}
                    <span className="text-[#03A9F4]">terms and conditions</span>{" "}
                    and <span>privacy policy</span> and hereby confirm to
                    proceed
                  </h1>
                </div>

                <button className="text-white bg-[#03A9F4] py-2 px-7 rounded-full mt-10">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 rounded-xl hidden md:flex overflow-hidden justify-center items-center h-[600px] md:w-[80%] md:ml-20">
            <img className="object-cover h-full" src={map} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecificFlat;
