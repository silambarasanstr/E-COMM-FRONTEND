// components/OrderSummary.jsx
const OrderSummary = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="sticky w-full max-w-md p-5 bg-white top-4 rounded-2xl">
      
      {/* Header */}
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        🛒 Order Summary
      </h2>

      {/* Items List */}
      <div className="pr-2 space-y-4 overflow-y-auto max-h-80">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 pb-3 border-b"
          >
            {/* Image */}
            <div className="flex items-center justify-center w-16 h-16 p-2 bg-gray-100 border rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <p className="text-sm font-medium text-gray-700 line-clamp-2">
                {item.title}
              </p>
              <p className="mt-1 text-sm font-semibold text-green-600">
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="pt-4 mt-5 border-t">
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* Checkout Button */}
        {/* <button className="w-full py-2 mt-4 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
          Checkout
        </button> */}
      </div>
    </div>
  );
};

export default OrderSummary;