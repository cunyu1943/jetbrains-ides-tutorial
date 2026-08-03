import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/': [
        { text: '学习指引', link: '/guide' },

        {
            text: 'IntelliJ IDEA 教程',
            collapsed: true,
            items: [
                { text: '创建 Java 入门应用', link: '/intellij-idea/20210914-java-app' },
                { text: '实用小技巧', link: '/intellij-idea/20211010-tips' },
                { text: '集成并使用 Git 图文教程', link: '/intellij-idea/20220105-git' },
                { text: '最新版 IntelliJ IDEA 使用手册', link: '/intellij-idea/20220202-idea-guide' },
                { text: '原来大厂都是这么提交代码的', link: '/intellij-idea/20230525-code-commit' },
            ]
        },




    ],
}