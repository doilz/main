var buf = Buffer.from('하이루 방가방가');
var x = "abc";
// 눈에 보이는건 스트링, 버퍼안에서는 2진수

console.log(buf.toString('utf-8'));    // utf-8 문자로 표현.
console.log(buf.toJSON());
console.log("=================================")
console.log(buf.includes('welcome'));
console.log("=================================")
console.log(buf.indexOf('welcome'));
console.log("=================================")
console.log(buf.indexOf('l'));  // 첫번째 l 반환.  나는 첫번째만 필요해, 할때 유용하다.

console.log("=================================")
console.log(Buffer.isBuffer(buf));
console.log(Buffer.isBuffer(x));

console.log("=================================")

console.log(Buffer.isEncoding('ascii'));




//버퍼를 찾을때 인덱스로 찾아서 붙여넣기 쌉가능
