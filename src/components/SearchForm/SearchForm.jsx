import "./SearchForm.css";

function SearchForm() {
  return (
    <form>
      <label className="searchForm__label">
        <input type="text" placeholder="Enter topic" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
