import Carousel from "../Carousel/Carousel";
import { FaLocationDot } from "react-icons/fa6";
import pgVector from "../../assets/pgvector.png";
import bedVector from "../../assets/bedVector.png";
import { Button2 } from "../Buttons/Button";
import { IoSearchSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <main className="overflow-hidden">
      <div className="relative px-5 md:px-[130px] mt-[20px] md:mt-[100px] z-20">
        <h1 className="text-white text-[1.1rem] md:text-[58px] font-semibold">{`You've got 99`}</h1>
        <h1 className="text-white text-[1.1rem] md:text-[58px] font-semibold">
          Problems, but
        </h1>
        <h1 className="text-white text-[1.2rem] md:text-[60px] font-semibold">{`brokerage ain't one`}</h1>
        <p className="text-white/50 text-[0.8rem] md:text-[1.2rem]">
          Co-ed. Girls-only. Boys-only. All types of <br /> residences
          available. Co-ed. Girls-only. Boys-<br></br>only. All types of
          residences available. <br /> Co-ed. Girls-only. Boys-only.
        </p>
        <div className=" absolute left-[190px] md:left-[450px] pt-5 md:pt-2 flex items-center justify-between md:mt-2 rounded-[10px] w-[250px] md:w-[450px] text-white font-semibold ">
          <Button2
            data={"Search"}
            icon={<IoSearchSharp></IoSearchSharp>}
            path={"/flats"}
          ></Button2>
        </div>
        <input
          type="text"
          className="p-3 md:p-5 mt-5 md:mt-2 rounded-[10px] w-[250px] md:w-[450px] placeholder:text-white placeholder:font-semibold bg-white/30"
          placeholder="Find in and Around..."
        ></input>
      </div>
      <div className="h-full md:flex w-full md:w-[1000px] mt-[-240px] ml-[140px] md:mt-[-485px] md:ml-[450px] -z-20">
        <Carousel />
      </div>
      <div className="flex items-center p-5 justify-around mt-[80px] md:mt-10">
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          <FaLocationDot className="text-[#03A9F4] text-[1.2rem] h-20" />
          <h1 className="text-white md:text-[1.4rem]">30+ Cities</h1>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          {/* <FaLocationDot className="text-white text-[1.2rem] h-20" /> */}
          <img src={pgVector} alt="" />
          <h1 className="text-white md:text-[1.4rem]">30+ Pg&apos;s</h1>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          <img src={bedVector} alt="" />
          <h1 className="text-white md:text-[1.4rem]">1000+ beds</h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
