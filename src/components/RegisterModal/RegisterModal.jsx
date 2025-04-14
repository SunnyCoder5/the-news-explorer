import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';
import { useFormWithValidation } from '../hooks/useForm';

const RegisterModal = ({
  isOpen,
  buttonClass = 'modal__form-button',
  openLoginModal,
  onSignUp,
  setServerError,
  serverError,
  onClose,
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
    onSignUp(values);
  };

  useEffect(() => {
    resetForm(inputValues);
    setServerError({});
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Sign up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      serverError={serverError}
    >
      <label className="modal__label">
        Email*{' '}
        <input
          type="email"
          className="modal__input"
          id="email"
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
        Password*{' '}
        <input
          type="password"
          className="modal__input"
          id="password"
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
      <label className="modal__label">
        Username*{''}
        <input
          type="text"
          className="modal__input"
          id="registerName"
          name="name"
          placeholder="Enter your username"
          onChange={handleChange}
          value={values.name}
          required
        />
        <span className="modal__input-error" id="name-error">
          {errors.name}
        </span>
      </label>

      <div className="modal__buttons-wrapper">
        <button
          type="submit"
          className={`modal__form-button ${
            isValid ? 'modal__form-button_filled' : ''
          }`}
          disabled={!isValid}
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
