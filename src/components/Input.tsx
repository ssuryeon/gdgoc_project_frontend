import styled from 'styled-components/native';

const Input = styled.TextInput`
    background-color: ${(props) => props.theme.inputColor};
    border-radius: 10px;
    padding-left: 15px;
`;

export default Input;