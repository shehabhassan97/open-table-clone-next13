"use client";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
      />
      <button
        onClick={() => router.push("/search")}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        Lets go
      </button>
    </div>
  );
};

export default SearchBar;
