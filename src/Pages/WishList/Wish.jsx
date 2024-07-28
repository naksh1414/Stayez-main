import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WishImg from "../../assets/wishlist.png";
import Card from "../../Components/Cards/WishLIstCard";
import axiosInstance from "../../API/axiosConfig";

const Wish = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch wishlist items from the server
    const fetchWishlist = async () => {
      try {
        const response = await axiosInstance.get("/features/cart/"); // Replace with your API endpoint
        setWishlist(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (property) => {
    // Check if property id is correctly identified
    console.log("Removing property:", property);

    try {
      await axiosInstance.delete(`/features/cart/remove/${property.id}/`); // Replace with your API endpoint

      const index = wishlist.findIndex((item) => item.id === property.id);

      if (index !== -1) {
        const newWishlist = [...wishlist];

        newWishlist.splice(index, 1);

        setWishlist(newWishlist);
        localStorage.setItem("Wishlist", JSON.stringify(newWishlist));

        window.location.reload();
      } else {
        console.log("Property not found in wishlist:", property);
      }
    } catch (error) {
      console.error("Error removing property from wishlist:", error);
    }
  };

  return (
    <main className="flex flex-col items-center h-full p-5">
      <h1 className="text-white text-[2.4rem] md:text-[4rem] font-semibold underline leading-loose">
        Wish<span className="text-[#03A9F4]">List</span>
      </h1>

      {wishlist.length === 0 ? (
        <div>
          <img
            className="h-[300px] md:h-[500px] w-[300px] md:w-[500px] mb-8"
            src={WishImg}
            alt="Wishlist"
          />
          <h1 className="text-white text-center text-[1.2rem] md:text-[2rem]">
            Wishlist is <span className="text-[#03A9F4]">Empty</span>
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((property) => (
            <Card
              key={property.id}
              property={property}
              removeFromWishList={() => handleRemoveFromWishlist(property)}
            />
          ))}
        </div>
      )}
      <NavLink to="/flats" className="mt-5">
        <h1 className="text-[#03A9F4] text-[1.2rem] md:text-[2rem] underline">
          See PG&apos;s
        </h1>
      </NavLink>
    </main>
  );
};

export default Wish;
