import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Header from '../Header/Header';
//import { defaultNewsItems } from '../../utils/constants';
import NewsCard from '../NewsCard/NewsCard';
import { useContext, useEffect } from 'react';
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

  useEffect(() => {
    savedItems
      .filter((item) => {
        return item.owner === currentUser._id;
      })
      .map((item) => {
        if (!keywords.includes(item.keyword)) keywords.push(item.keyword);
      });
  });

  return (
    <div className="saved-news__container">
      <div className="saved-news__content">
        <Header
          isLoggedIn={isLoggedIn}
          handleMenuClick={handleMenuClick}
          onLogout={onLogout}
        />
        <SavedNewsHeader
          totalSaved={savedItems.length}
          keywords={keywords}
          isOpen={isOpen}
        />
      </div>
      <div className="saved-news__background">
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
    </div>
  );
}

export default SavedNews;
