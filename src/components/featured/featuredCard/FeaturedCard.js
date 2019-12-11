import React from "react";

export const FeaturedCard = ({ img, title, address }) => {
  return (
    <div class="col-10 col-md-6 col-lg-4 mx-auto my-3">
      <div class="card">
        <div class="img-container">
          <img src={img} alt="property image" class="card-img-top" />
        </div>

        <div class="card-body">
          <div class="card-title text-capitalize">
            <h5 class="mb-3">{title}</h5>
            <p>
              <span class="text-blue">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
