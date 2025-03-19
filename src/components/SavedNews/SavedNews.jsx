import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Header from '../Header/Header';
import { defaultNewsItems } from '../../utils/constants';
import NewsCard from '../NewsCard/NewsCard';

import { useEffect } from 'react';

function SavedNews({ isLoggedIn, onLogout }) {
  const likedItems = defaultNewsItems.filter((item) => {
    return item.isLiked === true;
  });
  const keywords = [];
  likedItems.map((item) => {
    if (!keywords.includes(item.keyword)) keywords.push(item.keyword);
  });
  return (
    <div className="saved-news__container">
      <Header isLoggedIn={isLoggedIn} />
      <SavedNewsHeader
        onLogout={onLogout}
        totalLiked={likedItems.length}
        keywords={keywords}
      />
      <ul className="saved-news__list">
        {likedItems.map((item) => {
          return (
            <NewsCard
              key={item._id}
              item={item}
              defaultNewsItems={defaultNewsItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SavedNews;
