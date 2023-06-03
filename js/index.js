//打字机
const text = document.querySelector('.text');
const txt = ["欢迎来到402", "一个记事墙", "开发耗时114514h"];

var index = 0;
var xiaBiao = 0;
var huan = true;

setInterval(function () {

    if (huan) {
        text.innerHTML = txt[xiaBiao].slice(0, ++index);
    }
    else {
        text.innerHTML = txt[xiaBiao].slice(0, index--);
    }

    if (index == txt[xiaBiao].length + 5) {
        huan = false;
    }
    else if (index < 0) {
        index = 0;
        huan = true;
        xiaBiao++;
        if (xiaBiao >= txt.length) {
            xiaBiao = 0;
        }
    }

}, 200)
//打字机

//联系我
$(".emil").click(
    function () {
        $(".dbj").fadeIn();
    }
)

$(".em-1").click(
    function () {
        $(".dbj").hide();
    }
)

$(".lem").click(
    function () {
        $(".dbj").fadeIn();
    }
)
//联系我

//加载
window.onload = function () {
    $(".ld").fadeOut(1000);
}
    //加载

    //价值观点击特效
    (function () {
        var a_idx = 0;
        window.onclick = function (event) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国",
                "敬业", "诚信", "友善");

            var heart = document.createElement("b"); //创建b元素
            heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

            document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
            a_idx = (a_idx + 1) % a.length;
            heart.style.cssText = "position: fixed;"; //给p元素设置样式
            heart.style.zIndex = "99999999999";

            var f = 16, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标  
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 1.2; // 放大缩小

            var timer = setInterval(function () { //添加定时器
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;z-index: 999999999; user-select: none; font-family: '微软雅黑'; position: fixed;color:" +
                        c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                        s + ");";

                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 15)

        }
        // 随机颜色
        function randomColor() {

            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";

        }
    }());
//价值观点击特效

