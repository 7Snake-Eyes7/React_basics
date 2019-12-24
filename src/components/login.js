import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
class login extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <TextField
            id="email"
            label="Email"
            type="current-email"
            autoComplete="email"
            variant="filled"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </Card>
      </div>
    );
  }
}

export default login;
