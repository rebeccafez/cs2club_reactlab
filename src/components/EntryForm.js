import { useState } from "react";
import EntryField from "./EntryField";

const EntryForm = ({ insertTodo }) => {
  const [fieldContents, setFieldContents] = useState("");
  const [curKey, setCurKey] = useState(0);

  const handleTextUpdate = (text) => {
    setFieldContents(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertTodo({ key: curKey, name: fieldContents, complete: false });
    setCurKey(curKey + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <EntryField handleTextUpdate={handleTextUpdate} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default EntryForm;
