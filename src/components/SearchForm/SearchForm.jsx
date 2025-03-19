import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <label className="search-form__label">
        <input
          type="text"
          placeholder="Enter topic"
          className="search-form__input"
        />
      </label>
      <button type="submit" className="search-form__submit-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
