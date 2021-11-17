var buf = Buffer.from('abcd');

for(x of buf.entries()) {            //index와 값 모두 꺼내옴 십진수 아스키로 표시.
    console.log(x);
}

console.log("=================================")

for(x of buf.keys()) {            //키 인덱스, 값은 (알파벳) 인덱스만으로 접근하고 싶을때
    console.log(x);
}

console.log("=================================")


for(x of buf.values()) {            //키 인덱스, 값은 (알파벳) 인덱스만으로 접근하고 싶을때
    console.log(x);
}
