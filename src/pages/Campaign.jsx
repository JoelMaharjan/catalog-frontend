import React from "react";
import Card from "../components/Card";
import { campaignData } from "../utils/campaignData";

function Campaign() {
  return (
    <div className="campaign">
      <div className="campaign-content">
        <div className="content-row">
          <p className="campaign-heading">Campaigns</p>
          <p className="sub-text">
            We aim to stop public funds siphoning off and we have a plan that
            will help. We are working at the national and EU levels to advance.
          </p>
        </div>
      </div>
      <div className="row">
        {campaignData.map((data, index) => (
          <div className="campaign-card" key={index}>
            <Card>
              <img src={data.image} alt="campaign-images" />
              <div className="card-items">
                <p className="card-title">{data.title}</p>
                <p className="card-text">{data.text}</p>
                <a href="#card" className="card-link">
                  {data.link}
                  {data.icon}
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campaign;
