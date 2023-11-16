import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Products from "./Products";
import ProductSingle from "./ProductSingle";

function ShopPage() {
  const { parentCategory, childCategory, product } = useParams();
  // const allCategories = [
  //   "womens",
  //   "mens",
  //   "dresses",
  //   "top",
  //   "accessories",
  //   "shirts",
  // ];
  // const allProducts = [
  //   "summer-floral-maxi-dress",
  //   "vintage-lace-wedding-dress",
  //   "elegant-black-evening-dress",
  // ];
  // const isValidCategory = (category) => allCategories.includes(category);
  // const isValidProduct = (product) => allProducts.includes(product);

  // if (isValidCategory(parentCategory) && isValidCategory(childCategory)) {
  //   if (product && isValidProduct(product)) {
  //     return <ProductSingle />;
  //   } else if (!product) {
  //     return <Products />;
  //   }
  // }

  if (parentCategory && childCategory) {
    if (product) {
      return <ProductSingle />;
    } else if (!product) {
      return <Products />;
    }
  }

  return <NotFound />;
}

export default ShopPage;
