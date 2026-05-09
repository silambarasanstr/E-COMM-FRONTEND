import { useEffect, useState } from "react";

// ⏳ helper
const getTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();

  if (diff <= 0) return null;

  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

// ✅ future dates
const offers = [
  {
    id: 1,
    title: "Big Summer Sale",
    description: "Up to 50% off on fashion",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800",
    endTime: "2026-04-10T23:59:59",
    discount: "50% OFF",
  },
  {
    id: 2,
    title: "Electronics Deal",
    description: "Latest gadgets at best price",
    image:
      "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?q=80&w=1135",
    endTime: "2026-04-08T23:59:59",
    discount: "30% OFF",
  },
];

const OffersSection = () => {
  const [timers, setTimers] = useState(() => {
    const initial = {};
    offers.forEach((o) => {
      initial[o.id] = getTimeLeft(o.endTime);
    });
    return initial;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = {};
      offers.forEach((o) => {
        updated[o.id] = getTimeLeft(o.endTime);
      });
      setTimers(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-10 md:px-10 bg-gray-50">
      
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        🔥 Special Offers
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {offers.map((offer) => {
          const time = timers[offer.id];

          return (
            <div
              key={offer.id}
              className="overflow-hidden transition bg-white border shadow-sm rounded-xl hover:shadow-md"
            >
              
              {/* Image */}
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="object-cover w-full h-44"
                />

                {/* Discount */}
                <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full top-3 left-3">
                  {offer.discount}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800">
                  {offer.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {offer.description}
                </p>

                {/* Timer */}
                {time ? (
                  <div className="mt-3 text-sm font-medium text-red-600">
                    ⏳ {String(time.hours).padStart(2, "0")}:
                    {String(time.minutes).padStart(2, "0")}:
                    {String(time.seconds).padStart(2, "0")}
                  </div>
                ) : (
                  <div className="mt-3 text-sm text-gray-400">
                    Offer expired
                  </div>
                )}

                {/* Button */}
                <button className="w-full py-2 mt-4 text-sm font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersSection;