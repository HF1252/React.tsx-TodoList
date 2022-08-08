import styled from 'styled-components';

const Wrapper = styled.div``;

const AddButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 25px;
`;

const AddButton = styled.button`
    background-color: #cce246;
    border-radius: 30px;
    height: 38px;
    width: 41px;
    font-family: serif;
    border-color: #cce246;
`;

// const TestButton = styled("button")(()=>({
//     backgroundColor:"blue",
// }))

export default {
    Wrapper,
    AddButtonWrapper,
    AddButton,
};
