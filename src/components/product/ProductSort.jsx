const ProductSort = ({ onSort }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Label */}
      <span className="text-sm font-medium text-gray-700">Sort by:</span>

      {/* Select */}
      <select
        onChange={(e) => onSort(e.target.value)}
        className="px-3 py-2 text-sm bg-white border rounded-lg shadow-sm outline-none cursor-pointer focus:ring-1 focus:ring-gray-300"
      >
        <option value="">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductSort;
