import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 shadow">
      <div className="container flex items-center justify-between px-5 py-3 mx-auto text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl text-white ">
          AURA SHOP
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Login */}
          <button className="px-4 py-1 font-medium text-blue-600 transition bg-white rounded hover:bg-gray-100">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
