import React from "react";
import Header from "./components/header";
import SearchSideBar from "./components/search-sidebar";
import RestaurantCard from "./components/restaurant-card";

const Search = () => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Search;
