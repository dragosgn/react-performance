import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";
import Color from "./Color";
import colorList from "./colorList";

const Root = styled.div`
  padding: 2rem;
`;

const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <Root>
        <p>Perfomance comparison in react</p>
        <ColorBox>
          {console.log(colorList)}
          {colorList &&
            colorList.map(color => {
              const key = Math.random();
              return (
                <Color
                  key={key}
                  display={key.toFixed(2)}
                  color={color}
                  handleClick={this.handleClick}
                />
              );
            })}
        </ColorBox>
      </Root>
    );
  }
}

export default App;
