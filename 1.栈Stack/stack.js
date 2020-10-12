//什么是栈Stack？栈是先进后出的储存

// 栈的方法：
// 1.push：添加一个元素到栈里
// 2.pop：取出栈里最后一个加到栈里的元素，并且删除在栈里的这个元素
// 3.top：取出栈里最后一个加到栈里的元素，但不删除在栈里的这个元素
// 4.isEmpty：判断栈是否为空
// 5.size：获取栈里元素的数量
// 6.clear：清空栈

//下面的代码是用数组写一个栈对象,items是作为存取数据的数组

function Stack(){
  var items =[]

  this.push = function(item){
    items.push(item)
  }

  this.pop = function(){
    return items.pop()
  }

  this.top = function(){
    return items[items.length-1]
  }
  
  this.isEmpty = function(){
    return items.length == 0
  }

  this.size = function(){
    return items.length
  }

  this.clear = function(){
    items=[]
  }
}

//作为一个类，是要导出的
exports.Stack = Stack;