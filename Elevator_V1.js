const readline = require('readline-sync');

var top = 10;
var bottom = 1;
var currentFloor = 5;
var targetFloor;

while (true) {//無窮迴圈

    //輸入欲達樓層
    targetFloor = readline.question('目前在' + currentFloor + '樓層,要去哪?')
    //判斷樓層是否合理
    targetFloor = parseInt(targetFloor);     //轉成整數
    if (isNaN(targetFloor) || targetFloor < bottom || targetFloor > top) {
        console.log("請輸入介於" + bottom + " ~ " + top + "間的樓層")
        continue;
    }
    if (targetFloor == currentFloor) {
        console.log("離開樓層");
        break
    } else {
        //移動電梯抵達樓層
        //currentFloor 移到 targetFloor
        if (targetFloor < currentFloor) {
            console.log("電梯往下...");
            while (targetFloor < currentFloor) {
                currentFloor = currentFloor - 1
                //currentFloor -= 1;
                //currentFloor--;
                console.log("電梯在" + currentFloor + "樓")
            }
        } else {              //上去
            console.log("電梯往上...");
            while (targetFloor > currentFloor) {
                currentFloor = currentFloor + 1;
                // currentFloor += 1;
                // currentFloor++;
                console.log("電梯在" + currentFloor + "樓");
            }

        }
    }
}