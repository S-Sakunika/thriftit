import { useParams } from "react-router-dom";

function Products() {
  const { category } = useParams();

  return <div>{category}</div>;
}

export default Products;
