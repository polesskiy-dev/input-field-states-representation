import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { withFormik } from 'formik';

import { fieldNames } from './SignInForm.constants';

const SignInForm = ({ handleChange, handleBlur, values, errors }) => {
    return (
        <form>
            <TextField
                name={fieldNames.LOGIN}
                label="Login"
                value={values[fieldNames.LOGIN]}
                error={errors[fieldNames.LOGIN]}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextField
                name={fieldNames.PASSWORD}
                label="Login"
                value={values[fieldNames.PASSWORD]}
                error={errors[fieldNames.PASSWORD]}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </form>
    );
};

SignInForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    values: PropTypes.shape({
        [fieldNames.LOGIN]: PropTypes.string,
        [fieldNames.PASSWORD]: PropTypes.string,
    }).isRequired,
    errors: PropTypes.shape({
        [fieldNames.LOGIN]: PropTypes.string,
        [fieldNames.PASSWORD]: PropTypes.string,
    }).isRequired,
};

SignInForm.defaultProps = {};

export default withFormik({
    name: SignInForm.displayName,
})(SignInForm);
