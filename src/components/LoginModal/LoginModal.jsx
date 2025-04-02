import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

const LoginModal = ({
  isOpen,
  onLogIn,
  openRegisterModal,
  onClose,
  buttonClass = 'modal__form-button',
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting registration form with:', {
      email,
      password,
    });
    onLogIn({ email, password });
  };

  useEffect(() => {
    setIsButtonActive(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonClass={`modal__form-button ${
        isButtonActive ? 'modal__form-button_active' : ''
      }`}
    >
      <label className="modal__label">
        Email{' '}
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail((prevData) => e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input modal__input-password"
          id="user-password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword((prevData) => e.target.value)}
          required
        />
      </label>
      <div className="modal__buttons-wrapper">
        <button
          type="submit"
          className={`${buttonClass} ${
            isButtonActive ? 'modal__form-button_filled' : ''
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          className="modal__or-signup-button"
          onClick={openRegisterModal}
        >
          or
          <span className="modal__or-signup-button_span"> Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
