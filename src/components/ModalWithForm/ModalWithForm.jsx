import './ModalWithForm.css';

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  serverError,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <span className="modal__error modal__error_visible">
            {serverError}
          </span>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
