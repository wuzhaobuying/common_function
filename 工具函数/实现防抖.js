/**
 * 函数去抖 debounce： 当调用函数n秒后，才会执行该动作，
 * 若在这n秒内又调用该函数则将取消前一次并重新计算执行时间。
 */
function debounce(fn, delay = 500) {
	// timer 是闭包中的
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
