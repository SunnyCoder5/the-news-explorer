import './ModalWithForm.css';

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__content">
        <p className="modal__title">{title}</p>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
