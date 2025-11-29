// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_user_v1_ChangePasswordRequest(arg) {
  if (!(arg instanceof user_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type user.v1.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_ChangePasswordRequest(buffer_arg) {
  return user_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_ChangePasswordResponse(arg) {
  if (!(arg instanceof user_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type user.v1.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_ChangePasswordResponse(buffer_arg) {
  return user_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_CheckEmailRequest(arg) {
  if (!(arg instanceof user_pb.CheckEmailRequest)) {
    throw new Error('Expected argument of type user.v1.CheckEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_CheckEmailRequest(buffer_arg) {
  return user_pb.CheckEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_CheckEmailResponse(arg) {
  if (!(arg instanceof user_pb.CheckEmailResponse)) {
    throw new Error('Expected argument of type user.v1.CheckEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_CheckEmailResponse(buffer_arg) {
  return user_pb.CheckEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_CheckUsernameRequest(arg) {
  if (!(arg instanceof user_pb.CheckUsernameRequest)) {
    throw new Error('Expected argument of type user.v1.CheckUsernameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_CheckUsernameRequest(buffer_arg) {
  return user_pb.CheckUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_CheckUsernameResponse(arg) {
  if (!(arg instanceof user_pb.CheckUsernameResponse)) {
    throw new Error('Expected argument of type user.v1.CheckUsernameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_CheckUsernameResponse(buffer_arg) {
  return user_pb.CheckUsernameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_GetProfileRequest(arg) {
  if (!(arg instanceof user_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type user.v1.GetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetProfileRequest(buffer_arg) {
  return user_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_GetProfileResponse(arg) {
  if (!(arg instanceof user_pb.GetProfileResponse)) {
    throw new Error('Expected argument of type user.v1.GetProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetProfileResponse(buffer_arg) {
  return user_pb.GetProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type user.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_LoginResponse(arg) {
  if (!(arg instanceof user_pb.LoginResponse)) {
    throw new Error('Expected argument of type user.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_LoginResponse(buffer_arg) {
  return user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_RequestPhoneVerificationRequest(arg) {
  if (!(arg instanceof user_pb.RequestPhoneVerificationRequest)) {
    throw new Error('Expected argument of type user.v1.RequestPhoneVerificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_RequestPhoneVerificationRequest(buffer_arg) {
  return user_pb.RequestPhoneVerificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_RequestPhoneVerificationResponse(arg) {
  if (!(arg instanceof user_pb.RequestPhoneVerificationResponse)) {
    throw new Error('Expected argument of type user.v1.RequestPhoneVerificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_RequestPhoneVerificationResponse(buffer_arg) {
  return user_pb.RequestPhoneVerificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SearchUsersRequest(arg) {
  if (!(arg instanceof user_pb.SearchUsersRequest)) {
    throw new Error('Expected argument of type user.v1.SearchUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SearchUsersRequest(buffer_arg) {
  return user_pb.SearchUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SearchUsersResponse(arg) {
  if (!(arg instanceof user_pb.SearchUsersResponse)) {
    throw new Error('Expected argument of type user.v1.SearchUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SearchUsersResponse(buffer_arg) {
  return user_pb.SearchUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SignUpRequest(arg) {
  if (!(arg instanceof user_pb.SignUpRequest)) {
    throw new Error('Expected argument of type user.v1.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SignUpRequest(buffer_arg) {
  return user_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SignUpResponse(arg) {
  if (!(arg instanceof user_pb.SignUpResponse)) {
    throw new Error('Expected argument of type user.v1.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SignUpResponse(buffer_arg) {
  return user_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SocialLoginRequest(arg) {
  if (!(arg instanceof user_pb.SocialLoginRequest)) {
    throw new Error('Expected argument of type user.v1.SocialLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SocialLoginRequest(buffer_arg) {
  return user_pb.SocialLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_SocialLoginResponse(arg) {
  if (!(arg instanceof user_pb.SocialLoginResponse)) {
    throw new Error('Expected argument of type user.v1.SocialLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_SocialLoginResponse(buffer_arg) {
  return user_pb.SocialLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateAvatarRequest(arg) {
  if (!(arg instanceof user_pb.UpdateAvatarRequest)) {
    throw new Error('Expected argument of type user.v1.UpdateAvatarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateAvatarRequest(buffer_arg) {
  return user_pb.UpdateAvatarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateAvatarResponse(arg) {
  if (!(arg instanceof user_pb.UpdateAvatarResponse)) {
    throw new Error('Expected argument of type user.v1.UpdateAvatarResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateAvatarResponse(buffer_arg) {
  return user_pb.UpdateAvatarResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateProfileRequest(arg) {
  if (!(arg instanceof user_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type user.v1.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateProfileRequest(buffer_arg) {
  return user_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_UpdateProfileResponse(arg) {
  if (!(arg instanceof user_pb.UpdateProfileResponse)) {
    throw new Error('Expected argument of type user.v1.UpdateProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_UpdateProfileResponse(buffer_arg) {
  return user_pb.UpdateProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_VerifyPhoneRequest(arg) {
  if (!(arg instanceof user_pb.VerifyPhoneRequest)) {
    throw new Error('Expected argument of type user.v1.VerifyPhoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_VerifyPhoneRequest(buffer_arg) {
  return user_pb.VerifyPhoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_VerifyPhoneResponse(arg) {
  if (!(arg instanceof user_pb.VerifyPhoneResponse)) {
    throw new Error('Expected argument of type user.v1.VerifyPhoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_VerifyPhoneResponse(buffer_arg) {
  return user_pb.VerifyPhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ====== 서비스 정의 (명세)======
var UserServiceService = exports.UserServiceService = {
  // 중복/인증
checkUsername: {
    path: '/user.v1.UserService/CheckUsername',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CheckUsernameRequest,
    responseType: user_pb.CheckUsernameResponse,
    requestSerialize: serialize_user_v1_CheckUsernameRequest,
    requestDeserialize: deserialize_user_v1_CheckUsernameRequest,
    responseSerialize: serialize_user_v1_CheckUsernameResponse,
    responseDeserialize: deserialize_user_v1_CheckUsernameResponse,
  },
  checkEmail: {
    path: '/user.v1.UserService/CheckEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CheckEmailRequest,
    responseType: user_pb.CheckEmailResponse,
    requestSerialize: serialize_user_v1_CheckEmailRequest,
    requestDeserialize: deserialize_user_v1_CheckEmailRequest,
    responseSerialize: serialize_user_v1_CheckEmailResponse,
    responseDeserialize: deserialize_user_v1_CheckEmailResponse,
  },
  requestPhoneVerification: {
    path: '/user.v1.UserService/RequestPhoneVerification',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RequestPhoneVerificationRequest,
    responseType: user_pb.RequestPhoneVerificationResponse,
    requestSerialize: serialize_user_v1_RequestPhoneVerificationRequest,
    requestDeserialize: deserialize_user_v1_RequestPhoneVerificationRequest,
    responseSerialize: serialize_user_v1_RequestPhoneVerificationResponse,
    responseDeserialize: deserialize_user_v1_RequestPhoneVerificationResponse,
  },
  verifyPhone: {
    path: '/user.v1.UserService/VerifyPhone',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.VerifyPhoneRequest,
    responseType: user_pb.VerifyPhoneResponse,
    requestSerialize: serialize_user_v1_VerifyPhoneRequest,
    requestDeserialize: deserialize_user_v1_VerifyPhoneRequest,
    responseSerialize: serialize_user_v1_VerifyPhoneResponse,
    responseDeserialize: deserialize_user_v1_VerifyPhoneResponse,
  },
  // 회원가입/로그인
signUp: {
    path: '/user.v1.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SignUpRequest,
    responseType: user_pb.SignUpResponse,
    requestSerialize: serialize_user_v1_SignUpRequest,
    requestDeserialize: deserialize_user_v1_SignUpRequest,
    responseSerialize: serialize_user_v1_SignUpResponse,
    responseDeserialize: deserialize_user_v1_SignUpResponse,
  },
  login: {
    path: '/user.v1.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_user_v1_LoginRequest,
    requestDeserialize: deserialize_user_v1_LoginRequest,
    responseSerialize: serialize_user_v1_LoginResponse,
    responseDeserialize: deserialize_user_v1_LoginResponse,
  },
  socialLogin: {
    path: '/user.v1.UserService/SocialLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SocialLoginRequest,
    responseType: user_pb.SocialLoginResponse,
    requestSerialize: serialize_user_v1_SocialLoginRequest,
    requestDeserialize: deserialize_user_v1_SocialLoginRequest,
    responseSerialize: serialize_user_v1_SocialLoginResponse,
    responseDeserialize: deserialize_user_v1_SocialLoginResponse,
  },
  // 프로필
getProfile: {
    path: '/user.v1.UserService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetProfileRequest,
    responseType: user_pb.GetProfileResponse,
    requestSerialize: serialize_user_v1_GetProfileRequest,
    requestDeserialize: deserialize_user_v1_GetProfileRequest,
    responseSerialize: serialize_user_v1_GetProfileResponse,
    responseDeserialize: deserialize_user_v1_GetProfileResponse,
  },
  updateProfile: {
    path: '/user.v1.UserService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateProfileRequest,
    responseType: user_pb.UpdateProfileResponse,
    requestSerialize: serialize_user_v1_UpdateProfileRequest,
    requestDeserialize: deserialize_user_v1_UpdateProfileRequest,
    responseSerialize: serialize_user_v1_UpdateProfileResponse,
    responseDeserialize: deserialize_user_v1_UpdateProfileResponse,
  },
  changePassword: {
    path: '/user.v1.UserService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangePasswordRequest,
    responseType: user_pb.ChangePasswordResponse,
    requestSerialize: serialize_user_v1_ChangePasswordRequest,
    requestDeserialize: deserialize_user_v1_ChangePasswordRequest,
    responseSerialize: serialize_user_v1_ChangePasswordResponse,
    responseDeserialize: deserialize_user_v1_ChangePasswordResponse,
  },
  updateAvatar: {
    path: '/user.v1.UserService/UpdateAvatar',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateAvatarRequest,
    responseType: user_pb.UpdateAvatarResponse,
    requestSerialize: serialize_user_v1_UpdateAvatarRequest,
    requestDeserialize: deserialize_user_v1_UpdateAvatarRequest,
    responseSerialize: serialize_user_v1_UpdateAvatarResponse,
    responseDeserialize: deserialize_user_v1_UpdateAvatarResponse,
  },
  // 유저 검색(username 또는 nickname)
searchUsers: {
    path: '/user.v1.UserService/SearchUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SearchUsersRequest,
    responseType: user_pb.SearchUsersResponse,
    requestSerialize: serialize_user_v1_SearchUsersRequest,
    requestDeserialize: deserialize_user_v1_SearchUsersRequest,
    responseSerialize: serialize_user_v1_SearchUsersResponse,
    responseDeserialize: deserialize_user_v1_SearchUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
