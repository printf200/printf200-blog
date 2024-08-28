import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '生活日记',
    items: [
      { text: '游玩记', link: '/life/happy/index', activeMatch: '/life/happy/' },
    ],
    activeMatch: '/life/'
  },
  {
    text: '成长日记',
    items: [
      { text: 'Bug日记', link: '/growth/issues/index', activeMatch: '/growth/issues/' },
      { text: '解决方案日记', link: '/growth/solutions/index', activeMatch: '/growth/solutions/' }
    ],
    activeMatch: '/growth/'
  },
  {
    text: '学习日记',
    items: [
      { text: 'Redis从入门到源码解读', link: '/study/redis/index', activeMatch: '/study/redis/' },
      { text: '转载学习知识', link: '/study/reprint/index', activeMatch: '/study/reprint/' }
    ],
    activeMatch: '/study/'
  },
  {
    text: '我的工具',
    items: [
      { text: 'Python小工具', link: '/tools/python/index', activeMatch: '/tools/python/' },
    ],
    activeMatch: '/tools/'
  }
  // {
  //   text: '我的标签',
  //   link: '/tags',
  //   activeMatch: '/tags'
  // },
  // {
  //   text: '我的归档',
  //   link: '/archives',
  //   activeMatch: '/archives'
  // },
];