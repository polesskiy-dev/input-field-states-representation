import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';

import { withFocusHandler } from "./withFocusHandler";

function StateStyledField(props) {
    return (
        <TextField {...props} />
    );
}

StateStyledField.propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    focus: PropTypes.string.isRequired,
};
StateStyledField.defaultProps = {};

export default compose(
    /*
     * Formik doesn't provide focus handler by default
     * So, lets handle it
     */
    withFocusHandler
)(StateStyledField);
