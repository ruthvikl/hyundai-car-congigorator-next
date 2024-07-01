import { useState, useEffect } from 'react';

export const Modal = ({ visible, setVisibility, title, description }) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (visible) {
      setHasInteracted(true);
    }
  }, [visible]);

  const handleXClick = () => {
    setVisibility(false);
  };

  return (
    <div
      className={`fixed w-full z-20 bottom-10 pointer-events-none ${visible ? 'fade-in block' : hasInteracted ? 'fade-out' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="text-white w-10/12 bg-black/60 rounded-lg mx-auto p-5 text-center flex flex-col justify-center pointer-events-auto">
        <p className="text-lg" id="modal-title">{title}</p>
        <p className="text-sm" id="modal-description">{description}</p>
        <button 
          className="bg-white w-fit mx-auto text-black rounded-full px-2 py-0.5"
          onClick={handleXClick}
          aria-label="Close"
        >
          X
        </button>
      </div>
    </div>
  );
};
