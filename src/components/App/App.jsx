import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { pathname } = useLocation();

  return (
    <div className="page">
      <div className="page__content">
        <div
          className={` ${
            pathname === "/saved-news"
              ? "page__background_saved"
              : "page__background"
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                </>
              }
            />

            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews />
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
      </div>
    </div>
  );
}

export default App;
