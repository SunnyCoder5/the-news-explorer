import './NewsCard.css';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CurrentPageContext } from '../../contexts/CurrentPageContext';

function NewsCard({
  handleLoginClick,
  isLoggedIn,
  item,
  handleSaveItem,
  handleRemoveSave,
}) {
  //console.log('News item data:', JSON.stringify(item, null, 2));

  const { pathname } = useLocation();

  const currentPage = useContext(CurrentPageContext);
  //const fallbackImage = 'https://placehold.co/600x400?text=No+Image';

  const onSave = () => {
    handleSaveItem(item);
  };

  const onRemove = () => {
    handleRemoveSave(item);
    item.isSaved = false;
  };

  const fixDate = (iso) => {
    if (!iso) return '';
    const split = iso.split(/\D+/);
    const parsed = new Date(Date.UTC(split[0], --split[1], split[2]));
    const month = parsed.toLocaleString('default', { month: 'long' });
    const day = parseInt(split[2]);
    const year = split[0];
    return `${month} ${day}, ${year}`;
  };

  return (
    <li className="card">
      <div className={`card__header card__header_${currentPage}`}>
        {isLoggedIn ? (
          pathname === '/' ? (
            <button
              className={`${
                item.isSaved
                  ? 'card__save-btn card__save-btn_checked'
                  : 'card__save-btn card__save-btn_unchecked'
              } `}
              onClick={onSave}
            ></button>
          ) : (
            <>
              <p className="card__keyword">{item.keyword}</p>
              <button className="card__delete_btn" onClick={onRemove}>
                <p className="card__delete-tooltip card__delete-tooltip-visible">
                  Remove from saved
                </p>
              </button>
            </>
          )
        ) : (
          <>
            <button
              className="card__save-btn card__save-btn_unchecked"
              onClick={handleLoginClick}
            >
              <p className="card__signin-tooltip card__signin-tooltip-visible">
                Sign in to save articles
              </p>
            </button>
          </>
        )}
      </div>
      <img
        className="card__image"
        src={item.urlToImage /*|| fallbackImage*/}
        alt={item.title}
      />
      <div className="card__content">
        <div className="card__text">
          <p className="card__date">{fixDate(item.publishedAt)}</p>
          <h3 className="card__title">{item.title}</h3>
          <p className="card__preview">{item.description}</p>
        </div>
        <p className="card__source">{item.source?.name?.toUpperCase() || ''}</p>
      </div>
    </li>
  );
}

export default NewsCard;
