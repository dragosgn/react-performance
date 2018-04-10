import React, { Component } from "react";
import styled from "styled-components";

import Math from "./MathRandomPicker";
import Index from "./IndexPicker";
import Id from "./IdPicker";

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
        <Index />
        <Id />
      </Root>
    );
  }
}

export default App;
