import { useEffect, useState } from "react";
import CategoryBlock from "../../components/product/CategoryBlock";
import Loading from "../../components/common/Loading";

const CategoryBlockContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryConfig = [
    { title: "Men's Clothing", value: "men's clothing" },
    { title: "Women's Clothing", value: "women's clothing" },
    { title: "Jewelery", value: "jewelery" },
    { title: "Electronics", value: "electronics" },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // ✅ stop loading
      })
      .catch(() => setLoading(false));
  }, []);

  // ✅ Show loader
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {categoryConfig.map((c) => (
        <CategoryBlock
          key={c.value}
          products={products.filter((p) => p.category === c.value)}
          title={c.title}
          limit={4}
        />
      ))}
    </div>
  );
};

export default CategoryBlockContainer;
