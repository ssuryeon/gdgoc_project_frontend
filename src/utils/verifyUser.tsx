import { UserServiceClient } from '../grpcfiles/proto/user_grpc_web_pb.js';
import {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';
const userpb = require('../grpcfiles/proto/user_pb.js');

const CheckUsernameRequest = userpb.CheckUsernameRequest;
const CkeckEmailRequest = userpb.CheckEmailRequest;
const RequestPhoneVerificationRequest = userpb.RequestPhoneVerificationRequest;
const SignUpRequest = userpb.SignUpRequest;


const transport = NativeGRPCTransport({ host: 'localhost:50051' } as any) as any;
const client = new UserServiceClient('localhost:50051', null, {transport});

export async function checkUserId(username) {
    const req = new CheckUsernameRequest();
    req.setUsername(username);
    return new Promise((resolve, reject) => {
        client.checkUsername(req, {}, (err, res) => {
            if(err) return reject(err);
            resolve(res.getAvailable());
        })
    })
}

export async function checkEmail(email) {
    const req = new CkeckEmailRequest();
    req.setEmail(email);
    return new Promise((resolve, reject) => {
        client.checkEmail(req, {}, (err, res) => {
            if(err) return reject(err);
            resolve(res.getAvailable());
        })
    })
}

// export async function checkPhone(phone) {
//     const req = new RequestPhoneVerificationRequest();
    
//     try {
//         const res = await client.requestPhoneVerification({phone}).response;
//         console.log(res);
//         return res.verificationId;
//     }
//     catch(err) {
//         console.error('error: ', err);
//         return 'error';
//     }
// }

export async function signUp() {
    const {state} = useContext(UserContext);
    const req = new SignUpRequest();
    const User = {
        username: state.username,
        name: state.name,
        phone: state.phone,
        password: state.password,
        email: state.email,

    };
    req.setUser(User);
    return new Promise((resolve, reject) => {
        client.signUp(req, {}, (err, res) => {
            if(err) return reject(err);
            resolve(res);
        })
    })
}

