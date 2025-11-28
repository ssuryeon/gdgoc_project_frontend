import { NativeGRPCTransport } from '@matejdr/react-native-grpc-bridge';
import { grpc } from '@improbable-eng/grpc-web';
import { ReactNativeTransport } from '@improbable-eng/grpc-web-react-native-transport';

grpc.setDefaultTransport(NativeGRPCTransport({ withCredentials: true }));

