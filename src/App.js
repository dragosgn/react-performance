import React, { Component } from "react";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.css";
import Color from "./Color";
import colorList from "./colorList";

const Root = styled.components`
  padding: 2rem;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <p>Perfomance comparison in react</p>
        <div className="container-fluid">
          <ul>{}</ul>
        </div>
      </Root>
    );
  }
}

export default App;
