import "./PopupWithForm.css";

function PopupWithForm() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close">
          X
        </button>

        <h2 className="popup__title">
          Iniciar sesión
        </h2>
      </div>
    </div>
  );
}

export default PopupWithForm;