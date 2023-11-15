import { useParams, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "./NotFound";
import ManageItem from "./ManageItem";
import MyItems from "./MyItems";

function UserAccountPage() {
  const { slug } = useParams();
  let page;

  switch (slug) {
    case "profile":
      page = <Profile />;
      break;

    case "my-items":
      page = <MyItems />;
      break;

    case "my-orders":
      page = <Profile />;
      break;

    case "order-history":
      page = <Profile />;
      break;

    default:
      page = <NotFound />;
      break;
  }

  return (
    <Routes>
      <Route path="/" element={page} />
      <Route path=":action" element={<ManageItem />} />
      <Route path="update/:id" element={<ManageItem />} />
    </Routes>
  );
}

export default UserAccountPage;
