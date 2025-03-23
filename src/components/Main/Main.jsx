import './Main.css';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import NothingFound from '../NothingFound/NothingFound';

function Main({ handleLoginClick, isLoggedIn, handleLikeItem }) {
  const [searchState, setSearchState] = useState('results');

  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
        {searchState === 'searching' && <Preloader />}
        {searchState === 'nothingFound' && <NothingFound />}{' '}
        {searchState === 'results' && (
          <SearchResults
            handleLoginClick={handleLoginClick}
            isLoggedIn={isLoggedIn}
            handleLikeItem={handleLikeItem}
          />
        )}
        <About />
      </div>
    </main>
  );
}

export default Main;
