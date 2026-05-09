import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  console.log(cartCount);

  return (
    <>
      <NavBar cartCount={cartCount} />
      <main className="container p-5 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
