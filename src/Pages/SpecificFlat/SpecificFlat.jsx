import ThumbGallery from "../../Components/Carousel/ThumbGallery";
import { PiWhatsappLogoLight } from "react-icons/pi";
import BasicSwitches from "../../Components/Switch/switch";
import Button from "../../Components/Buttons/Button";
import { useState, useEffect } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";
import { log } from "react-modal/lib/helpers/ariaAppHider";

import { IoMdPerson } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const API_URL = "https://10.21.81.18:8000";

const SpecificFlat = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/properties/property/list/${params.id}`
        );
        setData(data);
        console.log(data);
      } catch (e) {
        console.log("Error fetching data", e);
      }
    };

    fetchdata();
  }, []);

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
        <div className=" md:w-[65%] w-full m-10 text-white h-fit ">
          <h1 className="font-semibold text-[1.5rem] md:text-[2rem]">
            {data.property_name}
          </h1>
          <p className=" font-normal  text-[0.8rem] md:text-[1.3rem] font-serif text-gray-300 ">
            {" "}
            {data.address1}, {data.address2},{data.city} , {data.state}
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
              Rs {data.starting_price}/mo
            </h1>
          </div>
          <div></div>

          <div className="w-full h-[500px] p-8 mt-8 flex overflow-x-auto gap-8 scrollbar">
            {data.room_detail?.map((room) => {
              return (
                <Card
                  seater={room.seater}
                  price={room.price}
                  value1={room.furnished}
                  value2={room.washroom}
                  value3={room.kitchen}
                  img={room.room_images[0]}
                />
              );
            })}
          </div>
          <div>
            <h1 className="text-white font-semibold text-[1.5rem] md:text-[2rem] mt-4">
              Features
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill , 100px)",
                gap: "10px",
              }}
            >
              {" "}
              {data.ppty_amenity?.map((feature, index) => (
                <div
                  key={index}
                  className="w-20px flex  mt-10 items-center space-x-4 p-3  bg-gray-800 rounded-3xl"
                >
                  <div className="text-[#03A9F4] text-[1.5rem]">
                    {/* {feature.icon} */}
                  </div>
                  <div className="text-white">
                    <h2 className="font-semibold">{feature.amenity_name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-around text-[1.2rem]  text-black mr-6 pr-10">
            <div className="mt-10 bg-transparent">
              <div>
                <h1 className="text-white font-semibold  text-[1.5rem] md:text-[2rem] pb-2">
                  Description
                </h1>
                <p className="text-white  text-[1rem] pt-2 text-justify">
                  At StayEz, we understand the unique needs of students and have
                  fine-tuned our platform to cater specifically to those
                  requirements. Our mission is to transform your stay into a
                  seamless experience, ensuring comfort and convenience every
                  step of the way.: At StayEz, we understand the unique needs of
                  students and have fine-tuned our platform to cater
                  specifically.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Shedulevisit />
      </div>
    </main>
  );
};

const Shedulevisit = () => {
  return (
    <div class="w-full md:w-[35%] flex flex-col gap-8 justify-start items-center">
      <div class="w-90% md:w-[90%] h-fit m-5 p-5 border-2 border-[#03A9F4] shadow-lg bg-[#012A40] rounded-lg ">
        <h2 class="text-center text-lg text-[#03A9F4]">Schedule a Visit</h2>
        <form>
          <div class="mt-4 flex items-center space-x-2">
            <IoMdPerson class="text-[#03A9F4]" size={24} />
            <input
              type="text"
              placeholder="Name"
              class="flex-grow border border-[#03A9F4] bg-white px-2 py-1 focus:border-black focus:outline-none rounded"
            />
          </div>

          <div class="mt-4 flex items-center space-x-2">
            <MdCall class="text-[#03A9F4]" size={24} />
            <input
              type="number"
              placeholder="+91 123-456-7890"
              class="flex-grow border border-[#03A9F4] bg-white px-2 py-1 focus:border-black focus:outline-none rounded"
            />
          </div>

          <div class="mt-4 flex justify-between items-center space-x-2">
            <label for="whatsapp-updates" class="flex items-center">
              <FaWhatsapp class="text-green-500" size={24} />
              <span class="ml-2 text-[#03A9F4]">Get updates over WhatsApp</span>
            </label>
            <input
              type="checkbox"
              id="whatsapp-updates"
              class="w-5 h-5 accent-blue-500"
            />
          </div>

          <div class="mt-4 text-white">
            <input
              type="checkbox"
              id="terms-conditions"
              class="mr-2 accent-blue-500"
            />
            <label for="terms-conditions">
              I have read and agreed to the{" "}
              <button class="text-[#03A9F4] underline">
                terms and conditions
              </button>{" "}
              and{" "}
              <button class="text-[#03A9F4] underline">privacy policy</button>{" "}
              and hereby confirm to proceed
            </label>
          </div>
          <button
            type="submit"
            class="w-full mt-5 py-2 border border-white bg-gradient-to-r from-[#052649] via-[#00A1FF] to-[#052649] text-white font-bold text-lg rounded-full hover:bg-[#42a58f]"
          >
            Schedule a Visit
          </button>
        </form>
      </div>

      <div class="w-90% hidden md:block md:w-[90%] bg-white h-[500px] rounded-lg overflow-hidden">
        <img
          src={map}
          alt="Map"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const Card = ({ price, value1, value2, value3, seater, img }) => {
  return (
    <div className="min-w-[300px] min-h-[350px] bg-[#012a40] flex flex-col rounded-lg">
      <div className="w-full h-[40%] bg-wheat rounded-t-lg">
        <img src={img} alt="" className="w-full h-full rounded-t-lg" />
      </div>
      <div className="w-full h-[60%] p-3 flex flex-col gap-2">
        <h4 className="text-center font-semibold mb-1">Occupancy {seater}</h4>
        <div className="w-full h-fit p-2 bg-[#021f31] flex justify-between items-center text-capitalize rounded-lg px-2">
          <p>Price/per month </p>
          <p>{price}</p>
        </div>

        <div className="w-full h-fit p-2 bg-[#021f31] flex justify-between items-center text-capitalize rounded-lg px-2">
          <p>Furnished</p>
          <p>{value1}</p>
        </div>

        <div className="w-full h-fit p-2 bg-[#021f31] flex justify-between items-center text-capitalize rounded-lg px-2">
          <p>Washroom</p>
          <p>{value2}</p>
        </div>

        <div className="w-full h-fit p-2 bg-[#021f31] flex justify-between items-center text-capitalize rounded-lg px-2">
          <p>Kitchen</p>
          <p>{value3}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecificFlat;
