import styled from 'styled-components/native';
import CustomText from './CustomText';

const Style = styled.View`
    background-color: ${props => props.theme.brandColor};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`;

interface IHeader {
    text: string
}

const Header = ({text}:IHeader) => {
    return (
        <Style>
            <CustomText style={{fontWeight: 700, fontSize: 32, color: '#fff'}}>{text}</CustomText>
        </Style>
    )
}

export default Header;