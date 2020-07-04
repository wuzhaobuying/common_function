/**
 * 创建一个空对象，构造函数中的this指向这个空对象
 * 这个新对象被执行 原型 连接
 * 执行构造函数方法，属性和方法被添加到this引用的对象中
 * 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
 */
function _new(fn, ...args) {
	let newObj = Object.create(fn.prototype);
	let res = fn.call(newObj, ...args);
	return res instanceof Object ? res : newObj;
}
