//队列是什么？队列是一种线性表，只能在头部删除元素，尾部加入元素
//与栈的不同：栈是先进后出，队列是先进先出
//这里用数组的形式来兴建一个队列Queue的类

function Queue(){
   var items=[]
   
   //	向队列尾部添加⼀个元素
   this.enqueue = function(item){
      items.push(item)
   }
   //	移除队列头部的元素
   this.dequeue = function(){
      return items.shift()
   }

   this.head = function(){
     return items[0]
   }
   
   this.size = function(){
     return items.length
   }

   this.clear = function(){
     items =[]
   }

   this.isEmpty = function(){
     return items.length == 0
   }

   this.tail = function(){
     return items[items.length-1]
   }

}

exports.Queue = Queue;