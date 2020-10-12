//中序表达式转成后缀表达式（这个例子比较复杂）
//输⼊:["12","+",	"3"]，输出:["12","3","+"]


// 输⼊:["(","1","+","(","4","+","5","+","3",")", "-","3",")","+","(","9","+","8",")"]
// 输出:[	'1',	'4',	'5',	'+',	'3',	'+',	'+',	'3',	'-',	'9',	'8',	'+',	'+'	]

//思路：准备一个栈，一个空数组，定义运算符优先级
//栈用来处理"("，")"，遇到"("就压入栈，遇到")"的时候，就把顶层的元素加到数组里面
//再次遇到"("就弹出"("
//遇到运算符，就把栈顶的运算符弹出加到数组里，一直到优先级小于当前运算符，并且把当前运算符入栈
//循环结束后，栈里的元素都弹出，加到数组里面


Stack = require("./stack");

//定义运算符的优先级
var priority_map = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2};

function infix_exp_2_postfix_exp(exp){
    var stack = new Stack.Stack();

    var postfix_lst = [];
    for(var i = 0;i<exp.length;i++){
        var item = exp[i];
        // 如果是数字,直接放入到postfix_lst中
        if(!isNaN(item)){
            postfix_lst.push(item);
        }else if (item == "("){
            // 遇到左括号入栈
            stack.push(item);
        }else if (item == ")"){
            // 遇到右括号,把栈顶元素弹出,直到遇到左括号
            while(stack.top() != "("){
                postfix_lst.push(stack.pop());
            }
            stack.pop();   // 左括号出栈
        }else{
            // 遇到运算符,把栈顶的运算符弹出,直到栈顶的运算符优先级小于当前运算符
            while(!stack.isEmpty() && ["+", "-", "*", "/"].indexOf(stack.top()) >= 0
            && priority_map[stack.top()] >= priority_map[item]){
                // 把弹出的运算符加入到postfix_lst
                postfix_lst.push(stack.pop());
            }
            // 当前的运算符入栈
            stack.push(item);
        }

    }

    // for循环结束后, 栈里可能还有元素,都弹出放入到postfix_lst中
    while(!stack.isEmpty()) {
        postfix_lst.push(stack.pop())
    }

    return postfix_lst
};


// 12+3
console.log(infix_exp_2_postfix_exp(["12","+", "3"]))
// 2-3+2
console.log(infix_exp_2_postfix_exp(["2","-", "3", "+", "2"]))
// (1+(4+5+3)-3)+(9+8)
var exp = ["(","1","+","(","4","+","5","+","3",")","-","3",")","+","(","9","+","8",")"];
console.log(infix_exp_2_postfix_exp(exp))

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = ['(', '1', '+', '(', '4', '+', '5', '+', '3', ')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']
console.log(infix_exp_2_postfix_exp(exp))

console.log(infix_exp_2_postfix_exp(["12","+", "3","*", "5"]))
console.log(infix_exp_2_postfix_exp(["12","*", "3","+", "5"]))
