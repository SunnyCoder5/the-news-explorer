import './NewsCard.css';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultNewsItems } from '../../utils/constants';

import { CurrentPageContext } from '../../contexts/CurrentPageContext';

import image1 from '../../assets/image_01.png';
import image2 from '../../assets/image_02.png';
import image3 from '../../assets/image_03.png';
import image4 from '../../assets/image_04.png';
import image5 from '../../assets/image_05.png';

function NewsCard({
  handleLoginClick,
  isLoggedIn,
  defaultNewsItems,
  item,
  handleLikeItem,
}) {
  const { pathname } = useLocation();

  const card = item;
  const images = [image1, image2, image3, image4, image5];

  const currentPage = useContext(CurrentPageContext);
  const [isClicked, setIsClicked] = useState(false);

  const onLike = () => {
    handleLikeItem(item);
    item.isLiked = !item.isLiked;
  };

  const onSave = () => {
    handleSaveItem(item);
  };

  const onRemove = () => {
    handleRemoveLike(item);
    item.isLiked = false;
    handle;
  };

  return (
    <li className="card">
      <div className={`card__header card__header_${currentPage}`}>
        {isLoggedIn ? (
          pathname === '/' ? (
            <button
              className={`${
                item.isLiked
                  ? 'card__save-btn card__save-btn_checked'
                  : 'card__save-btn card__save-btn_unchecked'
              } `}
              onClick={onLike}
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
      <img className="card__image" src={images[item._id]} alt={item.title} />
      <div className="card__content">
        <div className="card__text">
          <p className="card__date">{item.publishedAt}</p>
          <p className="card__title">{item.title}</p>
          <p className="card__preview">{item.content}</p>
        </div>
        <p className="card__source">{item.source.name.toUpperCase()}</p>
      </div>
    </li>
  );
}

export default NewsCard;
