// import { UserService } from '../grpcfiles/proto/user_pb_service';
// import {
//     CheckUsernameRequest, CheckUsernameResponse,
//     CheckEmailRequest, CheckEmailResponse,
//     RequestPhoneVerificationRequest, 
//     SignUpRequest, SignUpResponse,
// } from '../grpcfiles/proto/user_pb';
// import {useContext} from 'react';
// import UserContext from '../contexts/UserContext';
// import { grpc } from "@improbable-eng/grpc-web";
// import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';

// const HOST = '192.168.45.186';
// const PORT = '9090';


// const transport = NativeGRPCTransport({ host: `34.22.69.10:50051` } as any) as any;

// export async function checkUserId(username) {
//     const req = new CheckUsernameRequest();
//     req.setUsername(username);
//     return new Promise((resolve, reject) => {
//         grpc.unary(UserService.CheckUsername, {
//             request: req,
//             host: '34.22.69.10:50051',
//             transport,
//             onEnd: ({ status, statusMessage, message }) => {
//                 console.log("grpc status:", status, statusMessage);

//                 if (!message || status !== grpc.Code.OK) {
//                 return reject(new Error(statusMessage));
//                 }
//                 const available = (message as CheckUsernameResponse).getAvailable();
//                 console.log('username: ', available);
//                 resolve(available);
//             }
//         })
//     })
// }

// export async function checkEmail(email) {
//     const req = new CheckEmailRequest();
//     req.setEmail(email);
//     return new Promise((resolve, reject) => {
//         grpc.unary(UserService.CheckEmail, {
//             request: req,
//             host: '34.22.69.10:50051',
//             transport,
//             onEnd: ({ status, statusMessage, message }) => {
//                 console.log("grpc status:", status, statusMessage);

//                 if (!message || status !== grpc.Code.OK) {
//                 return reject(new Error(statusMessage));
//                 }
//                 const available = (message as CheckEmailResponse).getAvailable();
//                 console.log('email: ', available);
//                 resolve(available);
//             }
//         })
//     })
// }

// // export async function checkPhone(phone) {
// //     const req = new RequestPhoneVerificationRequest();
    
// //     try {
// //         const res = await client.requestPhoneVerification({phone}).response;
// //         console.log(res);
// //         return res.verificationId;
// //     }
// //     catch(err) {
// //         console.error('error: ', err);
// //         return 'error';
// //     }
// // }

// export async function signUp() {
//     const {state} = useContext(UserContext);
//     const req = new SignUpRequest();
//         req.setUsername(state.username);
//         req.setName(state.name);
//         req.setPhone(state.phone);
//         req.setPassword(state.password);
//         req.setEmail(state.email);
//         return new Promise((resolve, reject) => {
//             grpc.unary(UserService.SignUp, {
//                 request: req,
//                 host: '34.22.69.10:50051',
//                 transport,
//                 onEnd: ({ status, statusMessage, message }) => {
//                     console.log("grpc status:", status, statusMessage);
    
//                     if (!message || status !== grpc.Code.OK) {
//                     return reject(new Error(statusMessage));
//                     }
//                     const user = (message as SignUpResponse).getUser();
//                     console.log('email: ', user);
//                     resolve(user);
//                 }
//             })
//         })
// }

