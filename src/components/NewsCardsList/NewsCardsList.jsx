import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardsList.css';
import { defaultNewsItems } from '../../utils/constants';

function NewsCardsList({
  handleLoginClick,
  numResults,
  handleLikeItem,
  handleSaveItem,
  isLoggedIn,
  handleRemoveLike,
}) {
  return (
    <div className="news-cards-section">
      <ul className="news-cards__list">
        {defaultNewsItems
          .map((item) => {
            return (
              <NewsCard
                key={item._id}
                item={item}
                handleLoginClick={handleLoginClick}
                handleLikeItem={handleLikeItem}
                defaultNewsItems={defaultNewsItems}
                handleSaveItem={handleSaveItem}
                isLoggedIn={isLoggedIn}
                handleRemoveLike={handleRemoveLike}
              />
            );
          })
          .slice(0, numResults)}
      </ul>
    </div>
  );
}

export default NewsCardsList;
