import partner from "../../assets/partnerwithus.png";
import { useState } from "react";
const Partner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <h1 className="text-white text-[2rem] md:text-[5rem] font-semibold">
          Partner with <span className="text-[#00A1FF]">StayEz</span>{" "}
        </h1>
        <p className="text-white px-5 md:px-10 text-[1rem] md:text-[1.3rem] w-[80%] mt-5">
          If you too wish to make your property earn to the best of its ability,
          find captive mainspace for your products or services, and/or provide
          the best living experience for your people, you&apos;ve come to the
          right place.
        </p>
      </div>
      <div className="bg-[#0C152C] m-10 flex">
        <div className="p-10 w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-[50%]">
            <img src={partner} alt="partner image" />
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-[50%] items-center rounded-2xl border-2 border-[#00A1FF] flex flex-col">
            <h1 className="text-white text-[1.1rem] md:text-[2rem] text-center font-semibold md:mx-20 mt-10">
              Your Property in the{" "}
              <span className="text-[#00A1FF] ">right hands</span>{" "}
            </h1>
            <h1 className="text-white text-center text-[1rem] md:text-[1.2rem] mt-5">
              Enter the required details
            </h1>
            <div className="flex flex-col w-[80%]">
              <label className="text-white font-semibold text-[1rem] mt-4">
                * Name
              </label>
              <input
                className="my-2 h-8 bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="Full Name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-required
              />
              <label className="text-white font-semibold text-[1rem] mt-4">
                * Phone Number{" "}
              </label>

              <input
                className="my-2 h-8 bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="+91 90000009909"
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="text-white font-semibold text-[1rem] mt-4">
                * Email{" "}
              </label>
              <input
                className="my-2 h-8 bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="StayEz@gmail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-white font-semibold text-[1rem] mt-4">
                * Address{" "}
              </label>
              <input
                className="my-2 h-8  bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="99/120 xyz area "
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="text-white font-semibold text-[1rem] mt-4">
                * Educational Institute near the property{" "}
              </label>
              <input
                className="my-2 h-8  bg-transparent text-white border-2 rounded-[10px] p-5 placeholder:text-[white]"
                placeholder="IIT muradnagar"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-[#03A9F4] text-white rounded-[10px] self-center md:w-[40%] font-semibold px-8 py-3 mt-5 mb-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partner;
