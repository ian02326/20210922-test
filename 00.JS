var arr=[],count=52;
for(var i=1;i<=count;i++){
arr.push(i);
}
 
arr.sort(function(a,b){
var rand=Math.floor(Math.random()*3);
if(rand==0){
return 1;
}else if(rand==1){
return -1;
}else{
return 0;
}
});
 
 
var players=[[],[],[],[]];
for(var i=0;i<arr.length;i++){
var p=players[i%players.length];
p.push(arr[i]);
}
 
 
//1表示黑桃A,2表示黑桃2...,13表示黑桃K,
//14~26红桃
//27~39梅花
//40~52方块
var str="A,2,3,4,5,6,7,8,9,10,J,Q,K".split(/,/);
for(var i=0;i<players.length;i++){
    document.write("玩家"+(i+1)+"：&nbsp;");
    var pi=players[i];
    pi.sort(function(x,y){
        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else {
            return 0;
        }
    });
    for(var j=0;j<pi.length;j++){
        var num=pi[j];
        var ok=num%13;
        ok=ok==0?13:ok;
        var what=str[ok-1];
        var tp;
        if(num>=1&&num<=13){
            tp="黑桃";
        }else if(num>13&&num<27){
            tp="红桃";   
        }else if(num>26&&num<40){
            tp="梅花";   
        }else{
            tp="方块";   
        }
        document.write(tp+what+"&nbsp;");
    }  
    document.write("<br />");
}