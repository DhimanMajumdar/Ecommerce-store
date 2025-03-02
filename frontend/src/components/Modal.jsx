const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-50"></div>
  
            {/* Dark Modal Box */}
            <div className="absolute top-[40%] right-[50%] bg-black text-white p-6 rounded-lg z-10 shadow-lg w-96">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white bg-black p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                onClick={onClose}
              >
                ✖
              </button>
  
              {/* Modal Content */}
              <div className="p-4">{children}</div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  