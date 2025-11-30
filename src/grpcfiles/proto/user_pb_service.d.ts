// package: user.v1
// file: user.proto

import * as user_pb from "./user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceCheckUsername = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.CheckUsernameRequest;
  readonly responseType: typeof user_pb.CheckUsernameResponse;
};

type UserServiceCheckEmail = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.CheckEmailRequest;
  readonly responseType: typeof user_pb.CheckEmailResponse;
};

type UserServiceRequestPhoneVerification = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.RequestPhoneVerificationRequest;
  readonly responseType: typeof user_pb.RequestPhoneVerificationResponse;
};

type UserServiceVerifyPhone = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.VerifyPhoneRequest;
  readonly responseType: typeof user_pb.VerifyPhoneResponse;
};

type UserServiceSignUp = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.SignUpRequest;
  readonly responseType: typeof user_pb.SignUpResponse;
};

type UserServiceLogin = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.LoginRequest;
  readonly responseType: typeof user_pb.LoginResponse;
};

type UserServiceSocialLogin = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.SocialLoginRequest;
  readonly responseType: typeof user_pb.SocialLoginResponse;
};

type UserServiceGetProfile = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.GetProfileRequest;
  readonly responseType: typeof user_pb.GetProfileResponse;
};

type UserServiceUpdateProfile = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.UpdateProfileRequest;
  readonly responseType: typeof user_pb.UpdateProfileResponse;
};

type UserServiceChangePassword = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.ChangePasswordRequest;
  readonly responseType: typeof user_pb.ChangePasswordResponse;
};

type UserServiceUpdateAvatar = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.UpdateAvatarRequest;
  readonly responseType: typeof user_pb.UpdateAvatarResponse;
};

type UserServiceSearchUsers = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.SearchUsersRequest;
  readonly responseType: typeof user_pb.SearchUsersResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly CheckUsername: UserServiceCheckUsername;
  static readonly CheckEmail: UserServiceCheckEmail;
  static readonly RequestPhoneVerification: UserServiceRequestPhoneVerification;
  static readonly VerifyPhone: UserServiceVerifyPhone;
  static readonly SignUp: UserServiceSignUp;
  static readonly Login: UserServiceLogin;
  static readonly SocialLogin: UserServiceSocialLogin;
  static readonly GetProfile: UserServiceGetProfile;
  static readonly UpdateProfile: UserServiceUpdateProfile;
  static readonly ChangePassword: UserServiceChangePassword;
  static readonly UpdateAvatar: UserServiceUpdateAvatar;
  static readonly SearchUsers: UserServiceSearchUsers;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  checkUsername(
    requestMessage: user_pb.CheckUsernameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.CheckUsernameResponse|null) => void
  ): UnaryResponse;
  checkUsername(
    requestMessage: user_pb.CheckUsernameRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.CheckUsernameResponse|null) => void
  ): UnaryResponse;
  checkEmail(
    requestMessage: user_pb.CheckEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.CheckEmailResponse|null) => void
  ): UnaryResponse;
  checkEmail(
    requestMessage: user_pb.CheckEmailRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.CheckEmailResponse|null) => void
  ): UnaryResponse;
  requestPhoneVerification(
    requestMessage: user_pb.RequestPhoneVerificationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.RequestPhoneVerificationResponse|null) => void
  ): UnaryResponse;
  requestPhoneVerification(
    requestMessage: user_pb.RequestPhoneVerificationRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.RequestPhoneVerificationResponse|null) => void
  ): UnaryResponse;
  verifyPhone(
    requestMessage: user_pb.VerifyPhoneRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.VerifyPhoneResponse|null) => void
  ): UnaryResponse;
  verifyPhone(
    requestMessage: user_pb.VerifyPhoneRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.VerifyPhoneResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: user_pb.SignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: user_pb.SignUpRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.SignUpResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: user_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: user_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.LoginResponse|null) => void
  ): UnaryResponse;
  socialLogin(
    requestMessage: user_pb.SocialLoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.SocialLoginResponse|null) => void
  ): UnaryResponse;
  socialLogin(
    requestMessage: user_pb.SocialLoginRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.SocialLoginResponse|null) => void
  ): UnaryResponse;
  getProfile(
    requestMessage: user_pb.GetProfileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetProfileResponse|null) => void
  ): UnaryResponse;
  getProfile(
    requestMessage: user_pb.GetProfileRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetProfileResponse|null) => void
  ): UnaryResponse;
  updateProfile(
    requestMessage: user_pb.UpdateProfileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.UpdateProfileResponse|null) => void
  ): UnaryResponse;
  updateProfile(
    requestMessage: user_pb.UpdateProfileRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.UpdateProfileResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: user_pb.ChangePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: user_pb.ChangePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.ChangePasswordResponse|null) => void
  ): UnaryResponse;
  updateAvatar(
    requestMessage: user_pb.UpdateAvatarRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.UpdateAvatarResponse|null) => void
  ): UnaryResponse;
  updateAvatar(
    requestMessage: user_pb.UpdateAvatarRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.UpdateAvatarResponse|null) => void
  ): UnaryResponse;
  searchUsers(
    requestMessage: user_pb.SearchUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.SearchUsersResponse|null) => void
  ): UnaryResponse;
  searchUsers(
    requestMessage: user_pb.SearchUsersRequest,
    callback: (error: ServiceError|null, responseMessage: user_pb.SearchUsersResponse|null) => void
  ): UnaryResponse;
}

