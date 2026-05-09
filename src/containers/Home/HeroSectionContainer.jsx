import React from "react";
import HeroSection from "../../components/home/HeroSection";

const HeroSectionContainer = () => {
  const handleShopNow = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };
  return (
    <div>
      <HeroSection
        title="Welcome to Our Store 🛍️"
        subtitle="Discover amazing products at the best prices"
        onShopNow={handleShopNow}
      />
    </div>
  );
};

export default HeroSectionContainer;
