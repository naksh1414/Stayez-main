import React from 'react';
import Modal from 'react-modal';

const AllFiltersModal = ({ isOpen, onRequestClose, filters, onRemoveFilter }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <div className="h-[200px] w-[400px] text-white border-white border-[1.2px] bg-[#395376]/80 px-4 py-6 rounded-2xl absolute top-[450px] left-[20px]">
        <h2 className="text-2xl text-white mb-4">Applied Filters</h2>
        <ul className="space-y-2">
          {filters.gender !== 'both' && (
            <li className="flex justify-between">
              <span>Gender: {filters.gender}</span>
              <button onClick={() => onRemoveFilter('gender')}>Remove</button>
            </li>
          )}
          {(filters.priceRange[0] !== 6000 || filters.priceRange[1] !== Infinity) && (
            <li className="flex justify-between">
              <span>Price: {filters.priceRange[0]} - {filters.priceRange[1]}</span>
              <button onClick={() => onRemoveFilter('priceRange')}>Remove</button>
            </li>
          )}
          {filters.distance !== Infinity && (
            <li className="flex justify-between">
              <span>Distance: {filters.distance / 1000} km</span>
              <button onClick={() => onRemoveFilter('distance')}>Remove</button>
            </li>
          )}
          {filters.propertyType.length > 0 && (
            <li className="flex justify-between">
              <span>Property Type: {filters.propertyType.join(', ')}</span>
              <button onClick={() => onRemoveFilter('propertyType')}>Remove</button>
            </li>
          )}
          {filters.amenity.length > 0 && (
            <li className="flex justify-between">
              <span>Amenities: {filters.amenity.join(', ')}</span>
              <button onClick={() => onRemoveFilter('amenity')}>Remove</button>
            </li>
          )}
          {filters.nearCollege.length > 0 && (
            <li className="flex justify-between">
              <span>Near College: {filters.nearCollege.join(', ')}</span>
              <button onClick={() => onRemoveFilter('nearCollege')}>Remove</button>
            </li>
          )}
          {filters.payDuration.length > 0 && (
            <li className="flex justify-between">
              <span>Payment Duration: {filters.payDuration.join(', ')}</span>
              <button onClick={() => onRemoveFilter('payDuration')}>Remove</button>
            </li>
          )}
          {filters.messFacility.length > 0 && (
            <li className="flex justify-between">
              <span>Mess Facility: {filters.messFacility.join(', ')}</span>
              <button onClick={() => onRemoveFilter('messFacility')}>Remove</button>
            </li>
          )}
        </ul>
        <button className="mt-4 p-2 bg-red-500 text-white rounded" onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default AllFiltersModal;
