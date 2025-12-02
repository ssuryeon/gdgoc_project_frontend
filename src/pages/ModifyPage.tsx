import Header from '../components/Header';
import styled from 'styled-components/native';
import ProfileIcon from '../components/ProfileIcon';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import Button from '../components/Button';
import {View, ScrollView, Image} from 'react-native';
import {Container} from '../components/Container';
import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import {updateProfile} from '../utils/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IValues {
    name?: string,
    nickname?: string,
    username?: string,
    phone?: string,
    email?: string,
}

const ModifyPage = ({navigation, route}) => {
    const user = route.params.user;
    const {state} = useContext(UserContext);
    console.log(state);
    // const prev = state; 얕은 복사라 state가 바뀌면 prev도 바뀜

    const onPress = async () => {
        let values:IValues = {};
        const token = await AsyncStorage.getItem('accessToken');
        console.log(token);
        
        if(user.name != state.name) values.name = state.name;
        if(user.nickname != state.nickname) values.nickname = state.nickname;
        if(user.username != state.username) values.username = state.username;
        if(user.phone != state.phone) values.phone = state.phone;
        if(user.email != state.email) values.email = state.email;
        console.log(values);
        
        const modifiedUser = await updateProfile(token, values);
        console.log(modifiedUser);
    }

    return (
        <>
            <Header text='프로필 수정' isBack={true} nav={navigation}/>
            <ScrollView style={{width: '100%'}}>
                <Container style={{padding: 30}}>
                    <View style={{width: '100%', marginBottom: 30, justifyContent: 'center', alignItems: 'center'}}>
                        {(user.avatar_url == '')? <ProfileIcon /> : <Image style={{width: 150, height: 150, borderRadius: '50%'}} source={{uri: user.avatar_url}}/>}
                        <Button text="이미지 수정" style={{width: 100, height: 40}} textStyle={{fontSize: 16}}/>
                    </View>
                    <Form text="이름" defaultVal={user.name}/>
                    <Form text="닉네임" defaultVal={user.nickname}/>
                    <BtnForm text="아이디" defaultVal={user.username}/>
                    <BtnForm text="전화번호" defaultVal={user.phone}/>
                    <Form text="비밀번호" />
                    <Form text="비밀번호 확인" />
                    <Button text="프로필 수정" style={{marginTop: 10, width: '100%', height: 70}} onPress={onPress}/>
                </Container>
            </ScrollView>
        </>
    )
}

export default ModifyPage;