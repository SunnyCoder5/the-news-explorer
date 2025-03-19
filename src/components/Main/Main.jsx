import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';

function Main({ handleSaveItem }) {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
        <SearchResults handleSaveItem={handleSaveItem} />
        <About />
      </div>
    </main>
  );
}

export default Main;
