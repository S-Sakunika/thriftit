import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Products from "./Products";

function ShopPage() {
  const { parentCategory, childCategory } = useParams();
  const allCategories = [
    "womens",
    "mens",
    "dresses",
    "top",
    "accessories",
    "shirts",
  ];
  const isValidCategory = (category) => allCategories.includes(category);

  return isValidCategory(parentCategory) && isValidCategory(childCategory) ? (
    <Products />
  ) : (
    <NotFound />
  );
}

export default ShopPage;
