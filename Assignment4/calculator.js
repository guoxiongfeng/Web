/*预置显示*/
formula = "0";
ans = "0";
/*动态生成按钮*/
window.onload= function () {
	text = "";
	a = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '&larr;', '+', '(', ')', 'CE', '='];
	for (var i = 0; i < a.length; i++) {
		text = text + "<button class = 'keys' onclick = 'getMsg();'>" + a[i] + "</button>";
	};
	document.getElementById("button").innerHTML = text;
	update();
}

/*处理错误算式， 发出警告*/
window.onerror= function(){
	formula = "0";
	alert("请输入正确的计算式!");
	update();
}
/*
更新显示屏
当前采用策略：=之后立即清空表达式
*/
function update() {
	if (ans != "0") {
		document.getElementById("show").innerHTML = ans;
		ans = '0';
		formula = '0';
	}
	else {
		if (String(formula).length <= 50) document.getElementById("show").innerHTML = String(formula)
		else document.getElementById("show").innerHTML = String(formula).substring(String(formula).length - 50, String(formula).length);
	}
}

/*非运算符号的处理*/
function specialDeal(s) {
	if (s == "←") {
		formula = String(formula);
		if (String(formula).length == 1) formula = '0';
		else formula = formula.substring(0, formula.length - 1);
	}
	if (s == "CE") formula = "0";
	/*错误表达式的判断*/
	if (s == "=") {
			ans = Number(eval(formula));
			formula = ans;
	}
}
/*运算符和数字的处理*/
function deal(s) {
	if (s != "←" && s != "CE" && s != "=") {
		if (formula == "0") formula = s;
		else formula = formula + s;
	}
	else specialDeal(s);
	update();
}
/*接收来自html的事件作为js处理的入口*/
function getMsg(argument) {
	s = event.target.innerHTML;
	deal(s);
}


/*
明日task：
查看具体demand。
调整样式；(px tools), beautiful 整体布局;
font-size, family
非法字符串判断 (!important)
*/