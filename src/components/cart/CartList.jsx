// components/cart/CartList.jsx
import CartItem from "./CartItem";

const CartList = ({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;