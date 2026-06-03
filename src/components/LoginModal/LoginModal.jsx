import { useState } from "react";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid =
    email.trim() !== "" &&
    password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    onLogin({
      email,
      password,
    });
  };

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

        <form
          className="modal__form"
          onSubmit={handleSubmit}
        >
          <label className="modal__label">
            Correo electrónico
          </label>

          <input
            type="email"
            className="modal__input"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="modal__label">
            Contraseña
          </label>

          <input
            type="password"
            className="modal__input"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className={`modal__submit ${
              !isValid
                ? "modal__submit_disabled"
                : ""
            }`}
            disabled={!isValid}
          >
            Iniciar sesión
          </button>

          <div className="modal__switch">
            <span className="modal__switch-text">
             o
            </span>

            <button
               type="button"
              className="modal__switch-link"
              onClick={onRegisterClick}
            >
              Inscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;