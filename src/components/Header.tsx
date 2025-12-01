import styled from 'styled-components/native';
import CustomText from './CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';

const Style = styled.View`
    background-color: ${props => props.theme.brandColor};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    flex-direction: row;
    position: relative;
`;

interface IHeader {
    text: string,
    isBack?: boolean,
    nav?: any,
}

const Header = ({text, isBack, nav}:IHeader) => {
    const onClick = () => {nav.pop();}
    return (
        <Style>
            {isBack? 
                <Pressable onPress={onClick} style={{position: 'absolute', left: 5}}>
                    <Ionicons name='chevron-back' color='white' size={45} />
                </Pressable>
            : null}
            <CustomText style={{fontWeight: 700, fontSize: 32, color: '#fff'}}>{text}</CustomText>
        </Style>
    )
}

export default Header;