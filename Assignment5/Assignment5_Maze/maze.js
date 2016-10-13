
var outFlag = false;

window.onload= function(){
	document.getElementById("start").addEventListener("mouseover", Start);

}

function Start() {
	/*
	初始化：
	   开始提示结果为空（隐藏）
	   初始化背景色
	   鼠标样式设置
	   禁用右键
	   监听鼠标事件， 更新Flag值。
	*/
	$("#hit").css("opacity", 0);
	$(".obstancle").css("background-color", "#999999");
	$("body").css("cursor", "pointer");
	document.oncontextmenu=new Function("event.returnValue=false;");
	$("#maze").mouseover(outFlag = false);
	
	/*
	鼠标离开游戏窗体时，
		恢复背景色为初始值
		鼠标样式恢复
		Flag值更新
		右键可用.
	*/
	$("#maze").mouseleave(function () {
		$(".obstancle").css("background-color", "#999999");
		$("body").css("cursor", "auto");
		outFlag = true;
		document.oncontextmenu=new Function("event.returnValue=true;");
	});

	/*障碍物碰撞及结束条件*/
	$(".obstancle").mouseover(Lose_deal);
	$("#end").mouseover(Judge);
}



/*中途撞墙提前结束游戏*/
function Lose_deal() {
	mouse_pos = event.target;
		mouse_pos.style.cssText = "background-color: red";
	document.getElementById("hit").innerHTML = "You lose.";
	EndGame();
}

/*触到"E"时判断是否作弊以显示最终结果*/
function Judge() {
	if (outFlag)
		document.getElementById("hit").innerHTML = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
	else
		document.getElementById("hit").innerHTML = "You Win!";

	EndGame();
}

/*结束游戏解绑事件， 恢复到初始状态*/
function EndGame() {
	$("#hit").css("opacity", 1);
	$(".obstancle").unbind("mouseover");
	$("#end").unbind("mouseover");
	$("body").css("cursor", "auto");
}

/*---------------------*/
