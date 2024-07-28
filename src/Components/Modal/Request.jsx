// import { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import { PiWhatsappLogoLight } from "react-icons/pi";
Modal.setAppElement("#root");

const Request = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Set Distance"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="flex w-[100dvw] h-[100dvh] backdrop-blur-2xl absolute top-0 z-20">
        <div className="flex w-full justify-center items-center">
          <div className="bg-[#0C152C] justify-between flex border-[1.2px] border-[#03A9F4] h-[500px] w-[400px]">
            <div className="p-5">
              <h1 className="text-[#03A9F4] font-semibold">
                Request a Call back
              </h1>
              <div className="mt-10 space-y-4 ">
                <input
                  className="placeholder:text-black/40 px-3 py-2 rounded-lg w-[350px]"
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className="placeholder:text-black/40 px-3 py-2 rounded-lg w-[350px]"
                  type="number"
                  placeholder="Enter Phone Number"
                />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-start items-center mt-4">
                      <PiWhatsappLogoLight className="text-green-300 h-10 w-10"></PiWhatsappLogoLight>
                      <h1 className="text-white text-[0.9rem] font-semibold">
                        Get Updates over Whatsapp{" "}
                      </h1>
                    </div>

                    <div className="flex flex-col mt-10 space-x-2">
                      <div className="flex space-x-2">
                        <input className="h-10 w-10" type="checkbox" />
                        <h1 className="text-white">
                          I have read and agreed to the{" "}
                          <span className="text-[#03A9F4]">
                            terms and conditions
                          </span>{" "}
                          and <span>privacy policy</span> and hereby confirm to
                          proceed
                        </h1>
                      </div>

                      <button className="text-white bg-[#03A9F4] py-2 z-10 rounded-full mt-10">
                        Request a Call Back
                      </button>
                    </div>
                  </div>
                  {/* <BasicSwitches></BasicSwitches> */}
                </div>
              </div>
            </div>
            <div className="pr-5 pt-2 ml-[-30px]">
              <IoCloseSharp
                onClick={onRequestClose}
                className="h-8 w-8 text-[white]"
              ></IoCloseSharp>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
Request.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Request;
