import { useSelector, useDispatch } from "react-redux";
import CartList from "../../components/cart/CartList";
import CartSummary from "../../components/cart/CartSummary";
import { clearCart } from "../../features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <ShoppingCart size={50} className="mb-3 text-gray-400" />
        <p className="text-xl font-semibold text-gray-600">
          Your Cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-gray-700" />
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Your Cart
            </h1>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 text-sm font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Cart Items */}
          <div className="p-5 bg-white border shadow-sm lg:col-span-2 rounded-xl">
            <CartList items={cartItems} />
          </div>

          {/* Summary */}
          <div className="sticky top-6 h-fit">
            <CartSummary total={total} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartContainer;