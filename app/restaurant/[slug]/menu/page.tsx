import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";
import MenuHeader from "../../components/menu-header";
import RestaurantNavbar from "../../components/reastaurant-navbar";
import Menu from "../../components/menu";

const RestaurantMenu = () => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar />
      <Menu />
    </div>
  );
};

export default RestaurantMenu;
