// components/order/OrderItems.jsx

const OrderItems = ({ items = [] }) => {
  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No items found
      </p>
    );
  }

  return (
    <div className="p-5 mb-6 bg-white border shadow-sm rounded-xl">
      
      {/* Title */}
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Order Items
      </h2>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-4 border-b last:border-none"
          >
            
            {/* Left */}
            <div className="flex items-center gap-3">
              
              {/* Image */}
              <div className="flex items-center justify-center p-2 bg-gray-100 rounded-lg w-14 h-14">
                
                
                
                <img
                  src={item.image }
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-sm font-semibold text-gray-800">
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;