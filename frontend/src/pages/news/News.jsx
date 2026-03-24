import { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/news")
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div className="news">
      <h1>Latest Movie News</h1>

      <div className="news-row">
        {news.map((item, index) => (
          <div
            className="news-card"
            key={index}
            onClick={() => window.open(item.url, "_blank")}
          >
            <img
              src={
                item.urlToImage
                  ? item.urlToImage.replace("http://", "https://")
                  : "https://via.placeholder.com/300"
              }
              alt=""
            />

            <div className="news-overlay">
              <h3>{item.title}</h3>
              <p>
                {item.description
                  ? item.description.slice(0, 70)
                  : "Click to read more..."}
                ...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;