// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_chat_v1_ChatMessage(arg) {
  if (!(arg instanceof chat_pb.ChatMessage)) {
    throw new Error('Expected argument of type chat.v1.ChatMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_v1_ChatMessage(buffer_arg) {
  return chat_pb.ChatMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_v1_GetMyRoomsRequest(arg) {
  if (!(arg instanceof chat_pb.GetMyRoomsRequest)) {
    throw new Error('Expected argument of type chat.v1.GetMyRoomsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_v1_GetMyRoomsRequest(buffer_arg) {
  return chat_pb.GetMyRoomsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_v1_GetMyRoomsResponse(arg) {
  if (!(arg instanceof chat_pb.GetMyRoomsResponse)) {
    throw new Error('Expected argument of type chat.v1.GetMyRoomsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_v1_GetMyRoomsResponse(buffer_arg) {
  return chat_pb.GetMyRoomsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_v1_GetRoomIDRequest(arg) {
  if (!(arg instanceof chat_pb.GetRoomIDRequest)) {
    throw new Error('Expected argument of type chat.v1.GetRoomIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_v1_GetRoomIDRequest(buffer_arg) {
  return chat_pb.GetRoomIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_v1_GetRoomIDResponse(arg) {
  if (!(arg instanceof chat_pb.GetRoomIDResponse)) {
    throw new Error('Expected argument of type chat.v1.GetRoomIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_v1_GetRoomIDResponse(buffer_arg) {
  return chat_pb.GetRoomIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 채팅 서비스 정의
var ChatServiceService = exports.ChatServiceService = {
  // 양방향 스트리밍 RPC
joinChat: {
    path: '/chat.v1.ChatService/JoinChat',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.ChatMessage,
    responseType: chat_pb.ChatMessage,
    requestSerialize: serialize_chat_v1_ChatMessage,
    requestDeserialize: deserialize_chat_v1_ChatMessage,
    responseSerialize: serialize_chat_v1_ChatMessage,
    responseDeserialize: deserialize_chat_v1_ChatMessage,
  },
  // 방 ID 발급 API
getRoomID: {
    path: '/chat.v1.ChatService/GetRoomID',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetRoomIDRequest,
    responseType: chat_pb.GetRoomIDResponse,
    requestSerialize: serialize_chat_v1_GetRoomIDRequest,
    requestDeserialize: deserialize_chat_v1_GetRoomIDRequest,
    responseSerialize: serialize_chat_v1_GetRoomIDResponse,
    responseDeserialize: deserialize_chat_v1_GetRoomIDResponse,
  },
  // [추가] 내 채팅방 목록 조회 API
getMyRooms: {
    path: '/chat.v1.ChatService/GetMyRooms',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetMyRoomsRequest,
    responseType: chat_pb.GetMyRoomsResponse,
    requestSerialize: serialize_chat_v1_GetMyRoomsRequest,
    requestDeserialize: deserialize_chat_v1_GetMyRoomsRequest,
    responseSerialize: serialize_chat_v1_GetMyRoomsResponse,
    responseDeserialize: deserialize_chat_v1_GetMyRoomsResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService, 'ChatService');
