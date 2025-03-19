import './SearchResults.css';
import { defaultNewsItems } from '../../utils/constants';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import { useState } from 'react';

function SearchResults({
  isLoggedIn,
  currentPage,
  handleLoginClick,
  handleLikeItem,
  handleSaveItem,
}) {
  const [numResults, setNumResults] = useState(3);
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardsList
        handleLoginClick={handleLoginClick}
        numResults={numResults}
        handleLikeItem={handleLikeItem}
        handleSaveItem={handleSaveItem}
      />
      <button
        className="search-results__load-more"
        onClick={() => setNumResults(numResults + 3)}
        disabled={numResults >= defaultNewsItems.length}
      >
        Show more
      </button>
    </div>
  );
}

export default SearchResults;
