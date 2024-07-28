import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const GenderModal = ({ isOpen, onRequestClose, onApply }) => {
  const [selectedGender, setSelectedGender] = useState("both");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleApply = () => {
    onApply(selectedGender);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Gender"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="text-white h-[250px] w-[400px] bg-[#395376]/80 px-4 py-6 rounded-2xl border-white border-[1.2px] absolute top-[450px] left-[50px]">
        <h2 className="text-white text-[1.4rem] font-semibold">
          Select Gender
        </h2>
        <div className="flex flex-col space-y-4 mt-2">
          <label>
            <input
              type="radio"
              value="male"
              checked={selectedGender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={selectedGender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="both"
              checked={selectedGender === "both"}
              onChange={handleGenderChange}
            />
            Both
          </label>
          <div className="w-full flex space-x-3">
            <button
              onClick={onRequestClose} // Close the modal on cancel
              className="bg-gray-500 w-full text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="bg-[#2590ce] w-full text-white px-4 py-2 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
GenderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};
export default GenderModal;
