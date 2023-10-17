import React from "react";
import Header from "../components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenTable | Restaurant",
  description: "A OpenTable clone created by NextJs 13 (app router)",
};

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
