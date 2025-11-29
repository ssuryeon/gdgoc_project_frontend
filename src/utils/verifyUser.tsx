import { UserServiceClient } from '../grpcfiles/proto/user_grpc_pb';
import {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';

const userpb = require('./user_pb.js');
const CheckUsernameRequest = userpb.proto.user.v1.CheckUsernameRequest;
const CkeckEmailRequest = userpb.proto.user.v1.CheckEmailRequest;
const RequestPhoneVerificationRequest = userpb.proto.user.v1.RequestPhoneVerificationRequest;

// const transport = NativeGRPCTransport({ host: 'localhost:50052' } as any) as any;
const client = new UserServiceClient('localhost:50052', null);

export async function checkUserId(username) {
    try {
        const res = await client.checkUsername({username}).response;
        console.log(res);
        return res.available;
    }
    catch(err) {
        console.error('error: ', err);
        return 'error';
    }
}

export async function checkEmail(email) {
    try {
        const res = await client.checkEmail({email}).response;
        console.log(res);
        return res.available;
    }
    catch(err) {
        console.error('error: ', err);
        return 'error';
    }
}

export async function checkPhone(phone) {
    try {
        const res = await client.requestPhoneVerification({phone}).response;
        console.log(res);
        return res.verificationId;
    }
    catch(err) {
        console.error('error: ', err);
        return 'error';
    }
}

export async function signUp() {
    const {state} = useContext(UserContext);

    try {
        const res = await client.signUp({
            username: state.username,
            name: state.name,
            phone: state.phone,
            email: state.email,
            password: state.password,
        }).response;
        return res;
    }
    catch(err) {
        console.error(err);
    }


}

