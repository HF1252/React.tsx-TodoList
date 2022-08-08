import React, { useState, useEffect } from 'react';
import styles from './styles';

interface InputFormProps {
    onChange: (value: string) => void;
}

export const InputForm: React.FC<InputFormProps> = (props) => {
    const { Wrapper, InputForm, StyledInput } = styles;

    return (
        <Wrapper>
            <InputForm>
                <StyledInput onChange={(e) => props.onChange(e.target.value)} />
            </InputForm>
        </Wrapper>
    );
};
