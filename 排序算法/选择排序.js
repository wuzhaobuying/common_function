/**
 *
 * @param {数组} arr
 * 选择排序的基本思想为每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止。
 * 选择排序不管初始序列是否有序，时间复杂度都为 O(n²)。
 * 选择排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(1) ，不是稳定排序。
 */
function selectSort(arr) {
	let maxIndex;
	for (let i = arr.length - 1; i >= 0; i--) {
		maxIndex = 0;
		for (let j = 0; j <= i; j++) {
			if (arr[maxIndex] < arr[j]) {
				maxIndex = j;
			}
		}
		[arr[maxIndex], arr[i]] = [arr[i], arr[maxIndex]];
	}
	return arr;
}

console.log(selectSort([1, 4, 2, 3, 5, 6]));
