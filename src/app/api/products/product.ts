import { NextApiRequest, NextApiResponse } from "next";

// Mock database
let products = [
  { id: "1", name: "Product 1", price: 100, image: "/images/product1.jpg" },
  { id: "2", name: "Product 2", price: 200, image: "/images/product2.jpg" },
  // Add more products as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(products);
      break;
    case "POST":
      const newProduct = { id: Date.now().toString(), ...req.body };
      products.push(newProduct);
      res.status(201).json(newProduct);
      break;
    case "PUT":
      const { id, ...updatedProduct } = req.body;
      products = products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      res.status(200).json({ message: "Product updated" });
      break;
    case "DELETE":
      const { id: deleteId } = req.query;
      products = products.filter((product) => product.id !== deleteId);
      res.status(200).json({ message: "Product deleted" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
