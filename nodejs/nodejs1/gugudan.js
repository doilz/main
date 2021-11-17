var rowResultArr = [];


  exports.gugudan = function() { 
      for(var i=1;i<10;i++) {
      
        // rowResultArr.replaceAll(',', '');
        for(var k=1;k<10;k++) {
            let result = i * k;
        
            rowResultArr.push(i + " * " + k + " = " + result.toString().padStart(2) + " " + "\n");
        }
        
        console.log(rowResultArr.toString().replaceAll(',', ''));
    }}




//결과값을 받을 버퍼

// 계산
// 결과값을 버퍼로 쏴줌


//구구단 앱을 받음
//앱을 스트링으로 출력