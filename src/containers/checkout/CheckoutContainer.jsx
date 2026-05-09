import CheckoutForm from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleOrder = (data) => {
    //console.log("Order placed", { cartItems, data });

    const orderData = {
      orderId: Date.now(),
      total,
      items: cartItems,
      address: data,
    };

    console.log("Order placed", orderData);

    // ✅ PASS DATA TO ORDER PAGE
    navigate("/order", {
      state: orderData,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Your Checkout is empty
      </div>
    );
  }

  console.log(cartItems, "kjkjk");

 return (
  <div className="min-h-screen px-4 py-12 bg-gray-50">
    
    {/* Page Header */}
    <div className="max-w-6xl mx-auto mb-10">
      <h1 className="text-3xl font-bold text-gray-800">
        🚚 Checkout
      </h1>
      <p className="mt-1 text-gray-500">
        Enter your shipping details and complete your order
      </p>
    </div>

    {/* Layout */}
    <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
      
      {/* Left - Form */}
      <div className="p-6 bg-white border shadow-lg lg:col-span-2 rounded-2xl">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Shipping Information
        </h2>

        <CheckoutForm onSubmit={handleOrder} />
      </div>

      {/* Right - Summary */}
      <div className="sticky top-8 h-fit">
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  </div>
);
};

export default CheckoutContainer;
