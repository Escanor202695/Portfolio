import React from "react";
import Review from "../Components/reusable/review";

function Reviews(props) {
  return (
    <div
    className="relative w-100 flex flex-col justify-center items-center py-12"
  >
    <div
      className="title relative text-black text-4xl font-semibold align-center md:mb-20"
      data-aos="zoom-in-right"
      data-aos-duration="500"
      data-aos-once="true"
    >
      Reviews
    </div>
   <div className="md:hidden mt-10 services flex flex-col w-screen space-y-2">
      <Review position="start" review="sakib is the best freelancer in the world . his skill is phenomenal. such a developer is blessing to the modern world."/>
      <Review position="end" review="sakib is the best freelancer in the world . his skill is phenomenal. such a developer is blessing to the modern world."/>
      <Review position="start" review="sakib is the best freelancer in the world . his skill is phenomenal. such a developer is blessing to the modern world."/>
      <Review position="end" review="sakib is the best freelancer in the world . his skill is phenomenal. such a developer is blessing to the modern world."/>
      <Review position="start" review="sakib is the best freelancer in the world . his skill is phenomenal. such a developer is blessing to the modern world."/>
   </div>
  </div>
  );
}

export default Reviews;
