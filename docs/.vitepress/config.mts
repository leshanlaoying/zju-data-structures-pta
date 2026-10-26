import { defineConfig } from 'vitepress'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ZJU Data Structures PTA Solutions',
  description: '陈越老师《数据结构》PTA 习题 · 中文思路与 C 语言代码',
  base: isProduction ? '/zju-data-structures-pta/' : '/',
  cleanUrls: true,
  markdown: { lineNumbers: true },
  themeConfig: {
    siteTitle: 'ZJU · 数据结构题解',
    nav: [
      { text: '全部题解', link: '/' },
      { text: 'GitHub', link: 'https://github.com/leshanlaoying/zju-data-structures-pta' }
    ],
    sidebar: [
      { text: '01 · 说明', link: '/#intro', collapsed: false, items: [
          { text: '数据结构的重要性', link: '/#importance-of-data-structures' },
          { text: '学习方法', link: '/#learning-methods' },
      ] },
      { text: '02 · 复杂度', link: '/#complexity', collapsed: false, items: [
          { text: '最大子列和问题', link: '/#maximum-subarray-sum-problem' },
          { text: 'Maximum Subsequence Sum', link: '/#Maximum-Subsequence-Sum' },
          { text: '二分查找', link: '/#binary-search' },
      ] },
      { text: '03 · 线性结构', link: '/#linear', collapsed: false, items: [
          { text: '两个有序链表序列的合并', link: '/#merge-two-sorted-linked-lists' },
          { text: '一元多项式的乘法与加法运算', link: '/#polynomial-addition-and-multiplication' },
      ] },
      { text: '04 · 树', link: '/#tree', collapsed: false, items: [
          { text: '04-树6 Complete Binary Search Tree', link: '/#tree-cbst' },
          { text: '二叉树层序遍历', link: '/#tree-level' },
      ] },
      { text: '05 · 图', link: '/#graph', collapsed: false, items: [
          { text: '图的深度优先遍历', link: '/#graph-dfs' },
          { text: '图的广度优先遍历', link: '/#graph-bfs' },
      ] },
      { text: '06 · 排序', link: '/#sorting', collapsed: false, items: [
          { text: '09-排序2 Insert or Merge', link: '/#sorting-insert-merge' },
          { text: '快速排序', link: '/#sorting-quick' },
      ] },
      { text: '07 · 散列', link: '/#hashing', collapsed: false, items: [
          { text: '11-散列1 电话聊天狂人', link: '/#hashing-phone' },
          { text: '11-散列2 Hashing', link: '/#hashing-table' },
      ] },
      { text: '08 · KMP', link: '/#kmp', collapsed: false, items: [
          { text: 'KMP 字符串匹配', link: '/#kmp-match' },
          { text: '前缀函数构造', link: '/#kmp-prefix' },
      ] },
    ],
    outline: false,
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/leshanlaoying/zju-data-structures-pta' }],
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '章节目录',
    returnToTopLabel: '回到顶部',
    footer: { message: '个人学习笔记 · 非浙江大学课程官方站点' }
  }
})
