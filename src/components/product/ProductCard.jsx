import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="p-4 transition bg-white border cursor-pointer rounded-xl hover:shadow-sm "
    >
      
      {/* Image */}
      <div className="flex items-center justify-center h-40 p-4 rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Title */}
      <h2 className="mt-3 text-sm font-medium text-gray-800 line-clamp-1">
        {product.title}
      </h2>

      {/* Price */}
      <p className="mt-1 font-semibold text-gray-900">
        ₹{product.price}
      </p>

      {/* Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAdd();
        }}
        className="w-full py-2 mt-3 text-sm font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;