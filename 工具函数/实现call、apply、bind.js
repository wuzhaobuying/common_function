/**
 *
 * @param {改变this指向} context
 * @param  {传送的参数} args
 */
Function.prototype.myCall = (context = window, ...args) => {
	context.fn = this;
	let res = context.fn(...args);
	delete context.fn;
	return res;
};

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
/**
 *
 * @param {改变this指向} context
 * @param  {一部分参数} someArgs
 */
Function.prototype.myBind = (context, ...someArgs) => {
	let _this = this;
	return function (...anotherArgs) {
		return _this.apply(context, someArgs.concat(anotherArgs));
	};
};
