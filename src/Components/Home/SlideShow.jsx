import React, { useRef, useState, useEffect } from "react";
import img from "../../assets/aboutimg2.png";
import { IoLocation } from "react-icons/io5";

const Slideshow = () => {
  const slideshowRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (slideshowRef.current) {
        const cardElement = slideshowRef.current.querySelector(".card");
        if (cardElement) {
          setCardWidth(cardElement.offsetWidth);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (slideshowRef.current) {
      const { scrollLeft, clientWidth } = slideshowRef.current;
      const newScrollLeft =
        direction === "left"
          ? Math.max(scrollLeft - cardWidth, 0)
          : Math.min(
              scrollLeft + cardWidth,
              slideshowRef.current.scrollWidth - clientWidth
            );

      slideshowRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mt-8 flex items-center justify-center">
      <button
        onClick={() => scroll("left")}
        className="absolute left-5 z-10 bg-white p-4 rounded-full shadow-lg transform hover:bg-gray-700 hover:text-white transition-colors duration-300 ease-in-out focus:outline-none"
      >
        &lt;
      </button>
      <div
        ref={slideshowRef}
        className="flex gap-10 p-5 overflow-x-auto scroll-smooth scrollbar-hidden w-[90%] snap-x snap-mandatory scrollbar"
      >
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
        <Card img={img} />
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-5 z-10 bg-white p-4 rounded-full shadow-lg transform hover:bg-gray-700 hover:text-white transition-colors duration-300 ease-in-out focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className="card flex flex-col bg-[#012a40] rounded-xl min-w-[350px] h-[400px] snap-center">
      <div className="w-full h-[60%] bg-wheat rounded-t-xl">
        <img
          src={img}
          alt="Card Image"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="w-full h-[40%] p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-bold text-white">ABC P'g</h1>
          <p className="text-lg font-medium text-white">RS 1200 /Months*</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="text-lg font-bold text-white flex items-center">
            <IoLocation className="mr-2" /> 2 km from Kiet
          </p>
          <p className="text-lg font-medium bg-blue-800 text-white rounded-full px-3 py-1">
            Boys
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
