import { ArrowForward } from "@mui/icons-material";

function AboutUs({ contentData }) {
  const content = contentData[0].content[0];
  const imgCol1 = contentData[0].images[0].col1;
  const imgCol2 = contentData[0].images[0].col2;

  return (
    <div className="about-us">
      <div className="about-content">
        <p className="about-heading">{content.heading}</p>
        <p className="about-subheading">{content.subHeading}</p>
        <a href="#aboutus" className="about-link">
          {content.link}
          <ArrowForward style={{ fontSize: 20 }} />
        </a>
      </div>
      <div className="about-items">
        <div className="about-col">
          {imgCol1.map((item, index) => {
            return (
              <div key={index}>
                <div className="image-container">
                  <div className="img-hover-zoom">
                    <img src={item.image} alt="" />
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="about-col" style={{ marginTop: 140 }}>
          {imgCol2.map((item, index) => {
            return (
              <div key={index}>
                <div className="image-container">
                  <div className="img-hover-zoom">
                    <img src={item.image} alt="" />
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
