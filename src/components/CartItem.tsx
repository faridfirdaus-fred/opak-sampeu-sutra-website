import React from "react";

interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ title, price, quantity }) => {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-blue-500 text-xl">${price.toFixed(2)}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
