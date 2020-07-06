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
