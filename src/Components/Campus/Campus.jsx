import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

import "./Campus.css";
function Campus() {
  return (
    <div className="campus">
      <div className="campus-text">
        <h1>Gallary</h1>
        <p>Campus Photos</p>
      </div>
      <div className="campus-box">
        <div className="campus-images">
          <img src={gallery_1} alt="" />
        </div>
        <div className="campus-images">
          <img src={gallery_2} alt="" />
        </div>
        <div className="campus-images">
          <img src={gallery_3} alt="" />
        </div>
        <div className="campus-images">
          <img src={gallery_4} alt="" />
        </div>
      </div>
      <button className="btn">
        See More Here
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
}

export default Campus;
