import mitt from "mitt";

export const socketEvents = mitt<{
  initSocket: void;
  socketReady: void;
  onlineUsers: any;
  receiveMessage: any;
  chatHistory: any;
  updateOnlineUsers: any;
  emitAlarms: any;
  msgAlarmsRead: any;
  notifyMessageAlarm: any;
  sendAlarm: any;
}>();
