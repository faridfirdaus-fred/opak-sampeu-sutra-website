import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* ...existing code... */}
      </div>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2023 Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
