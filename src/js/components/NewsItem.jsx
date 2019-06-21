import React from 'react';
const NewsItem = ({ article }) => (
 <article >
    <div className="article-wrapper">
       <h3 className="text-center">{article.strArtist}</h3>
       <img src={article.strArtistBanner} alt="" />
       <p className="text-center">{article.strBiographyEN}</p>
       <a href={article.strWebsite} target="_blank"> read more </a>
    </div>
 </article>
);
export default NewsItem ;