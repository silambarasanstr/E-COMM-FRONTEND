import ProductCard from "./ProductCard";

const ProductList = ({ products = [], limit }) => {
  const displayProducts = limit ? products.slice(0, limit) : products;

  if (!products || products.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {displayProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
