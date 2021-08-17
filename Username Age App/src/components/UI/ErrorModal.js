import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";
function ErrorModal(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.errorHandle}>
        <Card className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.body}</p>
          </div>
          <footer className="actions">
            <Button onClick={props.errorHandle}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
export default ErrorModal;
