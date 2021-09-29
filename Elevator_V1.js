const readline = require('readline-sync');

var top = 10;
var bottom = 1;
var currentFloor = 5;
var targetFloor;

while (true) {//無窮迴圈

    //輸入欲達樓層
    targetFloor = readline.question('目前在' + currentFloor + '樓層')
    //判斷樓層是否合理
    targetFloor = parseInt(targetFloor);     //轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > 10) {
        console.log("請輸入介於" + bottom + " ~ " + TOP + "間的樓層")
        continue;
    }
    if(targetFloor==currentFloor){
        console.log("離開樓層");
        break
    }else{
        //移動電梯抵達樓層
        //currentFloor 移到 targetFloor
        console.log("to be continue...")
    }
   
}