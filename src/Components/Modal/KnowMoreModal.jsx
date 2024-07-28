import Modal from "react-modal";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

const KnowMoreModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    onRequestClose(); // Close the modal
    navigate(path); // Navigate to the new path
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Set Price Range"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="h-[150px] w-[300px] flex justify-between text-[1.3rem] bg-[#2590ce] text-white px-4 py-6 rounded absolute top-[120px] right-[150px] z-20">
        <div>
          <h1
            className="cursor-pointer"
            onClick={() => handleLinkClick("/aboutus")}
          >
            - About Us
          </h1>
          <h1> - Our Team</h1>
          <h1
            className="cursor-pointer"
            onClick={() => handleLinkClick("/joinus")}
          >
            - Partner With Us
          </h1>
        </div>
        <div className="mt-[-12px]">
          <button onClick={onRequestClose}>
            <IoCloseSharp className="h-8 w-8" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

KnowMoreModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default KnowMoreModal;
