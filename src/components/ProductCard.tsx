import React, { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedProduct: { name: string; price: number; image: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ name, price, image });

  const handleSave = () => {
    onEdit(id, editedProduct);
    setIsEditing(false);
  };

  return (
    <div className="border p-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: Number(e.target.value) })}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            value={editedProduct.image}
            onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <button onClick={handleSave} className="bg-green-500 text-white p-2 mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white p-2">Cancel</button>
        </>
      ) : (
        <>
          <img src={image} alt={name} className="w-full h-48 object-cover mb-2" />
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-700">${price}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 mr-2">Edit</button>
          <button onClick={() => onDelete(id)} className="bg-red-500 text-white p-2">Delete</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
