import React from "react";
import { resourcesData } from "../utils/resourcesData";
import Button from "../components/Button";

function Resources() {
  return (
    <div className="resources">
      <div className="resources-wrapper">
        <p className="resources-heading">Latest Resources</p>
        <p className="sub-text">
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
        <div className="resources-items">
          {resourcesData.map((item, index) => (
            <div className="resources-card" key={index}>
              <div className="card-container">
                <div className="image-placeholder">
                  <div className="image-container">
                    <img src={item.image} alt="card-images" />
                  </div>
                  <p>{item.imgText}</p>
                </div>
                <p className="card-title">{item.title}</p>
                <p className="card-description">{item.description}</p>
                <a href="#news">
                  {item.link}
                  {item.icon}
                </a>
              </div>
            </div>
          ))}
        </div>
        <Button>
          <p>View all resources</p>
        </Button>
      </div>
    </div>
  );
}

export default Resources;
