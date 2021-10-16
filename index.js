const arr = new Array(100).fill(0).map(item => random([1, 10], true))
console.log(arr, quick_sort(arr))

function swap(arr, i, j) {
  if (i === j) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

function random(range, isInteger) {
  const length = isInteger ? range[1] - range[0] + 1 : range[1] - range[0]
  const randomNumber = Math.random() * length + range[0]
  return isInteger ? Math.floor(randomNumber) : randomNumber
}

/* 选择排序 */
function select_sort(arr) {
  console.time()
  if (arr.length < 2) return [...arr]
  const new_arr = [...arr]
  for (let i = 0; i < new_arr.length; i++) {
    let min_index = i
    for (let j = i + 1; j < new_arr.length; j++) {
      min_index = new_arr[j] < new_arr[min_index] ? j : min_index
    }
    swap(new_arr, i, min_index)
  }
  console.timeEnd()
  return new_arr
} 

/* 插入排序 */
function insert_sort(arr) {
  console.time()
  if (arr.length < 2) return [...arr]
  const new_arr = [...arr]
  for (let i = 0; i < new_arr.length; i++) {
    for (let j = i; j > 0 && new_arr[j] < new_arr[j - 1]; j--) swap(new_arr, j, j - 1)
  }
  console.timeEnd()
  return new_arr
}

/* 冒泡排序 */
function bubble_sort(arr) {
  console.time()
  if (arr.length < 2) return [...arr]
  const new_arr = [...arr]
  for (let i = new_arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (new_arr[j] > new_arr[j + 1]) swap(new_arr, j, j + 1)
    }
  }
  console.timeEnd()
  return new_arr
}

/* 归并排序 */
function merge_sort(arr) {
  console.time()
  const new_arr = [...arr]
  function inner(left, right) {
    if (left === right) return
    const middle = Math.floor((right - left) / 2 + left)
    inner(left, middle)
    inner(middle + 1, right)
    merge(left, right, middle)
  }
  function merge(left, right, middle) {
    const merge_arr = []
    const pointer1_end = middle
    const pointer2_end = right
    let pointer1 = left
    let pointer2 = middle + 1
    while (true) {
      if (pointer1 > pointer1_end || pointer2 > pointer2_end) {
        const is_pointer1 = pointer1 > pointer1_end
        let pointer = is_pointer1 ? pointer2 : pointer1
        const pointer_end = is_pointer1 ? pointer2_end : pointer1_end
        while (pointer <= pointer_end) merge_arr.push(new_arr[pointer++])
        break
      }
      merge_arr.push(new_arr[pointer1] < new_arr[pointer2] ? new_arr[pointer1++] : new_arr[pointer2++])
    }
    for (let i = left; i <= right; i++) new_arr[i] = merge_arr[i - left]
  }
  inner(0, arr.length - 1)
  console.timeEnd()
  return new_arr
}

/* 快速排序 */
function quick_sort(arr) {
  console.time()
  const new_arr = [...arr]
  function inner(left, right) {
    if (left >= right) return
    const pivot = partition(left, right)
    inner(left, pivot[0])
    inner(pivot[1], right)
  }
  function partition(left, right) {
    const val = new_arr[random([left, right], true)]
    let index = left
    while (index <= right) {
      if (new_arr[index] === val) index++
      else if (new_arr[index] < val) {
        swap(new_arr, left, index)
        left++
        index++
      } else {
        swap(new_arr, index, right)
        right--
      }
    }
    return [left - 1, right + 1]
  }
  inner(0, arr.length - 1)
  console.timeEnd()
  return new_arr
}

/* 二分查找 */
function search(arr, val) {
  function inner(left, right) {
    if (left > right) return false
    const middle = Math.floor((right - left) / 2 + left)
    if (arr[middle] === val) return true
    else if (val < arr[middle]) return inner(left, middle - 1)
    else return inner(middle + 1, right)
  }
  return inner(0, arr.length - 1)
}

/* 小和问题: 在一个数组中, 每一个左边比当前数小的数累加起来, 叫做这个数
组的小和, 求一个数组的小和 */
function small_sum(arr) {
  console.time()
  let res = 0
  for (let i = 0; i < arr.length; i++) res += get_single(i)
  function get_single(index) {
    let res = 0
    for (let i = 0; i < index; i++) {
      if (arr[i] < arr[index]) res += arr[i]
    }
    return res
  }
  console.timeEnd()
  return res
}

function small_sum1(arr) {
  console.time()
  let res = 0
  const buffer = []
  for (let i = 0; i < arr.length; i++) {
    const single = get_single(i)
    res += single
    buffer.push(single)
  }  
  function get_single(index) {
    for (let i = index - 1; i >= 0; i--) {
      if (arr[i] < arr[index]) return buffer[i] + arr[i]
    }
    return 0
  }
  console.timeEnd()
  return res
}

/* 逆序对问题: 在一个数组中, 左边的数如果比右边的数大, 则这两个数构成一
个逆序对, 请打印所有逆序对 */

/* 河兰国旗问题简版: 给定一个数组arr和一个数num, 请把小于等于num的数放
在数组的左边, 大于num的数放在数组的右边. 要求额外空间复杂度O(1), 时间
复杂度O(N) */
function helan_guoqi(arr, num) {

}

/* 荷兰国旗问题: 给定一个数组arr和一个数num, 请把小于num的数放在数组的
左边, 等于num的数放在数组的中间, 大于num的数放在数组的右边. 要求额外
空间复杂度O(1), 时间复杂度O(n) */