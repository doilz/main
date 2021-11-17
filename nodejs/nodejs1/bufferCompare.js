var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var x = Buffer.compare(buf1, buf2);    // 같으면 0 출력.

console.log(x);   

var buf1 = Buffer.from('a');

var buf2 = Buffer.from('b');

var x = Buffer.compare(buf1, buf2);     //우측이 크면 -1 
console.log(x);

var x = Buffer.compare(buf2, buf1);     //좌측이 크면 1 

console.log(x);

// ======

var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
var array = [buf1,buf2,buf3];

console.log(array);   // 데이터청크 출력
console.log("=============================");

console.log(array.sort(Buffer.compare));



// static function 모듈 안에서 쓰기 위해 만듬.