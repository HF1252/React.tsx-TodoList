import React from 'react';
import styles from './styles';

export const Title = () => {
    const { Wrapper, Title, TitleLabel } = styles;
    return (
        <Wrapper>
            <Title>
                <TitleLabel>ToDo List</TitleLabel>
            </Title>
        </Wrapper>
    );
};
