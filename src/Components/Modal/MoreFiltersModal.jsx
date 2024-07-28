import { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const MoreFiltersModal = ({
  isOpen,
  onRequestClose,
  onApply,
  selectedPropertyType,
  selectedAmenity,
  selectedNearCollege,
  selectedPayDuration,
  selectedMessFacility,
}) => {
  const [filters, setFilters] = useState({
    propertyType: [],
    amenity: [],
    nearCollege: [],
    payDuration: [],
    messFacility: [],
  });

  useEffect(() => {
    setFilters({
      propertyType: selectedPropertyType,
      amenity: selectedAmenity,
      nearCollege: selectedNearCollege,
      payDuration: selectedPayDuration,
      messFacility: selectedMessFacility,
    });
  }, [
    selectedPropertyType,
    selectedAmenity,
    selectedNearCollege,
    selectedPayDuration,
    selectedMessFacility,
  ]);

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const handleApplyFilters = () => {
    onApply(filters);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filter Properties"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="bg-[#012A40] border-[1.2px] border-white text-white rounded-2xl w-[350px] max-w-full p-6 space-y-4 absolute top-[450px] left-[30%]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Filter Properties</h2>
          <button onClick={onRequestClose} className="text-white">
            <IoCloseSharp className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#395376]/50">
            <h3 className="text-xl font-semibold">Property Type</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes("Independent Flat")}
                  onChange={() =>
                    handleCheckboxChange("propertyType", "Independent Flat")
                  }
                />{" "}
                Independent Flat
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes("Shared Flat")}
                  onChange={() =>
                    handleCheckboxChange("propertyType", "Shared Flat")
                  }
                />{" "}
                Shared Flat
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes("PG")}
                  onChange={() => handleCheckboxChange("propertyType", "PG")}
                />{" "}
                PG
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes("Hostel")}
                  onChange={() => handleCheckboxChange("propertyType", "Hostel")}
                />{" "}
                Hostel
              </label>
            </div>
          </div>
          <div className="bg-[#395376]/50">
            <h3 className="text-lg font-semibold">Amenity</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input
                  type="checkbox"
                  checked={filters.amenity.includes("AC")}
                  onChange={() => handleCheckboxChange("amenity", "AC")}
                />{" "}
                AC
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.amenity.includes("RO")}
                  onChange={() => handleCheckboxChange("amenity", "RO")}
                />{" "}
                RO
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.amenity.includes("Cooler")}
                  onChange={() => handleCheckboxChange("amenity", "Cooler")}
                />{" "}
                Cooler
              </label>
            </div>
          </div>

          <div className="bg-[#395376]/50">
            <h3 className="text-lg font-semibold">Near College</h3>
            <div className="space-y-2">
              <label>
                <input
                  type="checkbox"
                  checked={filters.nearCollege.includes(
                    "KIET Group of Institutions, Ghaziabad"
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "nearCollege",
                      "KIET Group of Institutions, Ghaziabad"
                    )
                  }
                />{" "}
                KIET Group of Institutions, Ghaziabad
              </label>
            </div>
          </div>
          <div className="bg-[#395376]/50">
            <h3 className="text-lg font-semibold">Pay Duration</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input
                  type="checkbox"
                  checked={filters.payDuration.includes("Monthly")}
                  onChange={() => handleCheckboxChange("payDuration", "Monthly")}
                />{" "}
                Monthly
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.payDuration.includes("Quarterly")}
                  onChange={() =>
                    handleCheckboxChange("payDuration", "Quarterly")
                  }
                />{" "}
                Quarterly
              </label>
            </div>
          </div>
          <div className="bg-[#395376]/50">
            <h3 className="text-lg font-semibold">Mess Facility</h3>
            <div className="space-y-2">
              <label>
                <input
                  type="checkbox"
                  checked={filters.messFacility.includes("Available")}
                  onChange={() =>
                    handleCheckboxChange("messFacility", "Available")
                  }
                />{" "}
                Available
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleApplyFilters}
            className="bg-[#007BFF] text-white py-2 px-4 rounded-md"
          >
            Apply Filters
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-300 text-black py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

MoreFiltersModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  selectedPropertyType: PropTypes.array.isRequired,
  selectedAmenity: PropTypes.array.isRequired,
  selectedNearCollege: PropTypes.array.isRequired,
  selectedPayDuration: PropTypes.array.isRequired,
  selectedMessFacility: PropTypes.array.isRequired,
};

export default MoreFiltersModal;
