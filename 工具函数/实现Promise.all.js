/**
 *
 * @param {promise组成的数组} promiseArr
 */
Promise.all = function (promiseArr) {
	return new Promise((resolve, reject) => {
		let resValues = [];
		let counts = 0;
		for (let i = 0; i < len; i++) {
			Promise.resolve(promiseArr[i]).then(
				(res) => {
					counts++;
					resValues[i] = res;
					if (counts === promiseArr.length) {
						resolve(resValues);
					}
				},
				(err) => {
					reject(err);
				}
			);
		}
	});
};
