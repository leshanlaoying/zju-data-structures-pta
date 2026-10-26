---
title: 浙江大学MOOC数据结构PTA题解
description: 浙江大学陈越老师《数据结构》MOOC课程配套PTA习题与C语言题解
---

<div class="site-hero">

  <h1 class="site-hero__title">
    浙江大学MOOC数据结构PTA题解
  </h1>

  <p class="site-hero__subtitle">
    学数据结构<br>
    从每一道PTA题目开始
  </p>

  <div class="site-hero__buttons">
    <a
      class="site-button site-button--primary"
      href="#intro"
    >
      开始学习 <span>↓</span>
    </a>  
    <a
    class="site-button site-button--github"
    href="https://pintia.cn/"
    target="_blank"
    rel="noopener noreferrer"
    >
      PTA 练习平台 <span>↗</span>
    </a>
    <a
      class="site-button site-button--github"
      href="https://github.com/leshanlaoying"
      target="_blank"
      rel="noopener noreferrer"
    >
      我的GitHub <span>↗</span>
    </a>
    <a
      class="site-button site-button--red"
      href="https://xhslink.cn/o/2hqnD4Jm8ue"
      target="_blank"
      rel="noopener noreferrer"
    >
      我的小红书 <span>↗</span>
    </a>

  </div>

</div>

<div class="site-update">
  <div class="site-update__icon">🕒</div>
  <div class="site-update__content">
    <strong>网站更新时间</strong>
    <p>最近更新：2026 年 10 月 26 日</p>
  </div>
  <span class="site-update__tag">持续更新中</span>
</div>

<div class="author-card">

  <div class="author-card__avatar">ME</div>

  <div class="author-card__content">
    <h2>你好，我是【流水落花春去也】</h2>
    <p>
      一名热爱编程与算法的计算机专业学生。
      正在通过MOOC学习、PTA 刷题和项目实践，不断夯实自己的计算机基础。
    </p>
    <p>
      建立这个网页，是希望把自己学习数据结构的过程记录下来，
      将零散的知识整理成清晰、易懂、可以反复查阅的学习资料。
      如果这些内容也能帮助到你，那就更好了。
    </p>
    <div class="author-card__footer">
      <span>💻 编程与算法</span>
      <span>📚 持续学习</span>
      <span>🚀 保持好奇</span>
    </div>

  </div>

</div>


<div class="author-card__contact">
  <strong>📬 反馈与交流</strong>
  <p>
    如果你在阅读过程中发现题解错误、代码问题，
    或者对解题思路有任何疑问，欢迎通过邮件与我联系。
    也非常欢迎交流不同的解题方法和优化思路！
  </p>
  <a href="chenshufan@bupt.edu.cn">
    📧 chenshufan@bupt.edu.cn
  </a>
</div>


---

## 01 · 说明 {#intro}

### 数据结构的重要性 {#importance-of-data-structures}

数据结构是计算机专业最早接触、也是最核心的专业课程之一，
是后续学习数据库、操作系统等课程的基石，
也是备战蓝桥杯、CSP 等程序设计竞赛及大厂笔试的核心知识。

作为未来的程序员，即使在 AI 技术飞速发展的时代，我们依然需要熟练掌握数据结构与算法。

---

### 学习方法 {#learning-methods}

配套书籍：**《数据结构（第 2 版）》**，陈越、何钦铭主编；《数据结构学习与实验指导（第 2 版）》

配套网课：MOOC 浙江大学 数据结构

其他刷题推荐网站：

洛谷（https://www.luogu.com.cn）

力扣（https://leetcode.cn）

牛客网（https://www.nowcoder.com）

卡码网（https://kamacoder.com）

---

## 02 · 复杂度 {#complexity}

### 最大子列和问题 {#maximum-subarray-sum-problem}

**题目链接**

https://pintia.cn/problem-sets/15/exam/problems/type/7?problemSetProblemId=709

**中文解题思路**

如果`thissum`比全局最大值`sum`更大，更新`sum`

如果`thissum < 0`：前面这一段贡献是负的，直接把`thissum`清零

也可以用动态规划的想法看，复杂度O(1)

**C 语言题解代码**

```c
#include <stdio.h>
int maxsubseqsum1(int a[],int n){
	int thissum=0,sum=0,i;
	for (i=0;i<n;i++){
		thissum+=a[i];
		if (thissum>sum){
			sum=thissum;
		}else if (thissum<0){
			thissum=0;
		}
	}
	return sum;
}
int main(){
	int n,a[100005],i;
	scanf("%d",&n);
	for (i=0;i<n;i++){
		scanf("%d",&a[i]);
	}
	printf("%d",maxsubseqsum1(a,n));
}
```

---

### Maximum Subsequence Sum {#Maximum-Subsequence-Sum}

**题目链接**

https://pintia.cn/problem-sets/16/exam/problems/type/7?problemSetProblemId=663

**中文解题思路**

思路跟上一题一样，按题目要求输出对应值即可

**C 语言题解代码**

```c
#include <stdio.h>
int main(){
	int n,a[10005],i,j;
	int flag=0;
	scanf("%d",&n);
	for (i=0;i<n;i++){
		scanf("%d",&a[i]);
		if (a[i]>=0){
			flag=1;
		}
	}
	int start=0,end=n-1,maxsum=-1e7,thissum=0;
	for(i=0;i<n;i++){
		thissum=0;
		for (j=i;j<n;j++){
			thissum+=a[j];
			if (thissum>maxsum){
				start=i;
				end=j;
				maxsum=thissum;
			}
		}
	} 
	if (flag==1){
		printf("%d %d %d",maxsum,a[start],a[end]);
	}else {
		printf("%d %d %d",0,a[0],a[n-1]);
	}
}
```

---

### 二分查找 {#binary-search}

**题目链接**

https://pintia.cn/problem-sets/15/exam/problems/type/6?problemSetProblemId=923

**中文解题思路**

二分查找模板题

注意是函数题，只写函数接口就行

**C 语言题解代码**

```c
Position BinarySearch( List L, ElementType X ){
    int l=1,r=L->Last,mid;
    while (l<=r){
        mid=(l+r)/2;
        if (X>L->Data[mid]){
            l=mid+1;
        }else if (X<L->Data[mid]){
            r=mid-1;
        }else if (X==L->Data[mid]){
            return mid;
        }
    }
    return NotFound;
}
```

---

## 03 · 线性结构 {#linear}

### 两个有序链表序列的合并 {#merge-two-sorted-linked-lists}

**题目链接**

暂无公开题目链接。

**中文解题思路**

整体归并部分呢不难，不新建节点，只是修改指针，改变连接顺序

注意细节：

L1，L2是带头节点，跳过头结点

最后将L1，L2链表头置空

归并后不用处理头结点（哑元），在输出函数中处理了

注意是函数题，只写函数接口就行


**C 语言题解代码**

```c
List Merge( List L1, List L2 ){
    List t1=L1->Next,t2=L2->Next,p,rear,t;
    p=(List)malloc(sizeof(struct Node));
    rear=p;
    while (t1&&t2){
        if (t1->Data<=t2->Data){
            rear->Next=t1;
            rear=rear->Next;
            t1=t1->Next;
        }else {
            rear->Next=t2;
            rear=rear->Next;
            t2=t2->Next;
        }
    }
    while (t1){
        rear->Next=t1;
        rear=rear->Next;
        t1=t1->Next;
    }
    while (t2){
        rear->Next=t2;
        rear=rear->Next;
        t2=t2->Next;
    }
    rear->Next=NULL;
    L1->Next=NULL;
    L2->Next=NULL;
    // t=p;
    // p=p->Next;
    // free(t);
    return p;
}
```

---

### 一元多项式的乘法与加法运算 {#polynomial-addition-and-multiplication}

**题目链接**

https://pintia.cn/problem-sets/15/exam/problems/type/7?problemSetProblemId=710

**中文解题思路**

课上原题，最后可以加一个函数把所有链表free掉

**C 语言题解代码**

```c
#include <stdio.h>
#include <stdlib.h>
typedef struct polynode *polynomial;
struct polynode {
	int coef;
	int expon;
	polynomial link;
};

void attach(int c,int e,polynomial *prear){
	polynomial p;
	
	p=(polynomial)malloc(sizeof(struct polynode));
	p->coef=c;
	p->expon=e;
	p->link=NULL;
	(*prear)->link=p;
	*prear=p;
}

polynomial readpoly(){
	polynomial p,rear,t;
	int c,e,n;
	scanf("%d",&n);
	p=(polynomial)malloc(sizeof(struct polynode));
	p->link=NULL;
	rear=p;
	while (n--){
		scanf("%d %d",&c,&e);
		attach(c,e,&rear);
	}
	t=p;
	p=p->link;
	free(t);
	return p;
}

polynomial add(polynomial p1,polynomial p2){
	polynomial p,rear,t;
	p=(polynomial)malloc(sizeof(struct polynode));
	rear=p;
	int sum;
	while (p1!=NULL&&p2!=NULL){
		if (p1->expon==p2->expon){
			sum=p1->coef+p2->coef;
			if (sum!=0){
				attach(sum,p1->expon,&rear);
			}
			p1=p1->link;
			p2=p2->link;
		}else if (p1->expon>p2->expon){
			attach(p1->coef,p1->expon,&rear);
			p1=p1->link;
		}else if (p1->expon<p2->expon){
			attach(p2->coef,p2->expon,&rear);
			p2=p2->link;
		}
	}
	while (p1!=NULL){
		attach(p1->coef,p1->expon,&rear);
		p1=p1->link;
	}
	while (p2!=NULL){
		attach(p2->coef,p2->expon,&rear);
		p2=p2->link;
	}
	rear->link=NULL;
	t=p;p=p->link;free(t);
	return p;
}

polynomial multi(polynomial p1,polynomial p2){
	polynomial p,rear,t1,t2,t;
	int c,e;
	if (p1==NULL||p2==NULL){
		return NULL;
	}
	t1=p1;t2=p2;
	p=(polynomial)malloc(sizeof(struct polynode));
	rear=p;
	while (t2){
		attach(t1->coef*t2->coef,t1->expon+t2->expon,&rear);
		t2=t2->link;
	}
	t1=t1->link;
	while (t1){
		t2=p2;rear=p;
		while (t2){
			c=t1->coef*t2->coef;
			e=t1->expon+t2->expon;
			while (rear->link&&rear->link->expon>e){
				rear=rear->link;
			}
			if (rear->link&&rear->link->expon==e){
				if (rear->link->coef+c!=0){
					rear->link->coef+=c;
				}else {
					t=rear->link;
					rear->link=t->link;
					free(t);
				}
			}else {
				t=(polynomial)malloc(sizeof(struct polynode));
				t->coef=c;
				t->expon=e;
				t->link=rear->link;
				rear->link=t;
				rear=t;
			}
			t2=t2->link;
		}
		t1=t1->link;
	}
	t2=p;p=p->link;free(t2);
	return p;
}

void printpoly(polynomial p){
	int flag=0;
	if (!p){
		printf("0 0");return;
	}
	while (p){
		if (flag==0){
			printf("%d %d",p->coef,p->expon);
			flag++;
		}else {
			printf(" %d %d",p->coef,p->expon);
		}
		p=p->link;
	}
}

void freepoly(polynomial p){
	polynomial t;
	while (p){
		t=p;p=p->link;free(t);
	}
}

int main(){
	polynomial p1,p2,pp,ps;
	
	p1=readpoly();
	p2=readpoly();
	pp=multi(p1,p2);
	printpoly(pp);
    printf("\n");
	ps=add(p1,p2);
	printpoly(ps);
	
	freepoly(p1);
	freepoly(p2);
	freepoly(ps);
	freepoly(pp);
}
```

---

## 04 · 树 {#tree}

### 04-树6 Complete Binary Search Tree {#tree-cbst}

**题目链接**

暂无公开题目链接。

**中文解题思路**

将关键字排序，确定完全二叉树左子树规模，再递归构建并层序输出。

先计算左子树节点数量，再确定根节点对应的有序数组下标。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* CBST 实现位置 */
// int leftSize = 0;
// /* 根据完全二叉树最后一层节点分布计算 */
int main(void) {
    return 0;
}
```

---

### 二叉树层序遍历 {#tree-level}

**题目链接**

暂无公开题目链接。

**中文解题思路**

使用队列完成二叉树按层遍历。

根节点入队，循环取队首并将孩子入队。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 层序遍历实现位置 */
// int front = 0, rear = 0;
// /* queue[rear++] = root; */
int main(void) {
    return 0;
}
```

---

## 05 · 图 {#graph}

### 图的深度优先遍历 {#graph-dfs}

**题目链接**

暂无公开题目链接。

**中文解题思路**

从一个顶点递归访问尚未访问的邻接点。

结合 visited 数组防止重复访问。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 伪代码骨架：补充邻接表、visited 和 dfs */
// /* visited[u] = 1; */
int main(void) {
    return 0;
}
```

---

### 图的广度优先遍历 {#graph-bfs}

**题目链接**

暂无公开题目链接。

**中文解题思路**

借助队列从起点逐层扩展未访问顶点。

对每个邻接顶点标记访问并入队。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 补充图结构及初始化 */
// int front = 0, rear = 0;
// /* while (front < rear) { ... } */
int main(void) {
    return 0;
}
```

---

## 06 · 排序 {#sorting}

### 09-排序2 Insert or Merge {#sorting-insert-merge}

**题目链接**

暂无公开题目链接。

**中文解题思路**

比较中间序列是否来自插入排序；否则按照归并排序的特征判断。

实现两种排序的一次迭代，输出下一轮序列。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 一轮排序实现位置 */
// void sort_step(int a[], int n) {
//     /* 示例函数骨架 */
// }
int main(void) {
    return 0;
}
```

---

### 快速排序 {#sorting-quick}

**题目链接**

暂无公开题目链接。

**中文解题思路**

选取枢轴进行划分，递归处理左右区间。

注意左右指针移动条件与边界处理。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 快速排序实现位置 */
// void quicksort(int a[], int l, int r) {
//     if (l >= r) return;
// }
int main(void) {
    return 0;
}
```

---

## 07 · 散列 {#hashing}

### 11-散列1 电话聊天狂人 {#hashing-phone}

**题目链接**

暂无公开题目链接。

**中文解题思路**

以电话号码为键累计出现次数，找到出现次数最多的号码。

设计哈希函数和冲突处理，统计并列最多的号码。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 哈希表实现位置 */
// unsigned hash(unsigned x, unsigned mod) {
//     return x % mod;
// }
int main(void) {
    return 0;
}
```

---

### 11-散列2 Hashing {#hashing-table}

**题目链接**

暂无公开题目链接。

**中文解题思路**

计算初始地址并按题目要求进行冲突探测。

每次插入前检查目标位置是否被占用。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 哈希探测实现位置 */
// int h(int key, int size) { return key % size; }
int main(void) {
    return 0;
}
```

---

## 08 · KMP {#kmp}

### KMP 字符串匹配 {#kmp-match}

**题目链接**

暂无公开题目链接。

**中文解题思路**

先计算模式串的前缀函数，再线性扫描文本串。

失配时依据前缀函数减少不必要的字符比较。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* KMP 实现位置 */
// int prefix[1005] = {0};
int main(void) {
    return 0;
}
```

---

### 前缀函数构造 {#kmp-prefix}

**题目链接**

暂无公开题目链接。

**中文解题思路**

用前缀函数记录最长相等真前后缀长度。

遍历模式串时维护当前匹配长度。

**C 语言示例代码**

```c
#include <stdio.h>

// C 语言演示片段（非完整 AC 程序）。
// /* 前缀函数实现位置 */
// int j = 0;
// /* while (j > 0 && s[i] != s[j]) ... */
int main(void) {
    return 0;
}
```

---

