"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionStatus = void 0;
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Offline"] = "offline";
    ConnectionStatus["Online"] = "online";
    ConnectionStatus["Calling"] = "calling";
    ConnectionStatus["Incoming"] = "incoming";
    ConnectionStatus["Connected"] = "connected";
})(ConnectionStatus || (exports.ConnectionStatus = ConnectionStatus = {}));
