//用两个队列实现一个栈
//这个代码帮助总结栈和队列，通了就懂了
//思路：
//push方法，top方法，pop方法
//push方法：如果两个队列都为空，就向其中一个添加数据。如果其中一个不为空，就把数据都添加给不为空的那个队列
//top方法：两个队列只要两个为空，或是其中一个不为空，就返回那个不为空的队列的最后一个元素
//pop方法：这个方法是要消除栈的最尾元素，把有数据的队列最后一个删除后，把这个尾端元素加到另一个空的队列，一直到本来有数据的队列剩下一个元素



Queue = require("./queue")

function QueneStack(){
  var queue_A = new Queue.Queue()
  var queue_B = new Queue.Queue()
  var data_queue = null  //这个是放数据的队列
  var empty_queue = null  //这个是备份用的队列
  
  //初始化
  var initial = function(){
     if(queue_A.isEmpty() && queue_B.isEmpty()){
       data_queue=queue_B
       empty_queue=queue_A
     }else if(queue_A.isEmpty()){
       data_queue=queue_A
       empty_queue=queue_B
     }else{
      data_queue=queue_B
      empty_queue=queue_A
     }
  }

  this.push = function(data){
    initial()
    data_queue.enqueue(data)
  }

  this.top = function(){
    initial()
    return data_queue.tail()
  }

  this.pop = function(){
    initial()
    while(data_queue.size()>1){
      empty_queue.enqueue(data_queue.dequeue())
    }
    return data_queue.dequeue()
  }
}

var queueStack = new QueneStack()

queueStack.push(2)
queueStack.push(3)
queueStack.push(4)

console.log(queueStack.top())			