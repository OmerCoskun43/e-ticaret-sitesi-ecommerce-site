import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
      </div>
      <div className="descriptionbox-description">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia
          unde libero ipsum praesentium sequi quasi dicta repudiandae quia,
          quaerat et suscipit, a excepturi architecto perspiciatis est deleniti
          accusantium debitis accusamus. A consequatur quibusdam incidunt dicta,
          maiores facere dolorem iste suscipit natus qui numquam possimus nulla
          est quae, quis reiciendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          aspernatur ut at ex deserunt facere, possimus modi ea, illum minus
          vitae animi, exercitationem soluta rem eligendi! Quos similique
          dignissimos sapiente, quas enim vitae voluptas commodi explicabo
          laboriosam libero ducimus voluptatum distinctio numquam asperiores et
          laudantium perspiciatis recusandae iste cupiditate neque.
        </p>
      </div>
    </div>
  );
};

export default Description;
