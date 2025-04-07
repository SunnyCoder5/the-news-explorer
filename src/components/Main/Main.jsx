import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function Main({
  handleLoginClick,
  onSearch,
  searchResults,
  keyword,
  isLoading,
  handleSaveItem,
  searchError,
  isLoggedIn,
  savedItems,
}) {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
        {isLoading && <Preloader />}
        {searchResults.length === 0 && keyword !== '' && !isLoading && (
          <NothingFound searchError={searchError} />
        )}
        {searchResults.length !== 0 && keyword !== '' && !isLoading && (
          <SearchResults
            handleLoginClick={handleLoginClick}
            handleSaveItem={handleSaveItem}
            searchResults={searchResults}
            isLoggedIn={isLoggedIn}
            savedItems={savedItems}
          />
        )}
        <About />
      </div>
    </main>
  );
}

export default Main;
