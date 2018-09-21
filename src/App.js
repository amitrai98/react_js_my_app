import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { Card } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Popover } from "antd";
import AppHeader from "./Components/header/AppHeader";

class App extends Component {
  constructor() {
    super();
  }

  handleSubmit() {
    console.log("Abscasda ");
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <form>
          <Card style={{ margin: 200, padding: 100 }}>
            <div className="ant-form">
              <Input underline={false} />
            </div>
            <div>
              <Input underline={false} />
            </div>
            <div style={{ marginTop: 10 }}>
              <Button
                onClick={this.handleSubmit}
                variant="raised"
                marginTop="20"
                color="primary"
              >
                Login
              </Button>
            </div>
          </Card>
        </form>
      </div>
    );
  }
}

export default App;
