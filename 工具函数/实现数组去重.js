/**
 *
 * @param {数组} arr
 */
//ES6方式
function unique(arr) {
	return [...new Set(arr)];
}
// 传统方式
function unique(arr) {
	const res = [];
	arr.forEach((item) => {
		if (res.indexOf(item) < 0) {
			res.push(item);
		}
	});
	return res;
}
// hashMap 空间换时间
