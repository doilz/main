var buf1 = Buffer.from('abcd');
var buf2 = Buffer.from('abcd');

console.log(buf1.equals(buf2));

// 버퍼를 갖고 있을일이 많다.
// 로그인할때 16진수로 나오는 값을 저장할때
// 엄청 많이 씀 모든 프로그래밍에서 씀.
// 데이터 자체를 바이너리, 메모리로 이용하려고 할때
// 자바는 버퍼가 없고 nodejs가 제공해줌.
// 그냥 찍으면 데이터 청크
// 버퍼는 