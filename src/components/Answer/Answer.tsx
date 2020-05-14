import * as React from "react";
import { string } from "prop-types";
import TextInput from "../form/TextInput/TextInput"
import "./Answer.scss";

interface AnswerProps {
  text?: string;
}

const Answer: React.SFC<AnswerProps> = ({ text, ...props }) => {

  var re = / /gi;
  const htmlName = text.replace(re, "-"); 

  return (
    <div className="answer">
      <div className="answer__input_container">
        <fieldset>
          <label htmlFor={`${htmlName}`}>
            <span className="answer__label_text">Label</span>
          
            <TextInput value={text} name={`${htmlName}`} id={`${htmlName}`} />
          </label>
          <p className="answer__input_error">// place for errors</p>
        </fieldset>
      </div>
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