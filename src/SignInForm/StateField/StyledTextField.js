import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { FormControl, Input, InputLabel, FormHelperText} from "@material-ui/core";

const StyledFormControl = styled(FormControl)``

const StyledInputLabel = styled(InputLabel)``

const StyledInput = styled(StyledInput)``

const StyledFormHelperText = styled(FormHelperText)``

const StyledTextField = ({ className, label, name, helperText, ...restProps }) => {
    return (
        <StyledFormControl className={className} disabled>
            <StyledInputLabel htmlFor={name}>{label}</StyledInputLabel>
            <StyledInput name={name} {...restProps} />
            <StyledFormHelperText>{helperText}</StyledFormHelperText>
        </StyledFormControl>
    );
};

StyledTextField.propTypes = {};
StyledTextField.defaultProps = {};

export default StyledTextField;

