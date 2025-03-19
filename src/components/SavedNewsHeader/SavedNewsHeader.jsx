import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

function SavedNewsHeader({ totalLiked, keywords }) {
  return (
    <header className="saved-news__header">
      <div className="saved-news__header_text">
        <p className="saved-news__header_subtitle">Saved articles</p>
        <p className="saved-news__header_info">
          Mariia, you have {totalLiked} saved articles
        </p>
        <p className="saved-news__header_keywords">
          "By keywords:{' '}
          <span className="saved-news__header_keywords_span">
            {' '}
            {keywords[0]} {keywords[1] ? `, ${keywords[1]}` : ''}
            {keywords[2] ? `, and ${keywords.length - 2} other` : ''}
          </span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
