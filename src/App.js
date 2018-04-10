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
    this.state = {
      colorList
    };
  }

  handleClick(e: Event) {
    console.log(e.target.value);
    let colorList = this.state.colorList;
    var index = colorList.indexOf(e.target.value);
    if (index > -1) {
      colorList.splice(index, 1);
    }
    this.setState({
      colorList
    });
  }

  render() {
    return (
      <Root>
        <p>Perfomance comparison in react</p>
        <ColorBox>
          {this.state.colorList &&
            this.state.colorList.map((color, index) => {
              const key = Math.random();
              return (
                <Color
                  key={key}
                  display={key.toFixed(2)}
                  color={color.color}
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
