import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Language",
      text: "HTML,CSS,JavaScript",
    },
    {
      image: ChooseMeals,
      title: "Framework/Libraries",
      text: " ReactJs ,MaterialUI, Bootstrap",
    },
    {
      image: DeliveryMeals,
      title: "Database",
      text: "SQL",
    },
    {
      image: DeliveryMeals,
      title: "Tools",
      text: "GitHub, Axios",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">TechStack</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
