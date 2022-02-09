import { TextField } from '@shopify/polaris';
import React from 'react';
import { Textfield, LableInput, Error } from './style';

const TextFieldInput = (props) =>{

    const { disable, label, placeHolder, value, type, onChange, onBlur,error } = props;

    return(
        <React.Fragment>
                <LableInput>
                <label>{label}</label>
                </LableInput>
                    <TextField  type = {type}  value = {value} placeholder = {placeHolder} disabled = {disable} onChange = {onChange} onBlur = {onBlur} ></TextField>
                <Error>
                {error}
            </Error>
        </React.Fragment>
    );
}

export default TextFieldInput;
