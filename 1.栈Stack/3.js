//实现有min方法的栈
//用分治思想来实现吧，用两个栈来实现，一个栈用来做一般栈的工作，另一个栈用来存储最小值

Stack = require("./stack")

function minStack(){
   var data_stack = new Stack.Stack()
   var min_stack = new Stack.Stack()

   this.push = function(item){
     data_stack.push(item)

     if( min_stack.isEmpty() || item<min_stack.top()){
       //如果item的值比min_stack.top()小，那就把item加到栈的最后一个元素
       min_stack.push(item)
     }else{
       min_stack.push(min_stack.top())
     }
   }

   this.pop =function(){
     data_stack.pop()
     return min_stack.pop()
   }

   this.min = function(){
     return min_stack.top()
   }

}

minstack = new minStack()

minstack.push(2)
minstack.push(33)
minstack.push(999)

console.log(minstack.min())

