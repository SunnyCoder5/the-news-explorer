import "./NewsCard.css";

function NewsCard() {
  return (
    <li className="card">
      <div className="card__content">
        <h3 className="card__date"></h3>
        <h2 className="card__title"></h2>
        <p className="card__body"></p>
      </div>
    </li>
  );
}

export default NewsCard;
