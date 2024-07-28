import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const DistanceModal = ({ isOpen, onRequestClose, onApply }) => {
  const [distance, setDistance] = useState(10000);

  const handleApply = () => {
    onApply(distance);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Set Distance"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="h-[200px] w-[400px] border-white border-[1.2px] bg-[#395376]/80 px-4 py-6 rounded-2xl absolute top-[450px] left-[300px]">
        <h2 className="text-xl text-white font-semibold mb-4">Set Distance</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="mr-2 text-white">Distance: (in Km)</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
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

DistanceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default DistanceModal;
