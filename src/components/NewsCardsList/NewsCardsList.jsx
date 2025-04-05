import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardsList.css';

function NewsCardsList({
  handleLoginClick,
  numResults,
  handleSaveItem,
  isLoggedIn,
  handleRemoveSave,
  searchResults,
  savedItems,
}) {
  console.log('First search result:', searchResults[0]);
  return (
    <section className="news-cards-section">
      <h2 className="news-cards-section__title">Search results</h2>
      <ul className="news-cards__list">
        {searchResults
          .map((item) => {
            savedItems.forEach((arrayItem) => {
              if (item.url === arrayItem.url) {
                item._id = arrayItem._id;
                item.isSaved = true;
              }
            });
            return (
              <NewsCard
                key={item.url}
                item={item}
                handleLoginClick={handleLoginClick}
                handleSaveItem={handleSaveItem}
                isLoggedIn={isLoggedIn}
                searchResults={searchResults}
                handleRemoveSave={handleRemoveSave}
              />
            );
          })
          .slice(0, numResults)}
      </ul>
    </section>
  );
}

export default NewsCardsList;
