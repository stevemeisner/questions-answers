import * as React from "react";
import Question from "./../Question/Question";
import Answer from "./../Answer/Answer";
import "./Set.scss";

interface SetProps {
  payload: any
}

const Set: React.SFC<SetProps> = (props) => {
  return (
    <div className="set">
      <Question text={props.payload.question} />
      <Answer text={props.payload.answer} />
    </div>
  );
}

export default Set;