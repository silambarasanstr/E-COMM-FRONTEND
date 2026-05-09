import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CartSummary = ({ total }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-white border shadow-sm rounded-xl">
      
      {/* Title */}
      <h2 className="mb-6 text-lg font-semibold text-gray-800">
        Order Summary
      </h2>

      {/* Price Details */}
      <div className="space-y-4 text-sm">
        
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium text-gray-800">
            ₹{total.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="font-medium text-gray-800">₹0.00</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5 border-gray-200" />

      {/* Total */}
      <div className="flex justify-between text-base font-semibold text-gray-900">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="flex items-center justify-center w-full gap-2 py-3 mt-6 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
      >
        Proceed to Checkout
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
};

export default CartSummary;