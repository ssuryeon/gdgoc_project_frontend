import {View} from 'react-native';
import CustomText from './CustomText';
import Input from './Input';
import {useContext, useState} from 'react';
import {UserContext} from '../contexts/UserContext';

interface IForm {
    text: string,
    defaultVal?: string | null,
}

const Form = ({text, defaultVal}:IForm) => {
    const [value, setValue] = useState(defaultVal ?? '');
    const {actions} = useContext(UserContext);
    const onChange = (e) => {
        const val = e.nativeEvent.text;
        setValue(val);
        switch(text) {
            case '이름':
                actions.setName(val);
                break;
            case '비밀번호':
                actions.setPassword(val);
                break;
            case '닉네임':
                actions.setNickname(val);
        }
    }
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24, marginBottom: 10}}>{text}</CustomText>
            <Input style={{width: '100%', height: 50}} name={text} onChange={onChange} value={value}/>
        </View>
    )
}

export default Form;