import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardsList.css";

function NewsCardsList({}) {
  return (
    <div className="news-cards-section">
      <h2 className="news-cards-section__title">Search results</h2>
      <ul className="cards__list">
        <NewsCard />
      </ul>
    </div>
  );
}

export default NewsCardsList;
