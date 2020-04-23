import React from "react";
import BlogNav from "../BlogNav/BlogNav";
import ArticleCard from "../ArticleCard/ArticleCard";

const MainSection = () => {
  return (
    <>
      <main role="main" className="main-section">
        <div className="main-section-small">
          Discover more about mens health
        </div>
        <div className="main-section-heading-primary">
          Explore the hims journal
        </div>
        <BlogNav />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
    </>
  );
};

export default MainSection;
