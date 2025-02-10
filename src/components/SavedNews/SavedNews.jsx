import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Header from "../Header/Header";

function SavedNews({ isLoggedIn }) {
  return (
    <div className="saved-news__container">
      <Header isLoggedIn={isLoggedIn} />
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
