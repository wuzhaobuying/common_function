/**
 *
 * @param {改变this指向} context
 * @param {参数数组} args
 */
Function.prototype.myApply = (context = window, args) => {
	context.fn = this;
	let res = context.fn(...args);
	delete context.fn;
	return res;
};
