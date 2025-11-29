import {View} from 'react-native';
import CustomText from './CustomText';
import Input from './Input';
import {useContext, useState} from 'react';
import UserContext from '../contexts/UserContext';

interface IForm {
    text: string,
}

const Form = ({text}:IForm) => {
    const {actions} = useContext(UserContext);
    const onChange = (e) => {
        const {name, text} = e;
        switch(name) {
            case '이름':
                actions.setName(text);
                break;
            case '비밀번호':
                actions.setPassword(text);
                break;
        }
    }
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24, marginBottom: 10}}>{text}</CustomText>
            <Input style={{width: '100%', height: 50}} name={text} onChange={onChange}/>
        </View>
    )
}

export default Form;