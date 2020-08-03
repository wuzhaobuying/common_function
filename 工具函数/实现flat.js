/**
 *	递归
 */
function flat(arr) {
	const isDeep = arr.some((item) => item instanceof Array);
	if (!isDeep) {
		return arr;
	}
	const res = [].concat(arr);
	return flat(res);
}
