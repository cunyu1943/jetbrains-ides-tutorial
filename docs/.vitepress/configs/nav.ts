import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 首页', link: '/' },
    { text: ' 我的主页', link: 'https://cunyu1943.github.io' },
    // { text: '🐎 2026 年刊', link: '/2026/latest' },

    // {
    //     text: '🗃️ 往昔留档',
    //     items: [
    //         { text: '🐍 2025 年刊', link: '/archive/2025/1228-0103' },
    //         { text: '🐉 2024 年刊', link: '/archive/2024/0101-0105' },
    //         { text: '🐇 2023 年刊', link: '/archive/2023/0415-0421' },
    //     ]
    // },
    {
        text: '📋 开源项目',
        items: [
            { text: '🅱️ 博客', link: 'https://github.com/cunyu1943/blog' },
            { text: '☕️ JavaPark', link: 'https://github.com/cunyu1943/JavaPark' },
            { text: '📰 好物周刊', link: 'https://github.com/cunyu1943/weekly' },
            { text: '💾 MySQL 学习指南', link: 'https://github.com/cunyu1943/mysql-tutorial' },
            { text: '🐍 Python 学习指南', link: 'https://github.com/cunyu1943/python-tutorial' },
            { text: '🖥️ 计算机学习指南', link: 'https://github.com/cunyu1943/cs-guide' },
            { text: '🍃 Spring Boot Demos', link: 'https://github.com/cunyu1943/spring-boot-demos' },

        ]
    },
    // {
    //     text: '🎈 更多',
    //     items: [
    //         { text: '💳 超大流量卡', link: 'https://ym.ksjhaoka.com/?s=Ltxbbs9W330131', noIcon: true },
    //         { text: '🗃️ 资源八百库', link: 'https://www.kdocs.cn/l/csij2u9ePmM6', noIcon: true },
    //         { text: '🧧 薅羊毛', link: '/ads' },
    //         { text: '💰 打赏', link: '/reward' },

    //     ]
    // },
]