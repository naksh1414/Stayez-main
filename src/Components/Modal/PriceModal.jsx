import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const PriceRangeModal = ({ isOpen, onRequestClose, onApply }) => {
  const [minPrice, setMinPrice] = useState(6000);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const handleApply = () => {
    onApply([minPrice, maxPrice]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Set Price Range"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="h-[250px] w-[400px] bg-[#395376]/80 px-4 py-6 rounded-2xl border-white border-[1.2px]  absolute top-[450px] left-[150px]">
        <h2 className="text-xl text-white font-semibold mb-4">Set Price Range</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label className="mr-2 text-white">Min Price:</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2 text-white">Max Price:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={onRequestClose} // Close the modal on cancel
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleApply} // Close the modal on apply
              className="bg-[#03A9F4] text-white py-2 px-4 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

PriceRangeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default PriceRangeModal;
