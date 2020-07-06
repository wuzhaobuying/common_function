/**
 *
 */
Array.prototype.myFlat = () => {
	let arr = this;
	let newArr = [];
	arr.map((item) => {
		if (Array.isArray(item)) {
			newArr.push(...item.myFlat());
		} else {
			newArr.push(item);
		}
	});
	return newArr;
};
