import * as React from "react";
import Set from "./components/Set/Set";

const data :Array<Object> = [
  {
    "question": "What is your favorite color?",
    "answer": "I haven't got one."
  },
  {
    "question": "What is your quest?",
    "answer": "To find the holy front end stack."
  }
];

const App: React.SFC = () => {
  return (
    <div className="container global">
      { data.map((set, index) => {
        return (
          <Set payload={set} key={`set-${index}`} />
        );
      }) }
    </div>
  );
}

export default App;