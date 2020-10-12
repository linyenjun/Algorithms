//利用栈的特性，写一个function判断是否合法
//这个function需要分辨字符串里的"(" , ")" 是否对称
//思路：遇到"("把它压入栈中，如果遇到")"如果发现栈是空的就返回false，要不就弹出栈里面的"("
Stack = require('./stack')

function justice(str){
  var	stack	= new Stack.Stack();
  for(var i=0;i<str.length; i++){
    var item = str[i]
    if(item=="("){
      stack.push(item)
    }else if(item==")"){
      if(stack.isEmpty()){
        return false
      }else{
        stack.pop()
      }
    }
  }
  return stack.size() == 0;

}

console.log(justice("(123/456789"))
console.log(justice("sdf(ds(ew(we)rw)rwqq)qwewe"))
console.log(justice("(123)"))