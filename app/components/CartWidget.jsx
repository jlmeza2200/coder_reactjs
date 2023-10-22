import { LuShoppingCart } from "react-icons/lu";

const CartWidget = () => {
  return (
    <div className="flex gap-2">
      <LuShoppingCart color="black" size="1.5rem" />
      <span className="text-black">2</span>
    </div>
  );
};

export default CartWidget;
