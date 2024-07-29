import heroImg from "../../assets/heroimg.png";
import { IoIosCall } from "react-icons/io";
import Request from "../Modal/Request";
import { useState } from "react";
const Chill = () => {
  const [requestModalIsOpen, setRequestModalIsOpen] = useState(false);
  const openRequestModal = () => setRequestModalIsOpen(true);
  const closeRequestModal = () => setRequestModalIsOpen(false);
  return (
    <main className=" my-10 md:my-[100px] h-full">
      <button
        className="h-12 z-20 -rotate-90 absolute transform translate-x-24 -translate-y-20 rounded-tl-xl rounded-tr-xl bottom-10 right-0 text-white text-2xl hidden lg:flex items-center bg-[#03A9F4] px-2"
        onClick={openRequestModal}
      >
        <IoIosCall />
        Request a Callback
      </button>
      <Request isOpen={requestModalIsOpen} onRequestClose={closeRequestModal} />
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-[50%] justify-center items-center">
          <h1 className="text-white text-[1.4rem] md:text-[1.6rem] lg:text-[3.4rem] font-bold md:pl-20 lg:pl-28 px-5">
            Chill in a <span className="text-[#03A9F4]">Common area</span>{" "}
            that’s anything but common
          </h1>
          <p className="text-white text-[1.1rem] lg:text-[1.3rem] md:pl-20 lg:pl-28 px-5 mt-2">
            Nope, we don&apos;t try to pass off a few plastic chairs and a TV as
            a common area. We&apos;ve replaced them with sofas, bean bags and
            large-screen TVs. And we&apos;ve also added gaming zones, fitness
            centres and chillout corners as a bonus.
          </p>
        </div>
        <div className="w-full md:w-[50%] p-5 lg:pl-14">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Chill;
