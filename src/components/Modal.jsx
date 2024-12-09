import "../styles/modal.css";

function Modal({ isWin, showModal, closeModal }) {
  return (
    showModal && (
      <div className="modal-container">
        <dialog open={showModal} className="modal">
          <h3 className="result">
            {isWin
              ? "You win! Well played."
              : "You lose! Better luck next time."}
          </h3>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </dialog>
      </div>
    )
  );
}

export default Modal;
