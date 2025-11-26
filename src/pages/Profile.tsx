
import styled, {useTheme} from 'styled-components/native';
import LinearGradient, {LinearGradientProps} from 'react-native-linear-gradient';

const Container = styled(LinearGradient)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

const Profile = () => {
    const theme = useTheme();
    return (
        <>
            <Container colors={[theme.inputColor, theme.brandColor]}>
                
            </Container>
        </>
    )
}

export default Profile;