import React, { memo, useState } from "react";
import "./Discover.css";

function Tabs() {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategory = (id, title) => {
    setActiveCategory(id);
  };

  return (
    <>
      <ul id="preferred-category">
        <li className="active">Summer</li>
        <li>Winter</li>
        <li>Monsoon</li>
      </ul>
    </>
  );
}

export default Tabs;
