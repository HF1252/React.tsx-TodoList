import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './styles';

export const DeleteButton = () => {
    const { Wrapper } = styles;
    return (
        <Wrapper>
            <FontAwesomeIcon
                icon={['fas', 'times']}
                size={'xs'}
                style={{ width: 20, height: 25, marginRight: 5 }}
            />
        </Wrapper>
    );
};
