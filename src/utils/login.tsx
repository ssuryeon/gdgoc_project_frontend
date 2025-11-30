import { UserServiceClient } from '../grpcfiles/proto/user_grpc_web_pb.js';
const userpb = require('../grpcfiles/proto/user_pb.js');
import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';

const transport = NativeGRPCTransport({ host: 'localhost:50051' } as any) as any;
const client = new UserServiceClient('localhost:50051', null, {transport});
const LoginRequest = new userpb.LoginRequest;


export function login(username, password) {
    const req = new LoginRequest();
    req.setUsername(username);
    req.setPassword(password);
    return new Promise((resolve, reject) => {
        client.login(req, {}, (err, res) => {
            if(err) return reject(err);
            resolve(res.toObject());
        })
    })
}