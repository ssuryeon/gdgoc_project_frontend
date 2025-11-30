import { UserService } from '../grpcfiles/proto/user_pb_service';
import {LoginRequest, LoginResponse} from '../grpcfiles/proto/user_pb';
import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';
import { grpc } from "@improbable-eng/grpc-web";

const transport = NativeGRPCTransport({ host: 'localhost:50051' } as any) as any;

export function login(username, password) {
    const req = new LoginRequest();
    req.setUsername(username);
    req.setPassword(password);
    return new Promise((resolve, reject) => {
        grpc.unary(UserService.Login, {
            request: req,
            host: '34.22.69.10:50052',
            transport,
            onEnd: ({ status, statusMessage, message }) => {
                console.log("grpc status:", status, statusMessage);

                if (!message || status !== grpc.Code.OK) {
                return reject(new Error(statusMessage));
                }
                const token = (message as LoginResponse).getAccessToken();
                console.log('login token: ', token);
                resolve(token);
            }
        })
    })
}