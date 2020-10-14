//扬辉三角
//         1
//       1   1
//     1   2   1
//   1   3   3   1
//1    4   6   4    1
//有n层

Queue = require("./queue") 

function yanghui(n){
   var queue = new Queue.Queue()
   queue.enqueue(1)
   //这个循环层数
   for(var i=1 ; i<=n ; i++){
     var line =""
     var pre = 0
     //这个循环生成计算的值
     for(var j=0;j<i;j++){
       var item = queue.dequeue()
       line += item + ","
       var value = item + pre;
       pre = item 
       queue.enqueue(value)
     }
     //每一层最后是1
     queue.enqueue(1)
     console.log(line)
   }
}

yanghui(8)