import React from "react";
import "./article.css";

function Article({ imageUrl, date, title }) {
    return (
        <div className="gpt__blog-container_article">
            <div className="gpt__blog-container_article-image">
                <img src={ imageUrl } alt="blog image" />
            </div>
            <div className="gpt__blog-container_article-content">
                <p>{ date }</p>
                <h3>{ title }</h3>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}

export default Article;
