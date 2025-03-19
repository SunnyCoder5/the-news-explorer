import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import { defaultNewsItems } from '../../utils/constants';

import { CurrentPageContext } from '../../contexts/CurrentPageContext.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [activeModal, setActiveModal] = useState('');

  const [currentPage, setCurrentPage] = useState('home');

  const [savedItems, setSavedItems] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [likedItems, setLikedItems] = useState(
    defaultNewsItems.filter((item) => {
      return item.isLiked === true;
    })
  );

  const navigate = useNavigate;

  const handleLoginClick = () => {
    setActiveModal('login');
    card;
  };

  const handleLogin = ({ email, password }) => {
    console.log(activeModal);
  };

  const closeActiveModal = () => {
    setActiveModal('');
  };

  const handleRegisterModal = () => {
    setActiveModal('signUp');
  };

  const handleLoginModal = () => {
    setActiveModal('login');
  };

  const handleLikeItem = (item) => {
    setLikedItems([item, ...likedItems]);
  };

  function isItemInArray(item, array) {
    return array.some((arrayItem) => item.url === arrayItem.url);
  }

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        closeActiveModal();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [activeModal]);

  const { pathname } = useLocation();

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  const onSignUp = ({ email, password, name, avatar }) => {
    const userProfile = { email, password, name, avatar };
    signUp(userProfile)
      .then((res) => {
        onLogIn({ email, password });
      })
      .catch((error) => {
        console.error('error at signing up', error);
      });
  };

  return (
    <div className="page">
      <div className="page__content">
        <div
          className={` ${
            pathname === '/saved-news'
              ? 'page__background_saved'
              : 'page__background'
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    isLoggedIn={isLoggedIn}
                    handleLoginClick={handleLoginClick}
                  />
                  <Main
                    isLoggedIn={isLoggedIn}
                    handleLoginClick={handleLoginClick}
                    handleLikeItem={handleLikeItem}
                  />
                </>
              }
            />

            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews isLoggedIn={isLoggedIn} onLogout={onLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                isLoggedIn ? (
                  <Navigate to="/saved-news" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </Routes>

          <Footer />
        </div>
        <RegisterModal
          isOpen={activeModal === 'signUp'}
          onClose={closeActiveModal}
          onSignUp={onSignUp}
          openLoginModal={handleLoginModal}
        />
        <LoginModal
          isOpen={activeModal === 'login'}
          closeActiveModal={closeActiveModal}
          onSubmit={handleLogin}
          openRegisterModal={handleRegisterModal}
        />
      </div>
    </div>
  );
}

export default App;
