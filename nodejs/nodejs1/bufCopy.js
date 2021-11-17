var buf1 = Buffer.from('abcdefghijklmnopqrstu');
var buf2 = Buffer.from("hello world");

buf2.copy(buf1, 2);   // buf1을 2번째부터 복사해서 붙여넣기해라
buf2.copy(buf1, 2, 0, 5);  // 버퍼1의 2번째 인덱스 0부터 5바이트 까지를 버퍼1에 카피를 해라.
console.log(buf1);
console.log(buf1.toString());


// buf1.write('hello world', 2);
// console.log(buf1);
// console.log(buf1.toString());