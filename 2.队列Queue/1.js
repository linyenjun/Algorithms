//约瑟夫环
//在一个数组里面放了0-99的数字，每相隔两个删一次，最后循环到末尾的时候又反复的执行，求：最后被删的数
//思路：
//从队列删一个数就将index+1，当index%3 == 0的时候这个数就是要被删除的数，不等于0的数是不要被删除的数，加到队列的尾部

Queue = require("./queue");
function ring(theArr){
   var queue = new Queue.Queue()
   for (var i=0;i<theArr.length;i++){
      queue.enqueue(theArr[i])
   }

   var index = 0
   while(queue.size()!==1){
     var item = queue.dequeue()
     index +=1
     if(index % 3 !==0){
       queue.enqueue(item)
     }
   }

   return queue.head()

}

//初始的环
var arr=[]
for (var i=0;i<=99;i++){
  arr.push(i)
}

console.log(ring(arr))

