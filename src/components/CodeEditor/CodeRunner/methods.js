/**
 * 对数组两个位置的元素进行交换操作
 * @param {Array} array 需要进行操作的数组
 * @param {Number} i 需要交换的第一个位置
 * @param {Number} j 需要交换的第二个位置
 */
export function swap(array, i, j){
	if(array instanceof Array !== true) {
		throw new TypeError('swap accept an array');
	}
	let tmpArray = array.slice();

	let tmp = tmpArray[i];
	tmpArray[i] = tmpArray[j];
	tmpArray[j] = tmp;
	
	array.replace(tmpArray);
}