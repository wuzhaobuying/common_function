/**
 *
 */
function flat(arr) {
	const isDeep = arr.some((item) => item instanceof Array);
	if (!isDeep) {
		return arr;
	}
	const res = Array.prototype.concat.apply([], arr);
	return flat(res); // 递归
}
