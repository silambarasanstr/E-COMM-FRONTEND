import OrderSuccess from "../../components/order/OrderSuccess";
import OrderItems from "../../components/order/OrderItems";
import OrderActions from "../../components/order/OrderActions";

import { useLocation, useNavigate } from "react-router-dom";

const OrdersContainer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // fallback
  const order = state || {
    orderId: "123456",
    total: 999,
    items: [
      {
        id: 1,
        title: "Sample Product",
        price: 999,
        quantity: 1,
        image: "https://via.placeholder.com/100 ",
      },
    ],
  };

  // ✅ Correct empty check
  if (!order.items || order.items.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Your order is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Success Section */}
        <OrderSuccess orderId={order.orderId} total={order.total} />

        {/* Items Section */}
        <OrderItems items={order.items} />

        {/* Actions */}
        <div >
          <OrderActions
            onHome={() => navigate("/")}
            onCart={() => navigate("/cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersContainer;
