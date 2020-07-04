/**
 *
 * @param {promise组成的数组} promiseArr
 */
Promise.race = (promiseArr) =>
	new Promise((resolve, reject) => {
		promiseArr.forEach((promise) => {
			promise.then(resolve, reject);
		});
	});
