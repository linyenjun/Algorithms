//计算逆波兰表达式
//后缀表达式的数组改成中缀表达式的计算
//如果数组里面的元素是不是运算符号，就加到栈里，如果不是就弹出两个数，并将这两个数进行运算，并把运算的结果压入栈中

Stack = require('./stack')


function cal_exp(exp){
  var stack = new Stack.Stack()
   for(var i=0;i<exp.length;i++){
     var item = exp[i]
     if(['+','-','*','/'].indexOf(item)>=0){
       var num1 = stack.pop()
       var num2 = stack.pop()
       var calstring = num2+item+num1
       var res = parseInt(eval(calstring))
      //  console.log(res,num1,num2)
       stack.push(res)
     }else{
       stack.push(item)
     }
   }
   return stack.pop()
}

var	exp_1	= ["4", "13", "5", "/", "+"];
console.log(cal_exp(exp_1))
//exp_1运行 （13/5）+ 4 答案是 6