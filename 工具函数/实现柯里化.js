/**
 * 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
 * 用途：1.延迟计算；2.参数复用；3.动态生成函数
 */
function curry(fn, currentArgs = []) {
	return function (...args) {
		currentArgs = currentArgs.concat(args);
		if (currentArgs.length < fn.length) {
			return curry.call(this, fn, ...currentArgs);
		}
		return fn.call(this, ...currentArgs);
	};
}
