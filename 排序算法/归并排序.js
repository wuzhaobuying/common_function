/**
 *
 * @param {数组} arr
 * 归并排序是利用归并的思想实现的排序方法，该算法采用经典的分治策略。递归的将数组两两分开直到只包含一个元素，
 * 然后 将数组排序合并，最终合并为排序好的数组。
 * 归并排序的空间复杂度取决于递归的深度和用于归并时的临时数组，所以递归的深度为 logn，临时数组的大小为 n，所以归 并排序的空间复杂度为 O(n)
 * 归并排序的平均时间复杂度为 O(nlogn) ，最坏时间复杂度为 O(nlogn) ，空间复杂度为 O(n) ，是稳定排序。
 */
function mergeSort(arr) {
	if (arr.length < 1) return;
	if (arr.length === 1) return arr;
	let mid = Math.floor((arr.length + 1) / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
	let newArr = [];
	let len1 = arr1.length,
		len2 = arr2.length;
	let i = 0,
		j = 0;
	while (i < len1 && j < len2) {
		if (arr1[i] < arr2[j]) {
			newArr.push(arr1[i++]);
		} else {
			newArr.push(arr2[j++]);
		}
	}
	while (i < len1) {
		newArr.push(arr1[i++]);
	}
	while (j < len2) {
		newArr.push(arr2[j++]);
	}
	return newArr;
}

console.log(mergeSort([1, 4, 2, 3, 5, 6]));
