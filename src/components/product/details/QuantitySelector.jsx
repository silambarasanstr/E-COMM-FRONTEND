// components/product/QuantitySelector.jsx
const QuantitySelector = ({ quantity, setQuantity }) => {
  
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <button
        onClick={decrease}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        -
      </button>

      <span className="font-semibold">{quantity}</span>

      <button
        onClick={increase}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;