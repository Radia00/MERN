import { useState, useEffect } from "react";

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-10-04&sortBy=publishedAt&apiKey=89b6534eee8d431c959b7ee679e43c29"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Blog</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data &&
          data.articles.map((article, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{article.publishedAt}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
