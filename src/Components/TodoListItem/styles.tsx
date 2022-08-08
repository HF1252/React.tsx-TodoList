import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    margin: auto;
    padding-top: 25px;
`;

const AddTitle = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e3e2d2;
`;

const AddTitleLabel = styled.div`
    font-family: serif;
`;

export default {
    Wrapper,
    AddTitle,
    AddTitleLabel,
};
