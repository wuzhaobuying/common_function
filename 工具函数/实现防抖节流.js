/**
 * 函数去抖 debounce： 当调用函数n秒后，才会执行该动作，
 * 若在这n秒内又调用该函数则将取消前一次并重新计算执行时间。
 */
function debounce(fn, delay = 500) {
	let timer = null;
	return function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments);
			timer = null;
		}, delay);
	};
}
/**
 * 函数节流 throttle： 函数节流的基本思想是函数预先设定一个执行周期，
 * 当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
 */
function throttle(fn, delay = 100) {
	let timer = null;
	return function () {
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments);
			timer = null;
		}, delay);
	};
}
