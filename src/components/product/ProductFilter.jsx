const ProductFilter = ({ categories = [], selected, onSelect }) => {
  return (
    <div className="p-4 bg-white border shadow-sm rounded-xl">
      
      {/* Title */}
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-800 uppercase">
        Categories
      </h3>

      {/* All Option */}
      <button
        onClick={() => onSelect("")}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
          selected === ""
            ? "bg-black text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        All Products
      </button>

      {/* Divider */}
      <div className="my-3 border-t" />

      {/* Category List */}
      <div className="space-y-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${
              selected === cat
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="capitalize">{cat}</span>

            {/* Active Indicator */}
            {selected === cat && (
              <span className="text-xs bg-white text-black px-2 py-0.5 rounded">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;