import React, { Component, Dimensions } from "react";
import { Card } from "@material-ui/core";

class AppHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ flexDirection: "row" }}>
        <Card
          style={{
            background: "red",
            flex: 1,
            height: 40
          }}
        />
      </div>
    );
  }
}

export default AppHeader;
