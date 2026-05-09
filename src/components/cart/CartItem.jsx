import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex gap-4 p-4 transition bg-white border rounded-xl hover:shadow-sm">
      
      {/* Image */}
      <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 p-2 bg-gray-100 rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
              {item.title}
            </h2>
            <p className="mt-1 text-xs text-gray-500 uppercase">
              {item.category}
            </p>
          </div>

          {/* Remove */}
          <button
            onClick={() => onRemove(item.id)}
            className="p-1 text-gray-400 transition hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-4">
          
          {/* Quantity */}
          <div className="flex items-center border rounded-lg">
            
            <button
              onClick={() => onDecrease(item.id)}
              className="flex items-center justify-center w-8 h-8 text-gray-600 transition hover:bg-gray-100"
            >
              <Minus size={14} />
            </button>

            <span className="w-10 text-sm font-semibold text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)} // ✅ FIXED
              className="flex items-center justify-center w-8 h-8 text-gray-600 transition hover:bg-gray-100"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Price */}
          <span className="text-base font-bold text-gray-800">
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;