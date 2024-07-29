import { useState, useEffect } from "react";
import Card from "../../Components/Cards/Card";
import MapImg from "../../assets/Map.png";
import data from "../../data/properies.json";
import Swal from "sweetalert2";
import { MdArrowDropDown } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
import PriceRangeModal from "../../Components/Modal/PriceModal";
import DistanceModal from "../../Components/Modal/DistanceModal";
import { CiCircleRemove } from "react-icons/ci";
import GenderModal from "../../Components/Modal/GenderModal";
import { Button2 } from "../../Components/Buttons/Button";
import { IoSearchSharp } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";
import Pagination from "../../Components/Pagination/Pagination";
import MoreFiltersModal from "../../Components/Modal/MoreFiltersModal";
import { IoFilterSharp } from "react-icons/io5";
import AllFiltersModal from "../../Components/Modal/AllFiltersModal";
import axiosInstance from "../../API/axiosConfig";

const API_URL = "https://5595-125-21-249-98.ngrok-free.app";

const Flats = () => {
  const [modalState, setModalState] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState([
    1000,
    Infinity,
  ]);
  const [selectedDistance, setSelectedDistance] = useState(Infinity);
  const [selectedGender, setSelectedGender] = useState("both");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [selectedPropertyType, setSelectedPropertyType] = useState([]);
  const [selectedAmenity, setSelectedAmenity] = useState([]);
  const [selectedNearCollege, setSelectedNearCollege] = useState([]);
  const [selectedPayDuration, setSelectedPayDuration] = useState([]);
  const [selectedMessFacility, setSelectedMessFacility] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from server
    fetch(`${API_URL}/properties/property/list/`) // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        // setFilteredData(data); // Initially show all data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleApplyMoreFilters = (filters) => {
    setSelectedPropertyType(filters.propertyType);
    setSelectedAmenity(filters.amenity);
    setSelectedNearCollege(filters.nearCollege);
    setSelectedPayDuration(filters.payDuration);
    setSelectedMessFacility(filters.messFacility);
    setModalState(null);
  };
  const handleApplyPriceRange = (range) => {
    setSelectedPriceRange(range);
    setModalState(null);
  };

  const handleApplyDistance = (distance) => {
    setSelectedDistance(distance);
    setModalState(null);
  };

  const handleApplyGender = (gender) => {
    setSelectedGender(gender);
    setModalState(null);
  };

  const handleRemoveFilters = () => {
    setSelectedPriceRange([1000, Infinity]);
    setSelectedDistance(Infinity);
    setSelectedGender("both");
    setSelectedPropertyType([]);
    setSelectedAmenity([]);
    setSelectedNearCollege([]);
    setSelectedPayDuration([]);
    setSelectedMessFacility([]);
  };

  // const handleRemoveMoreFilters = () => {
  //   setSelectedPropertyType([]);
  //   setSelectedAmenity([]);
  //   setSelectedNearCollege([]);
  //   setSelectedPayDuration([]);
  //   setSelectedMessFacility([]);
  // };

  const handleRemovePriceFilter = () => {
    setSelectedPriceRange([1000, Infinity]);
  };

  const handleRemoveDistanceFilter = () => {
    setSelectedDistance(Infinity);
  };

  const handleRemoveGenderFilter = () => {
    setSelectedGender("both");
  };

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleAddToWishlist = (property) => {
    console.log("Adding to wishlist:", property);
    if (wishlist.some((item) => item.id === property.id)) {
      // alert("This property is already in your wishlist.");
      Swal.fire({
        title: "Wishlist!!",
        text: "Already in your wishlist",
        icon: "error",
      });
      return;
    }
    const newWishlist = [...wishlist, property];
    setWishlist(newWishlist);
    localStorage.setItem("Wishlist", JSON.stringify(newWishlist));

    axiosInstance
      .post("/features/cart/add/", { id: property.id })
      .then((response) => {
        console.log(response);
        // alert("Added to Wishlist!");
        Swal.fire({
          title: "Wishlist Added",
          text: response.data.msg,
          icon: "success",
        });
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
        Swal.fire({
          title: "Error in adding the property",
          text: error.message,
          icon: "error",
        });
      });
  };

  const filteredData = data.filter((property) => {
    const matchesPrice =
      property.starting_price >= selectedPriceRange[0] &&
      property.starting_price <= selectedPriceRange[1];
    const matchesDistance = property.dist_from_college <= selectedDistance;
    const matchesGender =
      selectedGender === "both" ||
      property.avl_for.toLowerCase() === selectedGender.toLowerCase();
    const matchesPropertyType =
      selectedPropertyType.length === 0 ||
      selectedPropertyType.includes(property.property_type);
    const matchesAmenity =
      selectedAmenity.length === 0 ||
      (property.ppty_amenity &&
        selectedAmenity.every((amenity) =>
          property.ppty_amenity.some(
            (pptyAmenity) => pptyAmenity.amenity_name === amenity
          )
        ));
    const matchesNearCollege =
      selectedNearCollege.length === 0 ||
      selectedNearCollege.includes(property.near_college);
    const matchesPayDuration =
      selectedPayDuration.length === 0 ||
      selectedPayDuration.includes(property.rnt_pay_duration);
    const matchesMessFacility =
      selectedMessFacility.length === 0 ||
      selectedMessFacility.includes(property.mess_facility);

    return (
      matchesPrice &&
      matchesDistance &&
      matchesGender &&
      matchesPropertyType &&
      matchesAmenity &&
      matchesNearCollege &&
      matchesPayDuration &&
      matchesMessFacility
    );
  });

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleRemoveFilter = (filterType) => {
    switch (filterType) {
      case "priceRange":
        setSelectedPriceRange([1000, Infinity]);
        break;
      case "distance":
        setSelectedDistance(Infinity);
        break;
      case "gender":
        setSelectedGender("both");
        break;
      case "propertyType":
        setSelectedPropertyType([]);
        break;
      case "amenity":
        setSelectedAmenity([]);
        break;
      case "nearCollege":
        setSelectedNearCollege([]);
        break;
      case "payDuration":
        setSelectedPayDuration([]);
        break;
      case "messFacility":
        setSelectedMessFacility([]);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <div className="flex justify-center mt-10">
        <div className=" absolute right-[190px] md:right-[100px] pt-5 md:pt-2 flex items-center justify-between md:mt-2 rounded-[10px] w-[250px] md:w-[450px] text-white font-semibold ">
          <Button2
            data={"Search"}
            icon={<IoSearchSharp></IoSearchSharp>}
            path={"/flats"}
          ></Button2>
        </div>
        <input
          type="text"
          className="p-3 md:p-5 mt-5 md:mt-2 rounded-[10px] w-[250px] md:w-[650px] placeholder:text-white placeholder:font-semibold bg-white/30"
          placeholder="Find in and Around..."
        ></input>
      </div>

      <div className="flex justify-center text-white text-[1.4rem] md:text-[2.4rem] font-semibold my-8">
        Popular in&nbsp;
        <span className="text-[#03A9F4]">GHAZIABAD</span>
      </div>
      <div className="bg-[#224260] h-full p-5 md:p-0 md:h-20 w-full">
        <div className="text-white h-full flex flex-col md:flex-row items-center px-5 space-y-4 md:space-y-0 md:space-x-8">
          <button
            onClick={() => setModalState("allFilters")}
            className="bg-[#0477C0]/30 w-fit px-4 h-12 justify-center border-2 border-white rounded-full flex items-center"
          >
            <IoFilterSharp></IoFilterSharp> Applied Filters
          </button>
          <button
            onClick={() => setModalState("gender")}
            className="bg-[#0477C0]/30 w-[120px] h-12 justify-center border-2 border-white rounded-full flex items-center"
          >
            Gender <MdArrowDropDown className="w-8 h-8" />
          </button>
          <button
            onClick={() => setModalState("price")}
            className="bg-[#0477C0]/30 border-2 border-white w-[120px] h-12 justify-center rounded-full flex items-center"
          >
            <FaRupeeSign className="w-6 h-6" />
            Price
          </button>
          <button
            onClick={() => setModalState("distance")}
            className="bg-[#0477C0]/30 w-[120px] h-12 justify-center rounded-full border-2 border-white flex items-center"
          >
            <RiPinDistanceFill className="w-6 h-6" />
            Distance
          </button>
          <div className="bg-white hidden md:flex w-[2px] h-14"></div>
          <button
            onClick={() => setModalState("moreFilters")}
            className="bg-[#0477C0]/30 border-2 border-white w-fit h-12 justify-center px-6 rounded-full flex items-center"
          >
            <LiaFilterSolid className="h-6 w-6" />
            More Filters
          </button>
          <button
            onClick={handleRemoveFilters}
            className="bg-[#ce4a25] border-2 border-white w-fit h-12 justify-center px-6 rounded-full flex items-center"
          >
            Remove All filters
          </button>
          {selectedGender !== "both" && (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Gender: ${selectedGender}`}</span>
              <button onClick={handleRemoveGenderFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          )}
          {selectedPriceRange[0] !== 1000 ||
          selectedPriceRange[1] !== Infinity ? (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Price: ${selectedPriceRange[1]}`}</span>
              <button onClick={handleRemovePriceFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          ) : null}
          {selectedDistance !== Infinity && (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Distance: ${selectedDistance / 1000} km`}</span>
              <button onClick={handleRemoveDistanceFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
      <PriceRangeModal
        isOpen={modalState === "price"}
        onRequestClose={() => setModalState(null)}
        onApply={handleApplyPriceRange}
      />
      <DistanceModal
        isOpen={modalState === "distance"}
        onRequestClose={() => setModalState(null)}
        onApply={handleApplyDistance}
      />
      <GenderModal
        isOpen={modalState === "gender"}
        onRequestClose={() => setModalState(null)}
        onApply={handleApplyGender}
      />
      <MoreFiltersModal
        isOpen={modalState === "moreFilters"}
        onRequestClose={() => setModalState(null)}
        onApply={handleApplyMoreFilters}
        selectedPropertyType={selectedPropertyType}
        selectedAmenity={selectedAmenity}
        selectedNearCollege={selectedNearCollege}
        selectedPayDuration={selectedPayDuration}
        selectedMessFacility={selectedMessFacility}
      />
      <AllFiltersModal
        isOpen={modalState === "allFilters"}
        onRequestClose={() => setModalState(null)}
        filters={{
          gender: selectedGender,
          priceRange: selectedPriceRange,
          distance: selectedDistance,
          propertyType: selectedPropertyType,
          amenity: selectedAmenity,
          nearCollege: selectedNearCollege,
          payDuration: selectedPayDuration,
          messFacility: selectedMessFacility,
        }}
        onRemoveFilter={handleRemoveFilter}
      />
      <div className="flex flex-row justify-center mt-[10px] md:mt-5">
        <div className="p-5 pl-20 justify-center items-center flex flex-col">
          <div>
            {currentProperties.map((property, index) => (
              <Card
                key={property.id}
                imgSrc={MapImg}
                property={property}
                onAddToWishlist={() => handleAddToWishlist(property)}
              />
            ))}
          </div>
          <div className="flex flex-wrap space-y-2 md:space-y-0 justify-center space-x-2 mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="hidden md:flex mt-20 ml-20 p-5 relative">
          <img
            className="h-[800px] w-[80%] mt-10 sticky t-{10%} left-{10%}"
            src={MapImg}
            alt="image"
          />
        </div>
      </div>
    </main>
  );
};
export default Flats;
