import { ShoppingCart } from "lucide-react";

const HeroSection = ({ title, subtitle, onShopNow }) => {
  return (
    <div className="px-6 py-20 text-center bg-gray-200 rounded-xl">
      
      {/* Content */}
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
          {title}
        </h1>

        <p className="mt-4 text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>

        {/* Button */}
        <button
          onClick={onShopNow}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-6 font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800"
        >
          <ShoppingCart size={18} />
          Shop Now
        </button>

      </div>
    </div>
  );
};

export default HeroSection;