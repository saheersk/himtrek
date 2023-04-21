import React, { memo, useContext } from "react";
import { useQuestion } from "../../../../Redux/Package/question";
import "./PackageSingle.css";
import { SlugContext } from "./PackageSingle";

function Questions() {
  const param = useContext(SlugContext);

  const { data: question = [] } = useQuestion({ slug: param });

  return (
    <>
      <div className="questions">
    {question?.map((item) => {
      return (
        <div className="item" key={item?.id}>
          <h3>{item?.question}</h3>
          <p>
            {item?.answer}
          </p>
      </div>
      )
    })}
    </div>
      
    </>
  );
}

export default memo(Questions);
