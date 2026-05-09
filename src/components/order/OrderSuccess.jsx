import { CheckCircle } from "lucide-react";

const OrderSuccess = ({ orderId, total }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      
      <div className="w-full max-w-md p-6 text-center bg-white border shadow-sm rounded-xl">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800">
          Order Placed Successfully!
        </h1>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-gray-500">
          Thank you for your purchase 🎉
        </p>

        {/* Order Details */}
        <div className="p-4 mt-5 text-sm border rounded-lg bg-gray-50">
          <p className="flex justify-between text-gray-600">
            <span>Order ID</span>
            <span className="font-medium text-gray-800">
              #{orderId}
            </span>
          </p>

          <p className="flex justify-between mt-2 text-gray-600">
            <span>Total Paid</span>
            <span className="font-semibold text-gray-900">
              ₹{total.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="w-full py-3 mt-6 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default OrderSuccess;