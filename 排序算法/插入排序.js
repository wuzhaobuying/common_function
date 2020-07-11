/**
 *
 * @param {数组} arr
 * 直接插入排序基本思想是每一步将一个待排序的记录，
 * 插入到前面已经排好序的有序序列中去，直到插完所有元素为止。
 * 当排序序列为已排序序列时，为最好的时间复杂度 O(n)。
 * 插入排序的平均时间复杂度为 O(n²) ，最坏时间复杂度为 O(n²) ，空间复杂度为 O(1) ，是稳定排序。
 */
function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let temp = arr[i];
		let j = i;
		while (j - 1 >= 0 && arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
	return arr;
}

console.log(insertSort([1, 4, 2, 3, 5, 6]));
