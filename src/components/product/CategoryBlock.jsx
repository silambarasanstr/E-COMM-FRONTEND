import ProductList from "./ProductList";

const CategoryBlock = ({ title, products, limit }) => {
  return (
    <section className="px-4 mx-auto mb-10 max-w-fit">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>
      </div>

      <ProductList products={products} limit={limit} />
    </section>
  );
};

export default CategoryBlock;
