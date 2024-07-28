import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-700 p-2 rounded-lg">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"
        }`}
      >
        <IoIosArrowBack className="h-6 w-6 text-white" />
      </button>
      <span className="text-white bg-[#2590ce] px-4 py-1 rounded-md">
        Page {currentPage}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"
        }`}
      >
        <IoIosArrowForward className="h-6 w-6 text-white" />
      </button>
      <span className="text-white pr-2">{totalPages} Pages </span>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
