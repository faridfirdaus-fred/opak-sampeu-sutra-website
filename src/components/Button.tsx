import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, href }) => {
  return (
    <a href={href} target={href ? "_blank" : undefined} rel="noopener noreferrer">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={onClick}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
