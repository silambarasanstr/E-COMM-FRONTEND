import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/product/details/ProductDetails";

const ProductDetailsContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    console.log("Added:", product);
  };

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Loading product...
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-white bg-gray-800 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  // 🚫 No product found
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* 🧾 Product Card */}
        <div className="p-6 bg-white shadow rounded-xl">
          <ProductDetails product={product} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
