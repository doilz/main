const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = () => {
    console.log("Connection success! ! !");

    eventEmitter.emit('data_recieved');  // 데이타리시브드 이벤트 발생 커
}


eventEmitter.on('connection', connectHandler);   // 커넥션 에밋 -> 커넥트 핸들러 실행

eventEmitter.on('data_recieved', () => {
    console.log("data recieved success ! ! !");
});


eventEmitter.emit('connection');          // 백그라운드 프로세서에서 트리거로 빵 빵 빵

console.log("Program finished");


//on 이벤트 핸들러 등록 emit 이벤트 발생

