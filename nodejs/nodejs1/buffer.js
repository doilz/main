// 메모리
// allocation 할당
// buffer

var buf = [Buffer.from('abc')];
console.log(buf);
// 메모리 버퍼를 콘솔에서 안찍는다. 데이터 구조로 찍어준다.

var buf = Buffer.alloc(15, 'a');

var buf = Buffer.allocUnsafe(15);  // 초기화 안함.
buf.fill(10);



console.log(buf);  // 61 62 63 아스키로 abc 찍어줌.



