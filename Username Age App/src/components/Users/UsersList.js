import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";
function UsersList(props) {
  return (
    <Card className="user">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;
