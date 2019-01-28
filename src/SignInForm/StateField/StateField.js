import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { isEmpty } from "lodash/fp";

import { withFocusHandler } from "./withFocusHandler";
import { states } from "../SignInForm.constants";
import StyledTextField from './StyledTextField'

const getNextState = (curState, { value, error, focus, disabled }) => {
  switch (curState) {
    case states.PRISTINE: {
      if (disabled) return states.DISABLED;
      if (focus) return states.FOCUSED;
      if (!isEmpty(error)) return states.ERROR;
      return curState;
    }
    case states.DISABLED: {
      if (!disabled) return states.PRISTINE;
      return curState;
    }
    case states.VALID: {
      if (disabled) return states.DISABLED;
      if (focus) return states.FOCUSED;
      return curState;
    }
    case states.ERROR: {
      if (disabled) return states.DISABLED;
      if (focus) return states.FOCUSED;
      return curState;
    }
    case states.FOCUSED: {
      if (!isEmpty(error)) return states.ERROR;
      if (isEmpty(error)) return states.VALID;
      return curState;
    }
    default:
      return curState;
  }
};

class StateField extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    return { state: getNextState(state.state, props) };
  }

  state = {
    state: states.PRISTINE
  };

  render() {
    return <StyledTextField {...this.props} />;
  }
}

StateField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default compose(
  /*
   * Formik doesn't provide focus handler by default
   * So, lets handle it
   */
  withFocusHandler
)(StateField);
