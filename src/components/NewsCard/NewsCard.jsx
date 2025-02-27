import "./NewsCard.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import image1 from "../../assets/image_01.png";
import image2 from "../../assets/image_02.png";
import image3 from "../../assets/image_03.png";
import image4 from "../../assets/image_04.png";
import image5 from "../../assets/image_05.png";

function NewsCard({ handleLoginClick, defaultNewsItems, item, isLoggedIn }) {
  const { pathname } = useLocation();

  const card = item;
  const images = [image1, image2, image3, image4, image5];

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      card.isLiked = !card.isLiked;
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <div className="card">
      <div className="card__header ">
        {isLoggedIn ? (
          pathname === "/" ? (
            <button
              className={`${
                card.isLiked
                  ? "card__save-btn card__save-btn_checked"
                  : "card__save-btn card__save-btn_unchecked"
              } `}
              onClick={() => setIsClicked(true)}
            ></button>
          ) : (
            <>
              <p className="card__keyword">{card.keyword}</p>

              <button className="card__delete_btn">
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
      <div className="card__content">
        <img className="card__image" src={images[card._id]} alt={card.title} />
        <div className="card__text">
          <p className="card__date">{card.publishedAt}</p>
          <p className="card__title">{card.title}</p>
          <p className="card__preview">{card.content}</p>
          <p className="card__source">{card.source.name.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
