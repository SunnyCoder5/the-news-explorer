import './SearchForm.css';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [topic, setTopic] = useState('');
  const [formError, setFormError] = useState('');

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    setFormError(''); // Clear error when user types
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setFormError('Please enter a keyword');
      return;
    }
    onSearch(topic);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-form__search-bar">
        <input
          type="text"
          placeholder="Enter topic"
          className="search-form__input"
          onChange={handleTopicChange}
          value={topic}
        />
        <button type="submit" className="search-form__submit-button">
          Search
        </button>
      </div>
      {formError && <p className="search-form_error">{formError}</p>}
    </form>
  );
}

export default SearchForm;
