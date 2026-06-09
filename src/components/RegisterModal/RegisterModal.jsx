import { useState } from "react";
import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  onLoginClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      email,
      password,
      name,
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
          Inscribirse
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="modal__label">
            Nombre de usuario
          </label>

          <input
            type="text"
            className="modal__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button
            type="submit"
            className="modal__submit"
          >
            Inscribirse
          </button>

          <button
            type="button"
            className="modal__switch"
            onClick={onLoginClick}
          >
            o iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;