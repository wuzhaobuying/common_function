/**
 *
 * @param {循环执行的函数} fn
 * @param {间隔} time
 */
function _setInterval(fn, time) {
	const _interval = () => {
		setTimeout(_interval, time);
		fn();
	};
	setTimeout(_interval, time);
}
