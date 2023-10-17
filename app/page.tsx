import Header from "./components/header";
import RestaurantCard from "./components/restaurant-card";
import { PrismaClient } from "@prisma/client";

const fetchRestaurants = async () => {
  const prisma = new PrismaClient();

  const restaurants = await prisma.restaurant.findMany();

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log(restaurants);
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
}
