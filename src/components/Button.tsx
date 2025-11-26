import styled from 'styled-components/native';
import CustomText from './CustomText';
import {StyleSheet} from 'react-native';

const ButtonStyle = styled.Pressable`
    background-color: ${(props) => props.theme.btnColor};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

interface IButton {
    text: string
    style?: Object
    textStyle?: Object
}

const Button = ({text, style, textStyle}:IButton) => {
    return (
        <ButtonStyle style={style}>
            <CustomText style={[styles.text, textStyle]}>{text}</CustomText>
        </ButtonStyle>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 700,
        color: '#fff', 
        textAlign: 'center',
    }
})

export default Button;