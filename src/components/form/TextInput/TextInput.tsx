import * as React from "react";
import {useState}  from 'react';
import { string } from "prop-types";
import "./TextInput.scss";

interface TextInputProps {
  id: string,
  name: string,
  value?: string;
}

const TextInput: React.SFC<TextInputProps> = ({ id, name ,value }) => {

  const [inputValue, setInputValue] = useState<string>(value);

  return (
    <input
      className="input__text_input"
      type="text"
      name={name}
      id={id}
      value={inputValue}
      onChange={(
        ev: React.ChangeEvent<HTMLInputElement>,
      ): void => setInputValue(ev.target.value)}
    />
  );
}

TextInput.propTypes = {
  name: string.isRequired,
  value: string
};

TextInput.defaultProps = {
  value: ""
};

export default TextInput;