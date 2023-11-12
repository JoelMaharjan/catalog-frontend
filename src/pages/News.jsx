import React from "react";
import { newsData } from "../utils/newsData";
import { ArrowForward } from "@mui/icons-material";
import Button from "../components/Button";
function News() {
  const row1 = newsData[0].row1;
  const row2 = newsData[0].row2;

  return (
    <div className="news">
      <div className="news-wrapper">
        <p className="news-heading">News</p>
        <p className="news-subheading">
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
        <div className="news-items">
          <div className="news-row">
            {row1.map((item, index) => (
              <div className="news-card" key={index}>
                <div className="card-container">
                  <img src={item.image} alt="card-images" />
                  <p className="card-heading">{item.heading}</p>
                  <p className="card-text"> {item.text}</p>
                  <a href="#news">
                    {item.link}
                    <ArrowForward style={{ fontSize: 18 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="news-row">
            {row2.map((item, index) => (
              <div className="news-card" key={index}>
                <div className="card-container">
                  <img src={item.image} alt="card-images" />
                  <p className="card-heading">{item.heading}</p>
                  <p className="card-text"> {item.text}</p>
                  <a href="#news">
                    {item.link}
                    <ArrowForward style={{ fontSize: 18 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button>
          <p>View all News</p>
        </Button>
      </div>
    </div>
  );
}

export default News;
