import {View} from 'react-native';
import CustomText from './CustomText';
import Input from './Input';

interface IForm {
    text: string,
}

const Form = ({text}:IForm) => {
    return (
        <View style={{width: '100%', marginBottom: 20}}>
            <CustomText style={{fontFamily: 'Pretendard-SemiBold', fontSize: 24, marginBottom: 10}}>{text}</CustomText>
            <Input style={{width: '100%', height: 50}}/>
        </View>
    )
}

export default Form;