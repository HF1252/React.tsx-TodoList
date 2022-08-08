import React from 'react';
import styles from './styles';

interface AddButtonProps {
    onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = (props) => {
    const { Wrapper, AddButtonWrapper, AddButton } = styles;
    return (
        <Wrapper>
            <AddButtonWrapper>
                <AddButton onClick={props.onClick}>Add</AddButton>
            </AddButtonWrapper>
        </Wrapper>
    );
};
