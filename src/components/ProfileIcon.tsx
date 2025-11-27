import styled, {useTheme} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Circle = styled.View`
    width: 150px;
    height: 150px;
    background-color: ${props => props.theme.profileBackground};
    margin-bottom: 20px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;

interface IProfile {
    style?: Object
}

const ProfileIcon = ({style}:IProfile) => {
    const theme = useTheme();
    return (
        <Circle style={style}>
            <Ionicons name='person' size={100} color={theme.profileIcon}/>
        </Circle>
    )
}

export default ProfileIcon;