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
  const isValidCategory = (category) => {
    return allCategories.includes(category);
  };

  if (isValidCategory(parentCategory) && isValidCategory(childCategory)) {
    return <Products />;
  } else {
    return <NotFound />;
  }
}

export default ShopPage;
