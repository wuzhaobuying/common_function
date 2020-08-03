let isObject = (obj) => {
	if ((obj !== null && typeof obj === "object") || typeof obj === "function")
		return true;
	else return false;
};
/**
 *
 * @param {复制的对象} obj
 * @param {用来解决循环引用} hash
 */
function deepClone(obj, hash = new Map()) {
	if (!isObject(obj)) return obj;
	if (hash.has(obj)) return hash.get(obj);
	let target;
	if (target instanceof Array) {
		target = [];
	} else {
		target = {};
	}
	hash.set(obj, target);
	Object.keys(obj).forEach((key) => {
		target[key] = deepClone(obj[key], hash);
	});
	return target;
}
