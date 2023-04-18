import React, { useState } from "react";
import "./Preferences.css";
import { useStates } from "../../../../Redux/Home/category";
import { useNavigate } from "react-router-dom";

function CategoryTab() {
  // const dispatch = useDispatch();
  // const category = useSelector((category) => category.category.categories);

  const [activeCategory, setActiveCategory] = useState(1);

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(fetchCategory());
  //   navigate(`/?category=trekking`);
  // }, [dispatch, navigate]);

  const handleCategory = (id, title) => {
    setActiveCategory(id);
    navigate(`/?category=${title}`);
  };

  const { data: category } = useStates();

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
