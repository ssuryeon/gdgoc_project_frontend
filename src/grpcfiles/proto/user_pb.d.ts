// package: user.v1
// file: user.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPhoneVerified(): boolean;
  setPhoneVerified(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    username: string,
    name: string,
    phone: string,
    phoneVerified: boolean,
    email: string,
    nickname: string,
    avatarUrl: string,
    createdAt: number,
  }
}

export class CheckUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUsernameRequest): CheckUsernameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUsernameRequest;
  static deserializeBinaryFromReader(message: CheckUsernameRequest, reader: jspb.BinaryReader): CheckUsernameRequest;
}

export namespace CheckUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class CheckUsernameResponse extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUsernameResponse): CheckUsernameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUsernameResponse;
  static deserializeBinaryFromReader(message: CheckUsernameResponse, reader: jspb.BinaryReader): CheckUsernameResponse;
}

export namespace CheckUsernameResponse {
  export type AsObject = {
    available: boolean,
  }
}

export class CheckEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailRequest): CheckEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailRequest;
  static deserializeBinaryFromReader(message: CheckEmailRequest, reader: jspb.BinaryReader): CheckEmailRequest;
}

export namespace CheckEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class CheckEmailResponse extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailResponse): CheckEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailResponse;
  static deserializeBinaryFromReader(message: CheckEmailResponse, reader: jspb.BinaryReader): CheckEmailResponse;
}

export namespace CheckEmailResponse {
  export type AsObject = {
    available: boolean,
  }
}

export class RequestPhoneVerificationRequest extends jspb.Message {
  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPhoneVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPhoneVerificationRequest): RequestPhoneVerificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPhoneVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPhoneVerificationRequest;
  static deserializeBinaryFromReader(message: RequestPhoneVerificationRequest, reader: jspb.BinaryReader): RequestPhoneVerificationRequest;
}

export namespace RequestPhoneVerificationRequest {
  export type AsObject = {
    phone: string,
  }
}

export class RequestPhoneVerificationResponse extends jspb.Message {
  getVerificationId(): string;
  setVerificationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPhoneVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPhoneVerificationResponse): RequestPhoneVerificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPhoneVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPhoneVerificationResponse;
  static deserializeBinaryFromReader(message: RequestPhoneVerificationResponse, reader: jspb.BinaryReader): RequestPhoneVerificationResponse;
}

export namespace RequestPhoneVerificationResponse {
  export type AsObject = {
    verificationId: string,
  }
}

export class VerifyPhoneRequest extends jspb.Message {
  getVerificationId(): string;
  setVerificationId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneRequest): VerifyPhoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneRequest;
  static deserializeBinaryFromReader(message: VerifyPhoneRequest, reader: jspb.BinaryReader): VerifyPhoneRequest;
}

export namespace VerifyPhoneRequest {
  export type AsObject = {
    verificationId: string,
    code: string,
  }
}

export class VerifyPhoneResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneResponse): VerifyPhoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneResponse;
  static deserializeBinaryFromReader(message: VerifyPhoneResponse, reader: jspb.BinaryReader): VerifyPhoneResponse;
}

export namespace VerifyPhoneResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class SignUpRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    username: string,
    name: string,
    phone: string,
    email: string,
    password: string,
  }
}

export class SignUpResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpResponse;
  static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    user?: User.AsObject,
  }
}

export class SocialLoginRequest extends jspb.Message {
  getProvider(): SocialProviderMap[keyof SocialProviderMap];
  setProvider(value: SocialProviderMap[keyof SocialProviderMap]): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SocialLoginRequest): SocialLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialLoginRequest;
  static deserializeBinaryFromReader(message: SocialLoginRequest, reader: jspb.BinaryReader): SocialLoginRequest;
}

export namespace SocialLoginRequest {
  export type AsObject = {
    provider: SocialProviderMap[keyof SocialProviderMap],
    accessToken: string,
  }
}

export class SocialLoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SocialLoginResponse): SocialLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SocialLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialLoginResponse;
  static deserializeBinaryFromReader(message: SocialLoginResponse, reader: jspb.BinaryReader): SocialLoginResponse;
}

export namespace SocialLoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    user?: User.AsObject,
  }
}

export class GetProfileRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetProfileResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileResponse): GetProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileResponse;
  static deserializeBinaryFromReader(message: GetProfileResponse, reader: jspb.BinaryReader): GetProfileResponse;
}

export namespace GetProfileResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    name: string,
    nickname: string,
    phone: string,
    email: string,
  }
}

export class UpdateProfileResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getCurrentPassword(): string;
  setCurrentPassword(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    currentPassword: string,
    newPassword: string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
  }
}

export class UpdateAvatarRequest extends jspb.Message {
  getAvatarUrl(): string;
  setAvatarUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvatarRequest): UpdateAvatarRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvatarRequest;
  static deserializeBinaryFromReader(message: UpdateAvatarRequest, reader: jspb.BinaryReader): UpdateAvatarRequest;
}

export namespace UpdateAvatarRequest {
  export type AsObject = {
    avatarUrl: string,
  }
}

export class UpdateAvatarResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAvatarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAvatarResponse): UpdateAvatarResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAvatarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAvatarResponse;
  static deserializeBinaryFromReader(message: UpdateAvatarResponse, reader: jspb.BinaryReader): UpdateAvatarResponse;
}

export namespace UpdateAvatarResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class SearchUsersRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersRequest): SearchUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersRequest;
  static deserializeBinaryFromReader(message: SearchUsersRequest, reader: jspb.BinaryReader): SearchUsersRequest;
}

export namespace SearchUsersRequest {
  export type AsObject = {
    query: string,
    limit: number,
    offset: number,
  }
}

export class SearchUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): void;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersResponse): SearchUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersResponse;
  static deserializeBinaryFromReader(message: SearchUsersResponse, reader: jspb.BinaryReader): SearchUsersResponse;
}

export namespace SearchUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export interface SocialProviderMap {
  SOCIAL_PROVIDER_UNSPECIFIED: 0;
  SOCIAL_PROVIDER_KAKAO: 1;
  SOCIAL_PROVIDER_NAVER: 2;
}

export const SocialProvider: SocialProviderMap;

