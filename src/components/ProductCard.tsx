import React from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="border rounded p-4 text-center">
      <img src={image} alt={name} className="w-full h-auto rounded mb-4" />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-blue-500 text-xl">${price.toFixed(2)}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(id)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
