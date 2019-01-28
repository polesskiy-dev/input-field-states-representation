import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withFormik } from 'formik';

import StateField from './StateField/StateField'
import { fieldNames } from './SignInForm.constants';
import  { validationSchema } from "./SignUpForm.validation";


const SignInForm = ({ className, handleChange, handleBlur, values, errors }) => {
    return (
        <form className={className}>
            <StateField
                fullWidth
                name={fieldNames.EMAIL}
                label="Email"
                value={values[fieldNames.EMAIL]}
                error={errors[fieldNames.EMAIL]}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <StateField
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
        [fieldNames.EMAIL]: PropTypes.string,
        [fieldNames.PASSWORD]: PropTypes.string,
    }).isRequired,
    errors: PropTypes.shape({
        [fieldNames.EMAIL]: PropTypes.string,
        [fieldNames.PASSWORD]: PropTypes.string,
    }).isRequired,
};

SignInForm.defaultProps = {};

export default withFormik({
    name: SignInForm.displayName,
    validationSchema,
    // TODO maybe default '' values
})(styled(SignInForm)`
  width: 100%;
  margin-top: 8px;
  
  button {
    margin-top: calc(2 * 8px);
    color: white;
    background-color: #2196f3;
  }
`);
