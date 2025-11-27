import Header from '../components/Header';
import Menu from '../components/Menu';
import {View, ScrollView, Pressable, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import styled, {useTheme} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';


const SearchInput = styled.TextInput`
    width: 100%;
    height: 65px;
    border-radius: 20px;
    border: none;
    background-color: rgba(127, 127, 127, 47);
    opacity: 0.47;
    padding-left: 15px;
    color: ${props => props.theme.grayText};
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
`;

interface IUserModal {
    text: string,
}

const UserModal = ({text}:IUserModal) => {
    return (
        <View style={styles.usermodal}>
            <ProfileIcon style={{width: 54, height: 54, marginRight: 10, transform: 'translateY(10%)'}} iconSize={30}/>
            <CustomText style={{fontSize: 24, fontFamily: 'Pretendard-SemiBold'}}>{text}</CustomText>
        </View>
    )
}

const SearchPage = () => {
    const theme = useTheme();
    return (
        <>
            <Header text="유저 검색"/>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: -10, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <View style={{flexDirection: 'row', width: '100%', padding: 0, position: 'relative'}}>
                        <SearchInput placeholder="유저 검색"/><Pressable style={{position: 'absolute', right: 15, top: '50%', transform: 'translateY(-30%)'}}><Feather name='search' size={45} color={theme.grayText}/></Pressable>
                    </View>
                    <UserModal text="youngsukim12" />
                    <UserModal text="leeminjun2025" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                    <UserModal text="youngja__" />
                </Container>
            </ScrollView>
            <Menu status="search" />
        </>
    );
}

const styles = StyleSheet.create({
    usermodal: {
        width: '100%',
        height: 74,
        backgroundColor: '#fff', 
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: '0 4 10 0 rgba(132, 132, 132, 0.25)',
        marginBottom: 10,
    }
})

export default SearchPage;