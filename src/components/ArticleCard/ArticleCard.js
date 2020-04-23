import React from "react";

const ArticleCard = () => {
  return (
    <>
      <article className="articlecard ">
        <div className="articlecard-wrapper ">
          <div className="articlecard-wrapper-image">
            {/* <img src={smapleimg} alt="article" /> */}
          </div>
          <div className="articlecard-wrapper-info">
            <div className="articlecard-wrapper-info-small">Well-Being</div>
            <div className="articlecard-wrapper-info-primary">
              Daily Cialis:Cost and Benefits of the Daily cialis
            </div>
            <div className="articlecard-wrapper-info-secondary">
              Cialis® is one of the most popular ED medications on the market.
              While you know it as "The Weekend Pill," it can also be taken
              daily
            </div>
            <div className="articlecard-wrapper-info-link">
              READ THIS ARTICLE
              <div className="underline-text"></div>
            </div>
          </div>
        </div>
        <div className="divider-down mb-5"></div>
      </article>
    </>
  );
};

export default ArticleCard;
