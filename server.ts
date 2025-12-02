import express from 'express';
import cors from 'cors';

const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/src/grpcfiles/proto/user.proto';
const PROTO_PATH2 = __dirname + '/src/grpcfiles/proto/chat.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const packageDefinition2 = protoLoader.loadSync(PROTO_PATH2, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition);
const proto2 = grpc.loadPackageDefinition(packageDefinition2);

const userPkg = proto.user.v1;
const chatPkg = proto2.chat.v1;

const HOST = '34.22.69.10';

const PORT1 = '50051';
const PORT2 = '50052';

const GRPC_SERVER_ADDR = `${HOST}:${PORT1}`;
const GRPC_SERVER_ADDR2 = `${HOST}:${PORT2}`;

const userClient = new userPkg.UserService(
  GRPC_SERVER_ADDR,
  grpc.credentials.createInsecure(),
);
const chatClient = new chatPkg.ChatService(
    GRPC_SERVER_ADDR2,
    grpc.credentials.createInsecure(),
);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'serverindex.html'));
})

// UserService
app.post('/signup/username', (req, res) => {
    const {username} = req.body;
    if(!username) {
        return res.status(400).json({error: '아이디를 입력해주세요.'});
    }
    userClient.CheckUsername({username}, (err, response) => {
        if(err) {
            console.error('gRPC CheckUsername error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC CheckUsername 실패', detail: err.message });
        }
        const val = res.json(response)
        console.log('CheckUsername 응답: ', val);
        return val
    })
})

app.post('/signup/phone', (req, res) => {
    const {phone} = req.body;
    if(!phone) {
        return res.status(400).json({error: '전화번호를 입력해주세요.'});
    }
    userClient.RequestPhoneVerification({phone}, (err, response) => {
        if(err) {
            console.error('gRPC RequestPhoneVerification error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC RequestPhoneVerification 실패', detail: err.message });
        }
        const val = res.json(response)
        console.log('RequestPhoneVerification 응답: ', val);
        return val;
    })
})

app.post('/signup/email', (req, res) => {
    const {email} = req.body;
    if(!email) {
        return res.status(400).json({error: '이메일을 입력해주세요.'});
    }
    userClient.CheckEmail({email}, (err, response) => {
        if(err) {
            console.error('gRPC CheckEmail error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC CheckEmail 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('CheckEmail 응답: ', val);
        return val;
    })
})

app.post('/signup/request', (req, res) => {
    console.log('body: ', req.body);
    const {username, name, phone, email, password} = req.body;
    const user = {username, name, phone, email, password};
    if(!username || !name || !phone || !email || !password) {
        return res.status(400).json({error: '유저정보를 모두 입력해주세요.'});
    }
    userClient.SignUp(user, (err, response) => {
        if(err) {
            console.error('gRPC SignUp error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC SignUp 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('SignUp 응답: ', val);
        return val;
    })
})

app.post('/home/login', (req, res) => {
    const {username, password} = req.body;
    const info = {username, password};
    if(!username || !password) {
        return res.status(400).json({error: '유저정보를 모두 입력해주세요.'});
    }
    userClient.Login(info, (err, response) => {
        if(err) {
            console.error('gRPC Login error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC Login 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('Login 응답: ', val);
        return val;
    })
})

app.post('/profile', (req, res) => {
    try {
        console.log('>>> start');
        const {user_id} = req.body;
        const token = req.headers.authorization;
        console.log(user_id);
        console.log(token);
        console.log('grpc type: ', typeof(grpc));
        console.log('grpc keys:', Object.keys(grpc));
        console.log('grpc.Metadata:', grpc.Metadata);

        if(!token) {
            console.log('token error');
            return res.status(400).json({error: '토큰 오류'});
        }
        const metadata = new grpc.Metadata();
        metadata.add('authorization', token);
        console.log('헤더: ', metadata.getMap());
        console.log('metadata authorization: ', metadata.get('authorization'))

        userClient.GetProfile({user_id}, metadata, (err, response) => {
            console.log('>>> GetProfile 콜백 진입');
            if(err) {
                console.error('gRPC Profile error: ', err);
                return res
                .status(500)
                .json({ error: 'gRPC Profile 실패', detail: err.message });
            }
            const val = res.json(response);
            console.log('GetProfile 응답: ', val);
            return val;
        })
    } catch(e) {
        console.log('라우팅 에러: ', e);
    }
})

app.post('/profile/modify', (req, res) => {
    try {
        console.log('>>> start');
        const {values} = req.body;
        const token = req.headers.authorization;
        console.log(values);
        console.log(token);

        if(!token) {
            console.log('token error');
            return res.status(400).json({error: '토큰 오류'});
        }
        const metadata = new grpc.Metadata();
        metadata.add('authorization', token);
        console.log('헤더: ', metadata.getMap());
        console.log('metadata authorization: ', metadata.get('authorization'))

        userClient.UpdateProfile({values}, metadata, (err, response) => {
            console.log('>>> UpdateProfile 콜백 진입');
            if(err) {
                console.error('gRPC UpdateProfile error: ', err);
                return res
                .status(500)
                .json({ error: 'gRPC UpdateProfile 실패', detail: err.message });
            }
            const val = res.json(response);
            console.log('UpdateProfile 응답: ', val);
            return val;
        })
    } catch(e) {
        console.log('라우팅 에러: ', e);
    }
})

app.post('/search', (req, res) => {
    const body = req.body;
    console.log('req body: ', body)
    const {query, limit, offset} = body;
    const token = req.headers.authorization;
    const info = {query, limit, offset};
    const metadata = new grpc.Metadata();
    metadata.add('authorization', token);
    
    if(query == null || limit == null || offset == null) { // * 값이 0이면 !offset이 true로 처리됨
        return res.status(400).json({error: 'API 파라미터 오류'});
    }
    userClient.SearchUsers(info, metadata, (err, response) => {
        console.log('SearchUsers 시작');
        if(err) {
            console.error('gRPC SearchUsers error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC SearchUsers 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('SearchUsers 응답: ', val);
        return val;
    })
})

// ChatService
app.post('/chat/getid', (req, res) => {
    const {my_id, other_id} = req.body;
    const info = {my_id, other_id};
    if(!my_id || !other_id) {
        return res.status(400).json({error: 'username이 입력되지 않았습니다.'});
    }
    chatClient.GetRoomID(info, (err, response) => {
        if(err) {
            console.error('gRPC GetRoomID error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC GetRoomID 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('GetRoomID 응답: ', val);
        return val;
    })
})

const calls = new Map();
const server = http.createServer(app);
const wss = new WebSocket.Server({server, path: '/ws/chat'});

wss.on('connection', (ws, req) => {
    console.log('webSocket 연결');
    let call = null;

    // 클라이언트에서 메시지가 올 때
    ws.on('message', data => {
        const msg = JSON.parse(data.toString());
        console.log('받은 메시지: ', msg);
        const {type, roomid, username, message} = msg;
        if(type == 'join') {
            call = chatClient.JoinChat();
            
            if(!call) return;

            // 초기 메시지
            call.write({roomid, username, message});
            console.log(`Joined Chat: (${roomid}) ${username}`);

            // grpc 서버로부터의 메시지 수신 후 클라이언트로 보냄
            call.on('data', (message) => {
                console.log('수신된 메시지: ', message);
                ws.send(JSON.stringify(message));
            })

            // grpc 서버와의 통신이 끝났을 때 클라이언트에게 끝남을 알리는 메시지를 보냄
            call.on('end', () => {
                console.log('grpc-BFF 서버 간 스트리밍 종료');
                ws.send(JSON.stringify({type: 'end'}));
                ws.close();
            })

            call.on('error', (error) => {
                console.error('grpc-BFF 통신 에러: ', error);
            })
        } else if(type == 'message') {
            if(!call) {
                console.error('메시지를 먼저 호출해주세요.');
                return;
            }

            // 클라이언트의 메시지를 grpc 서버로 전달
            call.write({roomid, username, message});
        }

    })

    ws.on('close', () => {
        console.log('웹소켓 연결 종료');
    })

    ws.on('error', (error) => {
        console.log('웹소켓 에러: ', error);
    })
})

// app.post('/chat/join', (req, res) => {
//     const {roomid, username} = req.body;
//     const message = "init";
//     const chatMessage = {roomid, username, message};

//     const call = chatClient.JoinChat();
//     calls.set(username, call);

//     call.write(chatMessage);
//     console.log(`Joined Chat: (${roomid}) ${username}`);

//     call.on('data', message => {
//         console.log(`[${message.username}]: ${message.message}`);
//         res.json({username: message.username, message: message.message});
//     })

//     call.on('error', error => {
//         console.error('Chatting error: ', error);
//         calls.delete(username);
//         res.json({error: 'Chatting error', detail: error.message});
//     })

//     call.on('end', () => {
//         calls.delete(username);
//     })

// })

// app.post('/chat/send', (req, res) => {
//     const {roomid, username, message} = req.body;
//     const chatMessage = {roomid, username, message};
//     const call = calls.get(username);
//     if(!call) {
//         console.error('스트림이 존재하지 않습니다.');
//     }

//     call.write(chatMessage);
//     res.json({username, message});
// })

// app.post('/chat/end', (req, res) => {
//     const {roomid, username} = req.body;
//     const call = calls.get(username);
//     if(!call) {
//         console.error('스트림이 존재하지 않습니다.');
//     }

//     call.end();
//     res.json({status: 'ended'});
// })

app.post('/chat/rooms', (req, res) => {
    const {user_id} = req.body;
    console.log('getMyRooms username: ', user_id);
    if(!user_id) {
        return res.status(400).json({error: 'username이 입력되지 않았습니다.'});
    }
    chatClient.GetRoomID({user_id}, (err, response) => {
        if(err) {
            console.error('gRPC GetMyRooms error: ', err);
            return res
            .status(500)
            .json({ error: 'gRPC GetMyRooms 실패', detail: err.message });
        }
        const val = res.json(response);
        console.log('GetMyRooms 응답: ', val);
        return val;
    })
})

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`BFF Server Strat: http://localhost:${PORT}`);
})