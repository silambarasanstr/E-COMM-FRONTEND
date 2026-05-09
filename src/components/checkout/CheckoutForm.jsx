// components/CheckoutForm.jsx
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import AddressForm from "./AddressForm";
import { ArrowRight } from "lucide-react";

const CheckoutForm = ({ onSubmit }) => {
  const [payment, setPayment] = useState("cod");
  const [address, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, payment });
  };

  return (
    <div className="p-4 rounded">
      <h2 className="mb-4 text-xl font-bold">Checkout</h2>

      <form className="space-y-6">
        <AddressForm onPlaceOrder={setForm} />
        <PaymentMethod onSelect={setPayment} />

        <button
          // onClick={() => navigate("/checkout")}
          onClick={handleSubmit}
          className="flex items-center justify-center w-full py-4 mt-6 text-lg text-white bg-blue-600 rounded-lg group"
        >
          Proceed to Checkout
          <ArrowRight
            size={20}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
