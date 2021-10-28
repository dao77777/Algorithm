> **创建日期:** 2021/10/15
>
> **作者:** 道五七

# 算法
## Master公式: T(n) = a * T(n/b) + O(n^d), 子问题规模一致时可用此公式求时间复杂度
  - log(b)(a) < d: O(n^d)
  - log(b)(a) > d: O(n^log(b)(a))
  - log(b)(a) = d: O(n^d * logn)
## 算法思想
- 贪心
- 回溯
- 递归
- 动态规划
- 快慢指针
- 双指针
- partition
  - 数组实现: 双指针
  - 链表实现: 6个指针, 左部分头尾指针, 中间部分头尾指针, 右部分头尾指针
## 排序算法
- 选择排序: 
  - 时间复杂度: O(n^2)
  - 空间复杂度: O(1)
  - 稳定性: 无
- 冒泡排序: 
  - 时间复杂度: O(n^2)
  - 空间复杂度: O(1)
  - 稳定性: 有
- 插入排序: 小范围最快(常数项小)
  - 时间复杂度: O(n^2)
  - 空间复杂度: O(1)
  - 稳定性: 有
- 归并排序: 稳定
  - 时间复杂度: O(nlogn)
  - 空间复杂度: O(n)
  - 稳定性: 有
- 快速排序: 时间复杂度低
  - 时间复杂度: O(nlogn)
  - 空间复杂度: 平均O(logn)
  - 稳定性: 无
- 堆排序: 空间复杂度低
  - 时间复杂度: O(nlogn)
  - 空间复杂度: O(1)
  - 稳定性: 无
- 基数排序(不基于比较的排序)
- 工程上
  - 快排结合了插入排序, 小范围用插入排序, 因为插入排序的常数项小, 会更快
  - 若是原始类型, 直接快排, 非原始类型用归并排序, 追求稳定性
## 查找算法
- 二分查找
# 数据结构
- 物理结构
  - 数组
  - 链表
- 逻辑结构
  - 哈希表
  - 有序表
    - 红黑树
    - AVL树
    - size-balance-tree
    - 跳表
  - 树
  - 图
- 栈
- 队列
- 堆
  - 建堆(heap_insert)
    - 时间复杂度: O(logn)
  - 堆化(heapify)
    - 时间复杂度: O(logn)




- 对数器
- 比较器
  - 返回负数时, 第一个参数排前面
  - 返回正数时, 第二个参数排前面
  - 返回0时, 谁排前面无所谓
- 判断回文结构
  - 给定一个单链表的头节点head, 请判断该链表时否为回文结构(两种实现方式, 一种是栈, 空间复杂度为O(n), 一种是快慢指针, 空间复杂度为O(1)或者O(n/2))
- 将单链表按某值划分成左边小, 中间相等, 右边大的形式
  - 给定一个单链表的头节点head, 节点的值类型是整形, 再给定一个整数pivot, 实现一个调整链表的函数, 将链表调整为左部分都是值小于pivot的节点, 中间部分都是值等于pivot的节点, 右部分都是值大于pivot的节点
- 复制含有随机指针节点的链表
  - 一种特殊的单链表节点描述如下, rand指针是单链表节点结构中新增的指针, rand可能指向链表中的任意一个节点, 也可能指向null, 给定一个由Node节点类型组成的无环单链表的头节点head, 请实现一个函数完成这个链表的复制, 并返回复制的新链表的头节点, 要求时间复杂度O(n), 额外空间复杂度O(1)
  ```
  class Node {
    int value;
    Node next;
    Node rand;
    Node(int val) {
      value = val
    } 
  }
  ```
- 两个链表相交的一系列问题
  - 给定两个可能有环也可能无环的单链表, 头节点head1和head2, 请实现一个函数, 如果两个链表相交, 请返回相交的第一个节点, 如果不相交, 返回null, 要求如果两个链表长度之和为N, 时间复杂度请达到O(n), 额外空间复杂度请达到O(1)
