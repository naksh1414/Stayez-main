import HostelImg from "../../assets/HostelPg.png";
const HostelPg = () => {
  return (
    <main className="mt-10 md:my-[100px] h-full">
      <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center">
        <div className="w-full md:w-[50%] justify-center items-center">
          <h1 className="text-white text-[1.3rem] md:text-[1.6rem] lg:text-[3.4rem] font-bold lg:pl-14 lg:pr-28 px-5">
            Don&apos;t come expecting <br />{" "}
            <span className="text-[#03A9F4]">
              {" "}
              &quot; Hostel-PG food &quot;
            </span>
          </h1>
          <p className="text-white text-[1.1rem] md:text-[1.3rem] lg:pl-14 md:pr-28 px-5 mt-2">
            Instead, bring along a big appetite for healthy, yummy meals. With
            flavours that have a local touch. And that, at the same time, take
            your taste buds on a journey back home.
          </p>
        </div>
        <div className="w-full md:w-[50%] p-5 md:pl-20 lg:pl-28">
          <img src={HostelImg} alt="" />
        </div>
      </div>
      <div className="text-[1.2rem] md:text-[2rem] flex justify-center items-center mt-[50px] md:mt-[100px]">
        <h1 className="text-white">
          <span className="text-[#03A9F4]">Not just</span> four walls and a roof
        </h1>
      </div>
    </main>
  );
};

export default HostelPg;
