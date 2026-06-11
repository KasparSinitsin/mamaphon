export declare enum ConnectionStatus {
    Offline = "offline",
    Online = "online",
    Calling = "calling",
    Incoming = "incoming",
    Connected = "connected"
}
export interface AuthRequest {
    password: string;
}
export interface AuthResponse {
    token: string;
}
export interface Track {
    title: string;
    artist: string;
    filename: string;
}
export type SignalingMessage = {
    type: 'join';
    roomId: string;
} | {
    type: 'offer';
    sdp: RTCSessionDescriptionInit;
} | {
    type: 'answer';
    sdp: RTCSessionDescriptionInit;
} | {
    type: 'ice-candidate';
    candidate: RTCIceCandidateInit;
} | {
    type: 'leave';
};
//# sourceMappingURL=index.d.ts.map