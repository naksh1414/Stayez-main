import Who from "../../assets/whatwedoimg.png";
const WhatWeDo = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-white font-semibold text-[2.2rem] md:text-[3rem]">
          {" "}
          <span className="text-[#03A9F4] ">What</span> We Do ?
        </h1>
        <div className="flex flex-col md:flex-row w-full mt-10">
          <div className="md:w-[50%] mt-10 p-5 md:mt-20 md:ml-20">
            <img src={Who} alt="WhoWeAre Image" />
          </div>
          <div className="md:w-[50%] p-5 mr-10">
            <h1 className="text-white md:text-right font-semibold text-[1.3rem] md:text-[1.9rem]">
              Our <span className="text-[#03A9F4]">Objective</span>{" "}
            </h1>
            <h1 className="text-white font-semibold text-[2.3rem] md:text-[4rem]">
              Providing the best services
            </h1>
            <p className="text-white/90 mt-5 text-[1rem] md:text-[1.3rem]">
              StayEz is committed to deliver a seamless and efficient
              accommodation search experience for students. The platform
              features handpicked listings of high-quality flats and PGs,
              specifically curated to meet student needs. With the advanced
              search filters, users can easily narrow down options by location,
              budget and amenities, ensuring they find the most suitable
              accommodations with minimal effort.
            </p>
            <p className="text-white/80 mt-5 text-[1rem] md:text-[1.3rem]">
              To enhance the decision-making process, StayEz provides
              high-resolution imagery that offers a detailed view of both the
              interiors and exteriors of each property. Additionally, the
              platform offers comprehensive property insights, including crucial
              information about amenities, proximity to educational institutions
              and nearby essential services. These features collectively provide
              users with a thorough understanding of each option, aiding them in
              making well-informed and confident choices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;
