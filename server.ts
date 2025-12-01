import express from 'express';
import cors from 'cors';

const path = require('path');
const bodyParser = require('body-parser');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/src/grpcfiles/proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition);
const userPkg = proto.user.v1;
const GRPC_SERVER_ADDR = '34.22.69.10:50051';
const userClient = new userPkg.UserService(
  GRPC_SERVER_ADDR,
  grpc.credentials.createInsecure(),
);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'serverindex.html'));
})

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

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`BFF Server Strat: http://localhost:${PORT}`);
})