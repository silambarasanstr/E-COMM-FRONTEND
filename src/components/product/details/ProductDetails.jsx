import { useState } from "react";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-2 border-gray-300 rounded-full border-t-black animate-spin"></div>
        <p className="mt-3 text-gray-500">Loading product...</p>
      </div>
    );
  }

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-sm text-gray-500 hover:text-gray-800"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid gap-10 md:grid-cols-2">
        
        {/* Image */}
        <div className="flex items-center justify-center p-6 border bg-gray-50 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-80"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          
          {/* Category */}
          <span className="mb-2 text-xs text-gray-500 uppercase">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="mb-4 text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>

          {/* Price */}
          <p className="mb-4 text-xl font-bold text-gray-900">
            ₹{product.price}
          </p>

          {/* Description */}
          <p className="mb-6 text-sm text-gray-600">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 hover:bg-gray-100"
              >
                -
              </button>

              <span className="w-10 font-semibold text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;