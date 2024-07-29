import StayImg from "../../assets/Stay.png";
const Stay = () => {
  return (
    <main className="my-10 md:my-[100px] h-full">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-[50%] justify-center items-center">
          <h1 className="text-white text-[1.4rem] md:text-[1.6rem] lg:text-[3.4rem] font-bold md:pl-20 lg:pl-28 px-5">
            Step into a room that has{" "}
            <span className="text-[#03A9F4]"> room for everything</span>
          </h1>
          <p className="text-white text-[1.1rem] md:text-[1.3rem] md:pl-20 lg:pl-28 px-5 mt-2">
            Your clothes will not be fighting for space on the same almirah.
            Here we have ample room for all your possessions. Even a framed
            photo of your family, for the rare occasions you miss home.
          </p>
        </div>
        <div className="w-full md:w-[50%] p-5 md:pl-10 lg:pl-14">
          <img src={StayImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Stay;
