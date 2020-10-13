//斐波那契数列
//可以用递归来实现，但是也可以用队列来实现
//斐波那契数列的第一项和第二项是1，第三项是前两项的和，循环结束的条件是index<n-2

Queue = require("./queue");

function fibonacci(n){
  var queue = new Queue.Queue()
   queue.enqueue(1)
   queue.enqueue(1)
   var index = 0
   while(index<n-2){
     var num1 = queue.dequeue()
     var heand_num =queue.head()
     var next = num1+heand_num
     queue.enqueue(next)
     index +=1
   }
   queue.dequeue()
   return queue.head()
}

console.log(fibonacci(8))