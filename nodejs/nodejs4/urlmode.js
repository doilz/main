const url = require("url");
const addr = 'http://localhost:3001/deafult.html?year=2021&month=Oct';


var qString = url.parse(addr, true);    // 문자열로도 파싱이 가능하다.

console.log(qString.host + " host");
console.log(qString.pathname + " pathname");
console.log(qString.search + " search");


var data = qString.query;
console.log(data.month + " query month");
