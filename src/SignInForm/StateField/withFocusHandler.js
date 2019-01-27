import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { wrapDisplayName } from "recompose";

export const withFocusHandler = WrappedComponent =>
  class extends PureComponent {
    static displayName = wrapDisplayName(WrappedComponent, "withFocusHandler");

    static propTypes = {
      onBlur: PropTypes.func.isRequired
    };

    state = { focus: false };

    onFocus = () => this.setState({ focus: true });

    onBlur = e => {
      this.setState({ focus: false });
      if (typeof this.props.onBlur === "function") this.props.onBlur(e);
    };

    render() {
      const {
        onFocus,
        onBlur,
        state: { focus }
      } = this;

      return (
        <WrappedComponent {...{ ...this.props, focus, onFocus, onBlur }} />
      );
    }
  };

/*
    This component behaviour also can be achieved by recompose `withState, withHandlers`:

    withState('focus', 'setFocus'),
    withHandlers({
        onFocus: props => () => props.setFocus(true),
        onBlur: props => e => {
            props.setFocus(false);
            props.onBlur(e);
        }
    })
 */
