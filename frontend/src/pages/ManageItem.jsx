import { useParams } from "react-router-dom";
import Item from "../components/forms/Item";
import NotFound from "./NotFound";

function ManageItem() {
  const { action, id } = useParams();

  const page = action === "add-new" || id ? <Item /> : <NotFound />;

  return page;
}

export default ManageItem;
