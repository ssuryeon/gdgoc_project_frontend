import {View, Pressable, StyleSheet} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import {searchUsers} from '../utils/search';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchInput = styled.TextInput`
    width: 100%;
    height: 65px;
    border-radius: 20px;
    border: none;
    background-color: rgba(127, 127, 127, 47);
    opacity: 0.47;
    padding-left: 15px;
    color: ${props => props.theme.btnColor};
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

const UserListPage = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (e) => {
        const t = e.nativeEvent.text;
        setValue(t);
        // console.log(value);
    }
    useEffect(() => {
        console.log('useEffect 호출');
        const search = async () => {
            console.log(value);
            const token = await AsyncStorage.getItem('accessToken');
            const result = await searchUsers(token, value);
            console.log('result: ', result);
            setUsers(result.users);
            setLoading(false);
            console.log('users: ', users);
            console.log('loading: ', loading);
        }
        search();
    }, [value])

    return (
        <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', width: '100%', padding: 0, position: 'relative'}}>
                <SearchInput placeholder="유저 검색" value={value} onChange={onChange}/><Pressable style={{position: 'absolute', right: 15, top: '50%', transform: 'translateY(-30%)'}}><Feather name='search' size={45} color={theme.grayText}/></Pressable>
            </View>
            {users.map((user) => (
                <UserModal text={user.username} key={user.id}/>
            ))}
        </View>
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

export default UserListPage;