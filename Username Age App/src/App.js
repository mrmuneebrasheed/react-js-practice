import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const OnAddUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  // const inputList = [{ name: "Muneeb", age: 22 }];
  return (
    <div>
      <AddUser onAddUser={OnAddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
