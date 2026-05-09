import React, { useState } from "react";

const AddressForm = ({ onPlaceOrder }) => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
  });
  return (
    <div className="space-y-5">
      <input
        placeholder="Name"
        className="flex items-center justify-between w-full p-2 border rounded cursor-pointer"
        onChange={(e) => setAddress({ ...address, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="flex items-center justify-between w-full p-2 border rounded cursor-pointer"
        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
      />
    </div>
  );
};

export default AddressForm;
