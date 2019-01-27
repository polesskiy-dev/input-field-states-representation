import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withFormik } from 'formik';

import { fieldNames } from './SignInForm.constants';
import StateStyledField from './StateStyledField'

const SignInForm = ({ className, handleChange, handleBlur, values, errors }) => {
    return (
        <form className={className}>
            <StateStyledField
                fullWidth
                name={fieldNames.LOGIN}
                label="Login"
                value={values[fieldNames.LOGIN]}
                error={errors[fieldNames.LOGIN]}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <StateStyledField
                fullWidth
                name={fieldNames.PASSWORD}
                label="Password"
                type="password"
                value={values[fieldNames.PASSWORD]}
                error={errors[fieldNames.PASSWORD]}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                // disabled
            >
                Sign in
            </Button>
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
})(styled(SignInForm)`
  width: 100%;
  margin-top: 8px;
  
  button {
    margin-top: calc(2 * 8px);
    color: white;
    background-color: #2196f3;
  }
`);
