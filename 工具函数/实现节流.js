/**
 * 函数节流 throttle： 函数节流的基本思想是函数预先设定一个执行周期，
 * 当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
 */
function throttle(fn, time) {
	let flag = true;
	return function () {
		if (!flag) return;
		flag = false;
		setTimeout(function () {
			fn();
			flag = true;
		}, time);
	};
}
