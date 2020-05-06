import * as React from "react";
import { string } from "prop-types";
import "./Answer.scss";

interface AnswerProps {
  text?: string;
}

const Answer: React.SFC<AnswerProps> = (props) => {
  return (
    <div className="answer">
      <p className="answer__text">
        {props.text}
      </p>
    </div>
  );
}

Answer.propTypes = {
  text: string
};

Answer.defaultProps = {
  text: "no answer yet"
};

export default Answer;