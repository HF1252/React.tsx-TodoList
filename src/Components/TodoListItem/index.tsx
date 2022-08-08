import React from 'react';
import { CheckButton } from '../CheckButton';
import { DeleteButton } from '../DeleteButton';
import styles from './styles';

const TodoListItem: React.FC = (props) => {
    const { Wrapper, AddTitle, AddTitleLabel } = styles;
    return (
        <Wrapper>
            <AddTitle>
                <CheckButton />
                <AddTitleLabel> {props.children}</AddTitleLabel>
                <DeleteButton />
            </AddTitle>
        </Wrapper>
    );
};

export { TodoListItem };
