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
