import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setUsername] = useState("");
  const [enteredUserAge, setUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age (Positive value)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    setUsername("");
    setUserAge("");
    console.log(enteredUsername, enteredUserAge);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          errorHandle={errorHandler}
          title={error.title}
          body={error.message}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={userNameChangeHandler}
            id="username"
            type="text"
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years) </label>
          <input
            onChange={userAgeChangeHandler}
            id="age"
            type="number"
            value={enteredUserAge}
          ></input>
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default AddUser;
