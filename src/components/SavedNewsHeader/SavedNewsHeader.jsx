import Navigation from "../Navigation/Navigation";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <header className="saved-news__header">
      <div className="saved-news__header_text">
        <p className="saved-news__header_subtitle">Saved articles</p>
        <p className="saved-news__header_info">
          Mariia, you have 5 saved articles
        </p>
        <p className="saved-news__header_keywords">
          "By keywords: " : ""
          <span className="saved-news__header_keywords_span">Nature, Park</span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
