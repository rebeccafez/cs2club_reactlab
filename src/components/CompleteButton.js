const CompleteButton = ({ toggleComplete, complete }) => {
  return (
    <button onClick={toggleComplete}>
      {complete ? "Complete" : "Incomplete"}
    </button>
  );
};

export default CompleteButton;
