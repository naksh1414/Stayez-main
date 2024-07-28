import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WishImg from "../../assets/wishlist.png";
import Card from "../../Components/Cards/WishLIstCard";

const Wish = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Load wishlist items from local storage
    const savedWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemoveFromWishlist = (property) => {
    // Check if property id is correctly identified
    console.log("Removing property:", property);

    // Find the index of the property to remove
    const index = wishlist.findIndex((item) => item.id === property.id);

    if (index !== -1) {
      // Create a copy of the wishlist array
      const newWishlist = [...wishlist];

      // Remove the item from the copy
      newWishlist.splice(index, 1);

      // Update state and local storage
      setWishlist(newWishlist);
      localStorage.setItem("Wishlist", JSON.stringify(newWishlist));
    } else {
      console.log("Property not found in wishlist:", property);
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
        <div className="flex flex-col md:flex-row justify-center w-full">
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
