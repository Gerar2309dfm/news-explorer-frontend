import "./LoginModal.css";

function LoginModal({ isOpen, onClose }) {
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
          Iniciar sesión
        </h2>

        <form className="modal__form">
          <label className="modal__label">
            Correo electrónico
          </label>

          <input
            type="email"
            className="modal__input"
            placeholder="Introduce tu correo"
            required
          />

          <label className="modal__label">
            Contraseña
          </label>

          <input
            type="password"
            className="modal__input"
            placeholder="Introduce tu contraseña"
            required
          />

          <button
            type="submit"
            className="modal__submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;