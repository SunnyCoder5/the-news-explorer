import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import React, { useState, useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onLogIn,
  openRegisterModal,
  closeActiveModal,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setData({ email: "", password: "" });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn(data);
  };

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, email: e.target.value }))
          }
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
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, password: e.target.value }))
          }
          required
        />
      </label>
      <div className="modal__buttons-wrapper">
        <button type="submit" className="modal__form-button">
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
