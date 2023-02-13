import React from "react";

export default function Modal({ onCloseModal }) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalClose">
          <img
            src="img/close.png"
            alt="close"
            width={20}
            height={20}
            onClick={onCloseModal}
          />
        </div>
        <p>Task length must be more than 0 and less than 40 symbols.</p>
        <img src="img/error.png" alt="error" width={100} height={100} />
      </div>
    </div>
  );
}
