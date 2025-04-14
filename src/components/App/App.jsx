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
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
//import { defaultNewsItems } from '../../utils/constants';
import { CurrentPageContext } from '../../contexts/CurrentPageContext.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import InfoModal from '../InfoModal/InfoModal';
import MobileMenu from '../MobileMenu/MobileMenu';
import { getNews } from '../../utils/NewsApi.js';
import { saveItem, deleteItem, getSavedNews } from '../../utils/MainApi.js';
import { authorize, register, checkToken } from '../../utils/auth.js';

import * as auth from '../../utils/auth.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeModal, setActiveModal] = useState('');

  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);

  const [savedItems, setSavedItems] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [searchError, setSearchError] = useState(false);
  const [serverError, setServerError] = useState({
    loginError: '',
    regError: '',
  });

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setActiveModal('login');
  };

  const token = localStorage.getItem('jwt');

  const closeActiveModal = () => {
    setActiveModal('');
  };

  const handleRegisterClick = () => {
    setActiveModal('signUp');
  };

  const handleSaveItem = (item) => {
    item.isSaved = !item.isSaved;
    item.keyword = keyword;
    isItemInArray(item, savedItems)
      ? console.log('Item already saved')
      : saveItem(item, token)
          .then((card) => {
            item._id = card.data._id;
            setSavedItems([card.data, ...savedItems]);
            console.log('Article saved');
          })
          .catch((err) => {
            console.error('Failed to save article', err);
          });
    if (item.isSaved && !savedItems.includes(item)) {
      setSavedItems([item, ...savedItems]);
    }
  };

  const handleRemoveSave = (item) => {
    deleteItem(item, token)
      .then(() => {
        setSavedItems(
          savedItems.filter((card) => {
            return card.url !== item.url;
          })
        );
      })
      .catch((err) => {
        console.error('Failed to unsave article', err);
      });
    item.isSaved = false;
  };

  const handleMenuClick = () => {
    setActiveModal('menu');
  };

  const onSearch = (topic) => {
    setKeyword(topic);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword) {
      setIsLoading(false);
      return;
    }
    getNews(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        console.log(searchResults);
      })
      .catch((err) => {
        console.error('Failed to perform search', err);
        setSearchError(true);
      })
      .finally(() => setIsLoading(false));
  }, [keyword]);

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

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPage('home');
    } else if (location.pathname === '/saved-news') {
      setCurrentPage('saved-news');
    }
  }, [location]);

  const { pathname } = useLocation();

  const onLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    setIsLoggedIn(false);
  };

  const onLogIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    authorize({ email, password })
      .then((res) => {
        if (res.token) {
          setIsLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          setCurrentUser({ username: res.username, _id: res._id });
          closeActiveModal();
        }
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          loginError: 'Incorrect email or password',
        });
        console.error('Failed to login', err);
      });
  };

  const onSignUp = ({ email, password, name }) => {
    console.log('Starting registration...');
    register({ email, password, name })
      .then((res) => {
        console.log('Registration response:', res);
        setActiveModal('success');
        console.log('Current activeModal value:', activeModal); // Add this
      })
      .catch((err) => {
        setServerError({
          ...serverError,
          regError: 'A user with this email already exists',
        });
        console.error('Failed to register', err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      return;
    }
    checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser({
          name: res.data.name,
          _id: res.data._id,
        });
        getSavedNews(token)
          .then((items) => {
            setSavedItems(items.data.reverse());
          })
          .catch((err) => {
            console.error('Failed to receive saved news items');
          });
      })
      .catch((err) => {
        console.error('Authorization failed', err);
      });
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentPageContext.Provider value={currentPage}>
        <div className="page">
          <div className="page__content">
            <div
              className={`page__background ${
                pathname === '/saved-news' && 'page__background_page_saved'
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
                        handleMenuClick={handleMenuClick}
                        isOpen={activeModal !== ''}
                        onLogout={onLogout}
                      />
                      <Main
                        handleLoginClick={handleLoginClick}
                        handleSaveItem={handleSaveItem}
                        searchResults={searchResults}
                        keyword={keyword}
                        isLoading={isLoading}
                        onSearch={onSearch}
                        searchError={searchError}
                        handleRemoveSave={handleRemoveSave}
                        isLoggedIn={isLoggedIn}
                        savedItems={savedItems}
                      />
                    </>
                  }
                />

                <Route
                  path="/saved-news"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <section className="saved-news">
                        <SavedNews
                          isLoggedIn={isLoggedIn}
                          savedItems={savedItems}
                          onLogout={onLogout}
                          handleRemoveSave={handleRemoveSave}
                          handleMenuClick={handleMenuClick}
                          searchResults={searchResults}
                        />
                      </section>
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
                onClose={closeActiveModal}
                onSignUp={onSignUp}
                openLoginModal={handleLoginClick}
                serverError={serverError.regErrorError}
                setServerError={setServerError}
              />
            )}
            {activeModal === 'login' && (
              <LoginModal
                isOpen={activeModal === 'login'}
                onClose={closeActiveModal}
                handleRegisterClick={handleRegisterClick}
                onLogIn={onLogIn}
                serverError={serverError.loginError}
                setServerError={setServerError}
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
          {activeModal === 'menu' && (
            <MobileMenu
              isOpen={activeModal === 'menu'}
              onClose={closeActiveModal}
              handleLoginClick={handleLoginClick}
              onLogout={onLogout}
              isLoggedIn={isLoggedIn}
            />
          )}
        </div>
      </CurrentPageContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
