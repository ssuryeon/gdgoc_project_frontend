// package: chat.v1
// file: chat.proto

import * as chat_pb from "./chat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceJoinChat = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.ChatMessage;
  readonly responseType: typeof chat_pb.ChatMessage;
};

type ChatServiceGetRoomID = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.GetRoomIDRequest;
  readonly responseType: typeof chat_pb.GetRoomIDResponse;
};

type ChatServiceGetMyRooms = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.GetMyRoomsRequest;
  readonly responseType: typeof chat_pb.GetMyRoomsResponse;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly JoinChat: ChatServiceJoinChat;
  static readonly GetRoomID: ChatServiceGetRoomID;
  static readonly GetMyRooms: ChatServiceGetMyRooms;
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

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  joinChat(metadata?: grpc.Metadata): BidirectionalStream<chat_pb.ChatMessage, chat_pb.ChatMessage>;
  getRoomID(
    requestMessage: chat_pb.GetRoomIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.GetRoomIDResponse|null) => void
  ): UnaryResponse;
  getRoomID(
    requestMessage: chat_pb.GetRoomIDRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.GetRoomIDResponse|null) => void
  ): UnaryResponse;
  getMyRooms(
    requestMessage: chat_pb.GetMyRoomsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.GetMyRoomsResponse|null) => void
  ): UnaryResponse;
  getMyRooms(
    requestMessage: chat_pb.GetMyRoomsRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.GetMyRoomsResponse|null) => void
  ): UnaryResponse;
}

