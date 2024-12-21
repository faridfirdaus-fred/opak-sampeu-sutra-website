import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4">
      <ul>
        <li className="mb-2">
          <a href="/category/1" className="text-blue-500 hover:underline">
            Category 1
          </a>
        </li>
        <li className="mb-2">
          <a href="/category/2" className="text-blue-500 hover:underline">
            Category 2
          </a>
        </li>
        <li className="mb-2">
          <a href="/category/3" className="text-blue-500 hover:underline">
            Category 3
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
