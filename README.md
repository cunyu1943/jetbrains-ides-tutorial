# JetBrains IDEs 中文教程

> 一个专注于 JetBrains 旗下各 IDE 中文教程的开源项目，致力于为开发者提供系统、实用的使用指南。

## 一、项目简介

本项目是一个面向中文用户的 JetBrains IDEs 学习仓库，内容由 [村雨遥](https://github.com/cunyu1943) 整理并维护。项目以 VitePress 作为文档站点框架，提供清晰的目录结构、本地搜索、RSS 订阅、代码变更日志等功能，方便读者随时查阅与学习。

目前项目已涵盖 **IntelliJ IDEA** 教程，后续将持续扩展至 JetBrains 旗下其他 IDE，例如 PyCharm、WebStorm、GoLand、Rider 等。

## 二、目录结构

```
jetbrains-ides-tutorial/
├── .github/
│   └── workflows/
│       └── auto-deploy.yml       # 自动部署工作流
├── docs/
│   ├── .vitepress/
│   │   ├── configs/              # 导航栏与侧边栏配置
│   │   ├── theme/                # 主题组件与样式
│   │   └── config.mts            # VitePress 站点配置
│   ├── public/                   # 静态资源
│   └── src/
│       └── intellij-idea/        # IntelliJ IDEA 教程
├── LICENSE
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## 三、内容大纲

当前已收录的教程如下：

### 3.1 IntelliJ IDEA 教程

1. [创建 Java 入门应用](docs/src/intellij-idea/20210914-java-app.md)：从零开始使用 IDEA 创建、运行并打包第一个 `Hello World!` Java 程序。
2. [实用小技巧](docs/src/intellij-idea/20211010-tips.md)：汇总 IDEA 日常开发中的高频实用技巧，提升编码效率。
3. [集成并使用 Git 图文教程](docs/src/intellij-idea/20220105-git.md)：图文并茂地讲解如何在 IDEA 中集成并使用 Git 进行版本控制。
4. [最新版 IntelliJ IDEA 使用手册](docs/src/intellij-idea/20220202-idea-guide.md)：涵盖 IDEA 的下载、安装、配置及常用设置，适合新手入门。
5. [原来大厂都是这么提交代码的](docs/src/intellij-idea/20230525-code-commit.md)：介绍大厂规范化的代码提交流程与最佳实践。

## 四、技术栈

- **文档框架**：[VitePress](https://vitepress.dev/)
- **包管理工具**：[pnpm](https://pnpm.io/)
- **增强插件**：
  - `@nolebase/vitepress-plugin-git-changelog`：基于 Git 的变更日志
  - `vitepress-plugin-group-icons`：代码组图标
  - `vitepress-plugin-rss`：RSS 订阅
  - `vitepress-plugin-announcement`：站点公告
  - `vitepress-plugin-sponsor`：打赏模块

## 五、本地运行

本项目推荐使用 `pnpm` 作为包管理工具，使用前请先安装 [Node.js](https://nodejs.org/) 环境。

```bash
# 安装依赖
pnpm install

# 启动本地开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 本地预览构建产物
pnpm docs:preview
```

启动成功后，在浏览器访问终端输出的本地地址（默认为 `http://localhost:5173`）即可查看站点。

## 六、在线访问

项目通过 GitHub Actions 自动部署至 GitHub Pages，部署完成后可通过以下地址访问：

- 在线站点：<https://cunyu1943.github.io/jetbrains-ides-tutorial/>

## 七、参与贡献

欢迎大家一起完善本教程！你可以通过以下方式参与贡献：

1. Fork 本仓库并克隆到本地。
2. 新建分支进行内容编写或修改：`git checkout -b feat/your-topic`。
3. 提交更改并推送到你的远程仓库。
4. 提交 Pull Request，描述你的修改内容与目的。

贡献时请注意：

- 保持文档结构与现有风格一致。
- 图片资源请放置在对应文章的 `assets` 目录下。
- 中英文之间保留空格，引号使用中文引号「」。

## 八、联系作者

- GitHub：<https://github.com/cunyu1943>
- 个人主页：<https://cunyu1943.github.io>
- 语雀（数字花园）：<https://yuque.com/cunyu1943>

## 九、许可证

本项目基于 [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE) 协议开源，转载请注明作者并附上原文链接。
