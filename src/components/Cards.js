import React from "react";
import "../styles/Cards.scss";

function Cards() {
  return (
    <div className="wrapper">
      <div className="slogan">
        <h3>ПУТЕШЕСТВИЕ</h3>
        <p>на красную планету</p>
      </div>
      <div className="wrapper_cards">
        <div className="row_cards">
          <div className="card">
            <p>мы</p>
            <h1>1</h1>
            <p>на рынке</p>
          </div>
          <div className="card">
            <p>гарантируем</p>
            <h1>50%</h1>
            <p>безопасность</p>
          </div>
        </div>
        <div className="row_cards">
          <div className="card">
            <p>календарик за</p>
            <h1>2001</h1>
            <p>в подарок</p>
          </div>
          <div className="card">
            <p>путешествие</p>
            <h1>597</h1>
            <p>дней</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
