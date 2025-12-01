import styled, {useTheme} from 'styled-components/native';
import CustomText from './CustomText';
import {StyleSheet} from 'react-native';
import {useState} from 'react';

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
    onPress?: () => void
}

const Button = ({text, style, textStyle, onPress}:IButton) => {
    const [color, setColor] = useState('');
    const theme = useTheme();
    const onPressIn = () => {
        setColor('#7C7C7C');
    }
    const onPressOut = () => {
        setColor(theme.btnColor);
    }
    return (
        <ButtonStyle style={[style, {backgroundColor: color}]} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
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