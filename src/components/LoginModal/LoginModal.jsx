import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useFormWithValidation } from '../hooks/useForm';

const LoginModal = ({
  isOpen,
  onLogIn,
  handleRegisterClick,
  onClose,
  serverError,
  setServerError,
  buttonClass = 'modal__form-button',
}) => {
  const inputValues = {
    email: '',
    password: '',
    name: '',
  };

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(inputValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(values);
  };

  useEffect(() => {
    resetForm(inputValues);
    setServerError({});
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      serverError={serverError}
    >
      <label className="modal__label">
        Email{' '}
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <span
          className="modal__input-error modal__input-error_visible"
          id="email-error"
        >
          {errors.email}
        </span>
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input modal__input-password"
          id="user-password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={values.password}
          required
        />
        <span className="modal__input-error" id="password-error">
          {errors.password}
        </span>
      </label>
      <div className="modal__buttons-wrapper">
        <button
          type="submit"
          className={`modal__form-button ${
            isValid ? 'modal__form-button_filled' : ''
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          className="modal__or-signup-button"
          onClick={handleRegisterClick}
        >
          or
          <span className="modal__or-signup-button_span"> Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
