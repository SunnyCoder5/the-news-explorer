import './SearchResults.css';
//import { defaultNewsItems } from '../../utils/constants';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import { useState } from 'react';

function SearchResults({
  isLoggedIn,
  currentPage,
  handleLoginClick,
  handleSaveItem,
  searchResults,
  savedItems,
}) {
  const [numResults, setNumResults] = useState(3);
  return (
    <div className="search-results">
      <NewsCardsList
        handleLoginClick={handleLoginClick}
        numResults={numResults}
        handleSaveItem={handleSaveItem}
        isLoggedIn={isLoggedIn}
        searchResults={searchResults}
        savedItems={savedItems}
      />
      <button
        className="search-results__load-more"
        onClick={() => setNumResults(numResults + 3)}
        disabled={numResults >= searchResults.length}
      >
        Show more
      </button>
    </div>
  );
}

export default SearchResults;
