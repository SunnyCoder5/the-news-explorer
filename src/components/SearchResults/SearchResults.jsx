import React from "react";
import "./SearchResults.css";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import { useState } from "react";

function SearchResults({}) {
  return (
    <section className="search-results">
      <NewsCardsList />
      <button className="search-results__load-more">Show more</button>
    </section>
  );
}

export default SearchResults;
