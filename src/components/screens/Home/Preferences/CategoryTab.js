import React, { useState } from "react";
import "./Preferences.css";
import { useCategory } from "../../../../Redux/Home/category";
import { useNavigate } from "react-router-dom";

function CategoryTab() {
  const { data: category } = useCategory();

  const [activeCategory, setActiveCategory] = useState(1);

  const navigate = useNavigate();;

  const handleCategory = (id, title) => {
    setActiveCategory(id);
    navigate(`/?category=${title}`);
  };

  return (
    <>
      <ul id="preferred-category">
        {category?.map((item) => {
          return (
            <li
              onClick={() => handleCategory(item?.id, item?.title)}
              className={activeCategory === item?.id ? "active" : ""}
              key={item?.id}
            >
              {item?.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategoryTab;
