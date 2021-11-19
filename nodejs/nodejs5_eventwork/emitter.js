// QT 멀티플랫폼 오픈 소스 라이브러리 , 리눅스, 맥, 윈도우용 실행파일 생김,
// 윈도우 리눅스 맥은 이벤트 개념이 달름
// emit 오픈소스류에서 주로 사용함.
// qt도 


const events = require("events");
const { EventEmitter } = require("stream");
const eventEmitter = new events.EventEmitter();    // new 모듈.클래스

var listener1 = function listener1() {
    console.log("listner1 excuted! ! !")
};


var listener2 = function listener2() {
    console.log("listner2 excuted! ! !")
}


var listener3 = function listener3() {
    console.log("listner3 excuted! ! !")
}
   

// 커넥션이라는 에밋에다가 리스너를 등록할거야
// Bind the connection event with the listner 1
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);
eventEmitter.on('connection', listener3);
  
var eventListner = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListner + " Listener(s) listening to connection event! ! !");


eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listner1 removed");

var eventListner = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListner + " Listener(s) listening to connection event! ! !");

console.log("program finished");