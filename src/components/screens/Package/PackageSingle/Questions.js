import React from "react";
import { useQuestion } from "../../../../Redux/Package/question";
import "./PackageSingle.css";

function Questions({ slug }) {
  // const dispatch = useDispatch();
  // const question = useSelector((state) => state.question.question);

  // useEffect(() => {
  //   dispatch(fetchQuestion(slug));
  // }, [slug, dispatch]);
  const { data: question = [] } = useQuestion({ slug: slug });


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

export default Questions;
