import { ArrowLeft, ShoppingCart } from "lucide-react";

const OrderActions = ({ onHome, onCart }) => {
  return (
    <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:justify-center">
      {/* Continue Shopping */}
      <button
        onClick={onHome}
        className="flex items-center justify-center gap-2 px-5 py-3 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
      >
        <ArrowLeft size={18} />
        Continue Shopping
      </button>

      {/* Go to Cart */}
      <button
        onClick={onCart}
        className="flex items-center justify-center gap-2 px-5 py-3 font-semibold text-gray-800 transition bg-white border rounded-lg hover:bg-gray-100"
      >
        <ShoppingCart size={18} />
        Go to Cart
      </button>
    </div>
  );
};

export default OrderActions;
