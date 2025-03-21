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
import InfoModal from '../InfoModal/InfoModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeModal, setActiveModal] = useState('success');

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
    item.isLiked = !item.isLiked;
    if (item.isLiked && !likedItems.includes(item))
      setLikedItems([item, ...likedItems]);
    else if (!item.isLiked && likedItems.includes(item)) {
      handleRemoveLike(item);
    }
  };

  const handleRemoveLike = (card) => {
    setLikedItems(
      likedItems.filter((item) => {
        return item !== card;
      })
    );
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
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    onLogout={onLogout}
                    handleRemoveLike={handleRemoveLike}
                  />
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
        {activeModal === 'signUp' && (
          <RegisterModal
            isOpen={activeModal === 'signUp'}
            closeActiveModal={closeActiveModal}
            onSignUp={onSignUp}
            openLoginModal={handleLoginModal}
          />
        )}
        {activeModal === 'login' && (
          <LoginModal
            isOpen={activeModal === 'login'}
            closeActiveModal={closeActiveModal}
            onSubmit={handleLogin}
            openRegisterModal={handleRegisterModal}
          />
        )}
        {activeModal === 'success' && (
          <InfoModal
            title="Registration successfully completed!"
            buttonText="Sign in"
            onClose={closeActiveModal}
            handleLoginClick={handleLoginClick}
            isOpen={activeModal === 'success'}
          />
        )}
      </div>
    </div>
  );
}

export default App;
