import styled from 'styled-components/native';

interface IInput {
    name?: string,
}

const Input = styled.TextInput<IInput>`
    background-color: ${(props) => props.theme.inputColor};
    border-radius: 10px;
    padding-left: 15px;
`;

export default Input;