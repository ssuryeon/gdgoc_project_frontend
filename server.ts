import express from 'express';
import cors from 'cors';

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

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`BFF Server Strat: http://localhost:${PORT}`);
})