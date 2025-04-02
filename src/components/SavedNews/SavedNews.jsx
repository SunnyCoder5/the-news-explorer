import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Header from '../Header/Header';
//import { defaultNewsItems } from '../../utils/constants';
import NewsCard from '../NewsCard/NewsCard';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews({
  isLoggedIn,
  onLogout,
  handleRemoveSave,
  savedItems,
  handleMenuClick,
  isOpen,
  searchResults,
  handleSaveItem,
}) {
  const keywords = [];
  const currentUser = useContext(CurrentUserContext);
  console.log(
    'Filtered items:',
    savedItems.filter((item) => item.owner === currentUser._id)
  );
  return (
    <div className="saved-news__container">
      <Header isLoggedIn={isLoggedIn} handleMenuClick={handleMenuClick} />
      <SavedNewsHeader
        onLogout={onLogout}
        totalSaved={savedItems.length}
        keywords={keywords}
        isOpen={isOpen}
      />
      <ul className="saved-news__list">
        {savedItems &&
          savedItems.map((item) => {
            return (
              <NewsCard
                handleSaveItem={handleSaveItem}
                key={item._id || Math.random()}
                item={item}
                handleRemoveSave={handleRemoveSave}
                isLoggedIn={isLoggedIn}
                searchResults={searchResults}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default SavedNews;
