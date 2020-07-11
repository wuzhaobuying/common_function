/**
 *
 * @param {数组} arr
 * @param {起点} start
 * @param {终点} end
 * 快速排序的基本思想是通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据 都要小，然后再按此方法对这两部分数据分别进行快速排序，
 * 整个排序过程可以递归进行，以此达到整个数据变成有序序列。
 * 快速排序的空间复杂度取决于递归的深度，所以最好的时候为 O(logn)，最坏的时候为 O(n)。
 * 快速排序的平均时间复杂度为 O(nlogn) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(logn) ，不是稳定排序。
 */
function quickSort(arr, start, end) {
	if (arr.length <= 1 || start >= end) return;
	let index = partition(arr, start, end);
	quickSort(arr, start, index - 1);
	quickSort(arr, index + 1, end);
	return arr;
}

function partition(arr, start, end) {
	let temp = arr[start];
	while (start < end) {
		while (arr[end] >= temp && start < end) {
			end--;
		}
		arr[start] = arr[end];
		while (arr[start] < temp && start < end) {
			start++;
		}
		arr[end] = arr[start];
	}
	arr[start] = temp;
	return start;
}

console.log(quickSort([1, 4, 2, 3, 5, 6], 0, 5));
