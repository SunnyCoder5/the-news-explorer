import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardsList.css";
import { defaultNewsItems } from "../../utils/constatnts";

function NewsCardsList({}) {
  return (
    <div className="news-cards-section">
      <h2 className="news-cards-section__title">Search results</h2>
      <ul className="news-cards__list">
        {defaultNewsItems.map((item) => {
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

export default NewsCardsList;
