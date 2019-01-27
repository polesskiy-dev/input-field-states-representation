import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import SignInForm from "./SignInForm/SignInForm";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

const StyledPaper = styled(Paper)`
  margin-top: calc(8px * 8);
  padding: calc(8px * 2) calc(8px * 3) calc(8px * 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #424242;
`;

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <main className={this.props.className}>
          <StyledPaper>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <SignInForm />
          </StyledPaper>
        </main>
      </JssProvider>
    );
  }
}

export default styled(App)`
  width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  h1 {
    color: white
  }
`;
