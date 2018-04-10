import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";
import Color from "./Color";
import colorList from "./colorList";
import Math from "./MathRandomPicker";

const Root = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: 1;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <Math />
      </Root>
    );
  }
}

export default App;
