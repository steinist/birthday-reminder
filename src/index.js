import React from "react";
import ReactDOM from "react-dom";

import Card from "./card";
import "./index.css";

function BirthdayReminder() {
  return (
    <main>
      <Card />
    </main>
  );
}

ReactDOM.render(<BirthdayReminder />, document.getElementById("root"));
