import { NavLink, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const NavBar = ({ cartCount }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-black transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between px-5 py-3 mx-auto">
        <Link to="/" className="text-2xl ">
          AURA SHOP
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/product" className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/checkout" className={linkClass}>
            Checkout
          </NavLink>

          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>

          <NavLink to="/order" className={linkClass}>
            Order
          </NavLink>

          {/* Cart */}
          <Link to="/cart" className="relative font-medium">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-800"
          >
            <div className="w-8 h-8 bg-black border rounded-full border-primary-500" />
            <span className="text-sm font-semibold">Simbu</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
