// package: chat.v1
// file: chat.proto

import * as jspb from "google-protobuf";

export class ChatMessage extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    roomid: string,
    username: string,
    message: string,
  }
}

export class GetRoomIDRequest extends jspb.Message {
  getMyId(): string;
  setMyId(value: string): void;

  getOtherId(): string;
  setOtherId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomIDRequest): GetRoomIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomIDRequest;
  static deserializeBinaryFromReader(message: GetRoomIDRequest, reader: jspb.BinaryReader): GetRoomIDRequest;
}

export namespace GetRoomIDRequest {
  export type AsObject = {
    myId: string,
    otherId: string,
  }
}

export class GetRoomIDResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomIDResponse): GetRoomIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomIDResponse;
  static deserializeBinaryFromReader(message: GetRoomIDResponse, reader: jspb.BinaryReader): GetRoomIDResponse;
}

export namespace GetRoomIDResponse {
  export type AsObject = {
    roomId: string,
  }
}

export class GetMyRoomsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyRoomsRequest): GetMyRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyRoomsRequest;
  static deserializeBinaryFromReader(message: GetMyRoomsRequest, reader: jspb.BinaryReader): GetMyRoomsRequest;
}

export namespace GetMyRoomsRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ChatRoomInfo extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): void;

  getOtherUserId(): string;
  setOtherUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRoomInfo): ChatRoomInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatRoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRoomInfo;
  static deserializeBinaryFromReader(message: ChatRoomInfo, reader: jspb.BinaryReader): ChatRoomInfo;
}

export namespace ChatRoomInfo {
  export type AsObject = {
    roomId: string,
    otherUserId: string,
  }
}

export class GetMyRoomsResponse extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<ChatRoomInfo>;
  setRoomsList(value: Array<ChatRoomInfo>): void;
  addRooms(value?: ChatRoomInfo, index?: number): ChatRoomInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyRoomsResponse): GetMyRoomsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyRoomsResponse;
  static deserializeBinaryFromReader(message: GetMyRoomsResponse, reader: jspb.BinaryReader): GetMyRoomsResponse;
}

export namespace GetMyRoomsResponse {
  export type AsObject = {
    roomsList: Array<ChatRoomInfo.AsObject>,
  }
}

