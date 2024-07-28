import Who from "../../assets/Whoweare.png";
const WhoWeAre = () => {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <h1 className="text-white font-semibold text-[2.3rem] md:text-[3rem]">
          <span className="text-[#03A9F4]">Who</span> We Are
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-[50%] p-10">
          <h1 className="text-white font-semibold text-[1.2rem] md:text-[1.7rem]">
            About <span className="text-[#03A9F4]">Comapny</span>{" "}
          </h1>
          <h1 className="text-white font-semibold text-[2.2rem] md:text-[3rem]">
            Your <span className="text-[#03A9F4]">Ez</span> Ticket to Cozy
            Stays!
          </h1>
          <p className="text-white/90 mt-5 text-[1rem] md:text-[1.3rem]">
            At StayEz, we recognize the complexities students encounter when
            searching for ideal accommodations near their colleges. Our platform
            is designed to streamline this process, offering an intuitive
            interface where students can efficiently find flats and PGs that
            match their exact requirements.
          </p>
          <p className="text-white/80 mt-5 text-[1rem] md:text-[1.3rem]">
            The company strives to empower students to find their ideal
            accommodation near their educational institutions using precise
            filters, thus eliminating the need for manual searches. Our mission
            is to ensure their academic success and personal growth while
            setting up new benchmarks for service excellence. By integrating
            innovation and technology, we are reshaping the student housing
            sector and enhancing the overall experience for students.
          </p>
        </div>
        <div className="md:w-[50%] mt-10 p-5 md:p-0 md:mt-20 md:ml-5">
          <img src={Who} alt="WhoWeAre Image" />
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
