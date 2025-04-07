import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

const RegisterModal = ({
  isOpen,
  buttonClass = 'modal__form-button',
  openLoginModal,
  onSignUp,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting registration form with:', {
      email,
      password,
      name,
    });
    onSignUp({ email, password, name });
  };

  useEffect(() => {
    setIsButtonActive(
      email.trim() !== '' && password.trim() !== '' && name.trim() !== ''
    );
  }, [email, password, name]);

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonClass={`modal__form-button ${
        isButtonActive ? 'modal__form-button_active' : ''
      }`}
    >
      <label className="modal__label">
        Email*{' '}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password*{' '}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Username*{''}
        <input
          type="text"
          className="modal__input"
          id="registerName"
          name="name"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          Sign Up
        </button>
        <button
          type="button"
          className="modal__or-login-button"
          onClick={openLoginModal}
        >
          or Sign In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
