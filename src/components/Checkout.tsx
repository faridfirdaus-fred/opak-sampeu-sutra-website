import React from "react";
import Button from "./Button";

interface Product {
  name: string;
  quantity: number;
}

interface CheckoutProps {
  products: Product[];
}

const Checkout: React.FC<CheckoutProps> = ({ products }) => {
  const generateWhatsAppMessage = () => {
    const message = products
      .map(product => `- ${product.quantity} ${product.name}`)
      .join("; ");
    return `https://wa.me/?text=I%20would%20like%20to%20order:%20${encodeURIComponent(message)}`;
  };

  return (
    <Button label="Checkout" href={generateWhatsAppMessage()} />
  );
};

export default Checkout;
