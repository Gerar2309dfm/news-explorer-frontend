import "./InfoTooltip.css";

function InfoTooltip({
  isOpen,
  onClose,
  onLoginClick,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="modal__title">
          ¡El registro se ha completado con éxito!
        </h2>

        <button
          className="modal__switch"
          onClick={onLoginClick}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;