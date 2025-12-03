import Header from '../components/Header';
import styled, {useTheme} from 'styled-components/native';
import {ScrollView, Pressable, View, StyleSheet} from 'react-native';
import {Container} from '../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIcon from '../components/ProfileIcon';
import CustomText from '../components/CustomText';
import {useEffect, useState, useRef, useContext} from 'react';
import {UserContext} from '../contexts/UserContext';

const Triangle = styled.View`
    border-left-width: 15px;
    border-right-width: 30px;
    border-top-width: 15px;
    border-bottom-width: 15px;
    border-left-color: transparent;
    border-right-color: ${props => props.theme.chat1};
    border-top-color: transparent;
    border-bottom-color: transparent;
    width: 0;
    height: 0;
    margin-right: -6;
`;

interface IChat {
    text: string,
}

const OtherChat = ({text}:IChat) => {
    const theme = useTheme();
    return (
        <View style={{width: '100%', flexDirection: 'row', marginBottom: 10}}>
            <Triangle style={{borderStyle: 'solid', top: 7.5}}/>
            <View style={[styles.other, {backgroundColor: theme.chat1}]}>
                <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>{text}</CustomText>
            </View>
        </View>
    )
}

const MyChat = ({text}:IChat) => {
    const theme = useTheme();
    return (
        <View style={{width: '100%', flexDirection: 'row', marginBottom: 10}}>
            <View style={[styles.other, {backgroundColor: theme.brandColor, marginRight: -6}]}>
                <CustomText style={{fontSize: 20, fontFamily: 'Pretendard-SemiBold'}}>{text}</CustomText>
            </View>
            <Triangle style={{borderStyle: 'solid', top: 7.5, borderLeftColor: theme.brandColor, borderRightColor: 'transparent', borderLeftWidth: 30, borderRightWidth: 15}}/>
        </View>
    )
}

const ChatInput = styled.TextInput`
    flex: 1;
    height: 100%;
    border-radius: 30px;
    border: none;
    background-color: #fff;
    padding-left: 15px;
    font-size: 20px;
`;

const InsertChat = ({value, onChange, onPress}) => {
    const theme = useTheme();
    
    return (
        <View style={{flexDirection: 'row', backgroundColor: theme.brandColor, padding: 10}}>
            <ChatInput value={value} onChange={onChange}/>
            <Pressable style={[styles.inputBtn, {backgroundColor: theme.darkpurple}]} onPress={onPress}>
                <Ionicons name="arrow-up" size={35} color="#fff"/>
            </Pressable>
        </View>
    );
}


const ChattingPage = ({navigation, route}) => {
    const theme = useTheme();
    const [chats, setChats] = useState([]);
    const [value, setValue] = useState('');
    const wsRef = useRef<WebSocket | null>(null);
    const {state} = useContext(UserContext);

    const onPress = () => {
        if(route.params.from == 'SelectUserPage') {
            navigation.reset({
                index: 0,
                routes: [{
                    name: 'AfterLoginPage',
                    params: {screen: 'Chat'}
                }]
            })
        }
        else {
            navigation.pop();
        }
    }

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4000/ws/chat');

        ws.onopen = () => {
            console.log('클라이언트 websocket 연결 성공');
            ws.send(JSON.stringify({type: 'join', roomid: route.params.roomid, username: route.params.username, message: 'init'}));
            
        }

        ws.onmessage = (e) => {
            try {
                const message = JSON.parse(e.data);
                console.log('서버 메시지: ', message);
                if(!message.message || message.message == 'init' || message.message == '') return;
                else setChats(prev => [...prev, {...message}]);
            } catch(err) {
                console.error('메시지 받기 에러');
            }
        }

        ws.onerror = (error) => {
            console.error('error: ', error);
        }

        ws.onclose = (e) => {
            console.log('종료됨: ', e.code, e.reason);
            console.log('웹소켓 연결 종료');
        }

        wsRef.current = ws;
        return () => {
            ws.close();
        };

    }, []);

    useEffect(() => {
        console.log(chats);
    }, [chats]);

    const onChange = (e) => {
        const v = e.nativeEvent.text;
        setValue(v);
    }

    const sendMessage = () => {
        if(!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
            console.log('웹소켓이 존재하지 않습니다.');
            return;
        }
        const chatMessage = {type: 'message', roomid: route.params.roomid, username: state.username, message: value};
        // setChats(prev => [...prev, {...chatMessage}]);
        wsRef.current.send(JSON.stringify(chatMessage));
        setValue('');
    }

    return (
        <>
            <Header text={route.params.nickname || route.params.username}/>
            <Pressable style={{position: 'absolute', top: '5%', left: 5, transform: 'translateY(-20px)'}} onPress={onPress}><Ionicons name='chevron-back-outline' size={45} color='#fff'/></Pressable>
            <ScrollView style={{width: '100%', height: '90%'}}>
                <Container style={{backgroundColor: theme.inputColor, padding: 20, justifyContent: 'flex-start', minHeight: '100%'}}>
                    <View style={{width: '100%', height: '100%', paddingRight: 40}}>
                        {chats.filter(chat => chat.message != 'init' || chat.message != null || chat.message !='').map((chat, idx) => (
                            chat.username == route.params.username ? <OtherChat text={chat.message} key={idx}/> : <MyChat text={chat.message} key={idx}/>
                        ))}
                    </View>
                </Container>
            </ScrollView>
            <InsertChat value={value} onChange={onChange} onPress={sendMessage}/>
        </>
    );
}

const styles = StyleSheet.create({
    inputBtn: {
        width: 52, 
        height: 52, 
        borderRadius: '50%',  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft: 10
    },
    other: {
        padding: 10,
        borderRadius: 10,
        width: '100%',
    }
})

export default ChattingPage;