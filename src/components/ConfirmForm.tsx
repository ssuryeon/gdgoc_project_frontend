import {View} from 'react-native';
import CustomText from './CustomText';
import Input from './Input';
import {useContext, useState} from 'react';
import UserContext from '../contexts/UserContext';

interface IConfirmForm {
    text: string,
    value: string,
    onConfirm: (e:any) => void,
}

const ConfirmForm = ({text, value, onConfirm}:IConfirmForm) => {
    
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24, marginBottom: 10}}>{text}</CustomText>
            <Input style={{width: '100%', height: 50}} name={text} onChange={onConfirm} value={value}/>
        </View>
    )
}

export default ConfirmForm;