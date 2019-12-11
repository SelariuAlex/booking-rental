import React from "react";
import { FeaturedCard } from "./featuredCard/FeaturedCard";
import FeaturedImg1 from "../../images/featured-1.jpeg";
import FeaturedImg2 from "../../images/featured-2.jpeg";
import FeaturedImg3 from "../../images/featured-3.jpeg";

export const Featured = () => {
  return (
    <section id="featured" class="featured py-5">
      <div class="container">
        <div class="row">
          <div class="col text-center section-title mb-3">
            <h2 class="text-blue text-capitalize">Featured properties</h2>
            <p class="w-75 mx-auto">Our recommendations</p>
          </div>
        </div>
        <div class="row">
          <FeaturedCard
            img={FeaturedImg1}
            title="excellent property in Timisoara"
            address="Timisoara"
          />
          <FeaturedCard
            img={FeaturedImg2}
            title="excellent property in Timisoara"
            address="Timisoara"
          />
          <FeaturedCard
            img={FeaturedImg3}
            title="excellent property in Oradea"
            address="Oradea"
          />
        </div>
      </div>
    </section>
  );
};
