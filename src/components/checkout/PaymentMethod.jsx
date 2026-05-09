// components/checkout/PaymentMethod.jsx
import { useState } from "react";

const paymentOptions = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "upi", label: "UPI Payment" },
];

const PaymentMethod = ({ onSelect }) => {

    const [selected, setSelected] = useState("cod");

  const handleChange = (method) => {
    setSelected(method);
    onSelect(method); // send selection to parent
  };

  return (
    <div className="p-6 mt-6 bg-white border shadow-lg rounded-3xl ">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800">💳 Payment Method</h2>

      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-center justify-between p-2 border rounded cursor-pointer transition duration-200 ${
              selected === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <span className="font-medium text-gray-700">{option.label}</span>
            <input
              type="radio"
              name="payment"
              checked={selected === option.id}
              onChange={() => handleChange(option.id)}
              className="w-5 h-5 accent-blue-500"
            />
          </label>
        ))}

        {/* Show card fields dynamically */}
        {selected === "card" && (
          <div className="p-4 mt-4 space-y-3 border border-gray-200 bg-gray-50 rounded-xl">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Expiry MM/YY"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;