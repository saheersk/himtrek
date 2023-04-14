import React, { useEffect } from "react";
import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestion } from "../../../../Redux/Package/question";

function Questions({ slug }) {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question.question);

  useEffect(() => {
    dispatch(fetchQuestion(slug));
  }, [slug, dispatch]);

  return (
    <>
      <div className="questions">
    {question.map((item) => {
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

export default Questions;
