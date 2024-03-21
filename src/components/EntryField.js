const EntryField = ({ handleTextUpdate }) => {
  return (
    <input
      type="text"
      name="todo"
      onChange={(e) => handleTextUpdate(e.target.value)}
    />
  );
};

export default EntryField;
