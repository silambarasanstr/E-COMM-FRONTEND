import { useEffect, useState } from "react";
import ProductList from "../../components/product/ProductList";
import ProductFilter from "../../components/product/ProductFilter";
import ProductSort from "../../components/product/ProductSort";
import InfiniteScroll from "../../components/common/InfiniteScroll";

import { Link } from "react-router-dom";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");

  // 🔥 NEW STATE
  const [page, setPage] = useState(1);
  const limit = 6;

  // Fetch
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // 🔥 FILTER + PAGINATION COMBINED
  useEffect(() => {
    let data = category
      ? products.filter((p) => p.category === category)
      : products;

    // Apply pagination (slice)
    setFiltered(data.slice(0, page * limit));
  }, [products, category, page]);

  // 🔥 RESET PAGE WHEN FILTER CHANGE
  useEffect(() => {
    setPage(1);
  }, [category]);

  // Sort
  const handleSort = (type) => {
    let sorted = [...filtered];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFiltered(sorted);
  };

  // 🔥 LOAD MORE
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  // 🔥 HAS MORE LOGIC
  const totalData = category
    ? products.filter((p) => p.category === category)
    : products;

  const hasMore = filtered.length < totalData.length;

  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">🛍️ Products</h1>

          <ProductSort onSort={handleSort} />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow h-fit sticky top-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Filters
            </h2>

            <ProductFilter
              categories={categories}
              selected={category}
              onSelect={setCategory}
            />
          </div>

          {/* Product List */}
          <div className="lg:col-span-3">
            {/* Count */}
            <p className="text-sm text-gray-600 mb-4">
              Showing {filtered.length} products
            </p>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Products</h2>
                <Link to="/product" className="text-blue-600 font-medium">
                  View All →
                </Link>
              </div>
              <ProductList products={filtered} onAddToCart={handleAddToCart} />

              {/* 🔥 INFINITE SCROLL HERE */}
              <InfiniteScroll
                loadMore={loadMore}
                hasMore={hasMore}
                loader="Loading more products..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
