import BgImg from "../../assets/aboutBG.png";
const About2 = () => {
  return (
    <main>
      <div className="h-[80dvh]">
        <div className="w-full">
          <img
            className="object-cover h-[80%] w-full absolute"
            src={BgImg}
            alt="BackGround Image"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full pt-10">
          <h1 className="text-white font-semibold text-[2.3rem] md:text-[6rem]">About us </h1>
          <div className="bg-[#1E293B] items-center justify-center flex h-20 w-[90%] md:w-[50%] rounded-full">
            <div className="text-white font-semibold text-[1rem] md:text-[1.2rem] flex justify-between w-full px-7">
              <h1>The Who</h1>
              <h1>The Why</h1>
              <h1>The What</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About2;
