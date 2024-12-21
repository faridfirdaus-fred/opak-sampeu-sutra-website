import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
}) => {
  return (
    <div className="border rounded p-4 text-center">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-blue-500 text-xl">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
