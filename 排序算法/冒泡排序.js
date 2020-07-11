/**
 *
 * @param {数组} arr
 * 冒泡排序的基本思想是，对相邻的元素进行两两比较，顺序相反则进行交换，
 * 这样，每一趟会将最小或最大的元素“浮”到顶端， 最终达到完全有序。
 * 优化后的冒泡排序，当排序序列为已排序序列时，为最好的时间复杂度为 O(n)。
 * 冒泡排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(1) ，是稳定排序。
 */
function bubbleSort(arr) {
	let flag;
	let i = arr.length - 1;
	while (i >= 0) {
		flag = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				flag = true;
			}
		}
		i--;
		if (!flag) break;
	}
	return arr;
}

console.log(bubbleSort([1, 4, 2, 3, 5, 6]));
