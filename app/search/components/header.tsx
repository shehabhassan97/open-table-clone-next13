"use client";

import SearchBar from "@/app/components/search-bar";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <SearchBar />
    </div>
  );
};

export default Header;
