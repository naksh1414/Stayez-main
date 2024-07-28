import CardImg from "../../assets/cardImg.png";
import { FaMale, FaFemale, FaGenderless, FaBath, FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ property, removeFromWishList }) => {
  const {
    property_name,
    address1,
    avl_for,
    dist_from_college,
    room_detail,
    starting_price,
    cover_image,
  } = property;

  const imgSrc = cover_image;

  return (
    <div className="bg-[#0C152C] border-2 text-white p-4 m-2 rounded-lg shadow-md">
      <img
        className="h-[200px] w-[400px] rounded-xl"
        src={imgSrc}
        alt="image"
      />
      <div className="flex justify-between items-center mt-3">
        <h2 className="text-xl font-bold mt-2">{property_name}</h2>
        <div
          className={`flex flex-row ${
            avl_for === "Male"
              ? "bg-[#03A9F4]" // Blue for Male
              : avl_for === "Female"
              ? "bg-[#F48FB1]" // Pink for Female
              : "bg-transparent" // Transparent for Both
          } border-[1px] border-white rounded-xl w-[120px] h-8 items-center px-4`}
        >
          {avl_for === "Male" ? (
            <FaMale />
          ) : avl_for === "Female" ? (
            <FaFemale />
          ) : (
            <FaGenderless />
          )}
          <h1>{avl_for}</h1>
        </div>
      </div>

      <p className="text-[1.1rem] text-[#78878F]">{address1}</p>
      <div className="rounded-xl w-[220px] h-8 space-x-3 items-center flex">
        <FaLocationDot className="text-blue-500" />
        <h1 className="text-blue-500 ">
          {dist_from_college / 1000} km away from kiet
        </h1>
      </div>
      <div className="flex space-x-3">
        <div className="bg-black/50 border-[1px] border-white rounded-xl w-[120px] h-8 mt-5 items-center flex px-4">
          <FaBath className="text-white mr-2" />
          <h1 className="text-white">{room_detail.washroom}Washroom</h1>
        </div>
        <div className="bg-none text-white border-[1px] border-white rounded-xl w-[120px] h-8 mt-5 items-center flex px-4">
          <FaBed className="text-white mr-2" />
          <h1 className="text-white">{room_detail.seater}Seater</h1>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => removeFromWishList(property)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
