import React from "react";
import RestaurantNavbar from "../components/reastaurant-navbar";
import Header from "../components/header";
import Title from "../components/title";
import Rating from "../components/rating";
import Description from "../components/description";
import Images from "../components/images";
import Reviews from "../components/reviews";
import ReservationCard from "../components/reservation-card";

const RestaurantDetails = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
