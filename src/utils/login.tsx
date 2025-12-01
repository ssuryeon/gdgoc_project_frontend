import {Alert} from 'react-native';

const BFFURL = 'http://localhost:4000';

export async function login(username, password) {
    console.log(username, password);
    const res = await fetch(`${BFFURL}/home/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password}),
    });
    console.log(res);
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        Alert.alert('올바른 아이디와 비밀번호를 입력해주세요.');
        return;
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
        return;
    }
    return data;
}