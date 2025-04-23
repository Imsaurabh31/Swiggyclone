import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantDetails =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;

  const name = restaurantDetails?.name || "Restaurant";
  const cuisines = restaurantDetails?.cuisines || [];
  const costForTwoMessage = restaurantDetails?.costForTwoMessage || "";

  // Get itemCards safely
  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardsGroupMap?.REGULAR
  )?.groupedCard?.cardsGroupMap?.REGULAR?.cards;

  const menuItemsCard = regularCards?.find(
    (c) => c?.card?.card?.itemCards
  )?.card?.card;

  const itemCards = menuItemsCard?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

