/**
 *
 * @param {方法} method
 * @param {目标地址} url
 * @param {是否异步} isAsyn
 * @param {请求数据} data
 */
function ajax(method, url, isAsyn, data) {
	let xhr = new XMLHttpRequest();
	return new Promise(function (resole, reject) {
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resole(xhr.responseText);
				} else {
					reject(xhr.status);
				}
			}
		};
		xhr.open(method, url, isAsyn);
		xhr.send(data);
	});
}

let ajax1 = ajax("get", "baidu.com", true, null);
ajax1
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});
