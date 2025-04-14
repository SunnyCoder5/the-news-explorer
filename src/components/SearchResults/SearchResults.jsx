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
  handleRemoveSave,
  savedItems,
}) {
  const [numResults, setNumResults] = useState(3);
  return (
    <section className="search-results">
      <NewsCardsList
        handleLoginClick={handleLoginClick}
        numResults={numResults}
        handleSaveItem={handleSaveItem}
        isLoggedIn={isLoggedIn}
        searchResults={searchResults}
        savedItems={savedItems}
        handleRemoveSave={handleRemoveSave}
      />
      <button
        className="search-results__load-more"
        onClick={() => setNumResults(numResults + 3)}
        disabled={numResults >= searchResults.length}
      >
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
