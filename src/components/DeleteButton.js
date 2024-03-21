const DeleteButton = ({ handleDelete, Id }) => {
  return (
    <button
      onClick={() => {
        handleDelete(Id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
