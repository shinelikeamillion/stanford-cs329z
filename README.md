# CS329Z 学习笔记

**在线阅读：<https://shinelikeamillion.github.io/stanford-cs329z/>**

[Stanford CS329Z: Engineering AI Agents](https://cs329z.stanford.edu/)（Fall 2026，Diyi Yang / Michael Ryan / John Yang）的**个人学习笔记**：每一讲一页，加上讨论记录、术语表、资源汇总和学习进度，并用 GitHub Pages 发布成网站。

> **声明**：这是非官方的个人学习笔记，与 Stanford University 及 CS329Z 课程组**没有任何隶属或授权关系**。课件、视频、论文与作业材料的版权归原作者所有，本仓库**不包含**任何课件 PDF 或从课件复制的图片，只放官方链接，笔记全部是自己的复述与整理。内容可能有错，以官方材料为准。

## 内容

| 位置 | 内容 |
| --- | --- |
| `docs/index.md` | 站点首页 |
| `docs/syllabus.md` | 课程大纲、评分、日程总览 |
| `docs/lectures/lecture-NN.md` | 每一讲一页（官方编号 01–19；14 为 Andrew Ng 炉边谈话，没有课件） |
| `docs/discussions/` | 讨论与整理：问题、争论、结论，一个主题一页 |
| `docs/glossary.md` | 术语表（中英对照） |
| `docs/resources.md` | 论文、仓库、视频、博客汇总 |
| `docs/progress.md` | 学习进度跟踪 |
| `templates/` | 讲义页与讨论页模板（不会发布到网站） |

**当前进度**：脚手架完成；**L01 已完整写好**，作为后续每一讲的样板；L02–L19 目前只有占位页（标题、官方链接、官方阅读材料）。

## 技术栈

- [VitePress](https://vitepress.dev/) 1.x：静态站点，中文本地搜索，内置死链检查，构建失败即报错。
- [Mermaid](https://mermaid.js.org/)（`vitepress-plugin-mermaid`）：所有图示都用 Mermaid 重画，不放课件截图。
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)：Markdown 风格检查。
- [lychee](https://lychee.cli.rs/)：外链检查。
- GitHub Actions：`ci.yml` 做 lint、构建、外链检查；`deploy.yml` 构建并用 `actions/deploy-pages` 发布到 GitHub Pages。

## 本地构建

需要 Node.js 20 或更高（推荐 22，见 `.nvmrc`）。

```bash
npm ci               # 安装依赖
npm run dev          # 本地预览 http://localhost:5173
npm run build        # 生产构建，输出到 docs/.vitepress/dist
npm run preview      # 预览构建结果
npm run lint         # markdownlint
npm run links        # 外链检查（需要先安装 lychee：brew install lychee）
npm run check        # lint + build，提交前运行
```

`npm audit` 会报告 VitePress 1.x 依赖的 vite / esbuild 的开发服务器漏洞。它们只影响 `npm run dev` 的本地开发服务器，不会进入发布的静态文件；请只在本机访问开发服务器，不要把它暴露到公网。

## 写作约定

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。要点：

- 简体中文，保留英文技术术语；每一讲从 `templates/lecture.md` 复制。
- 不提交课件 PDF、不复制课件图片；图示用 Mermaid 重画，引用时用官方链接并标注课件页码。
- 课件之外的补充要标明（补充），观点与结论要和课件内容区分开。

## 部署到 GitHub Pages

1. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
2. 推送到 `main`，`deploy.yml` 会自动构建并发布。站点地址是 `https://shinelikeamillion.github.io/stanford-cs329z/`（一般形式 `https://<用户名>.github.io/<仓库名>/`）；`BASE` 环境变量由工作流自动设成 `/<仓库名>/`。
3. 如果使用自定义域名，把工作流里的 `BASE` 改成 `/` 并添加 `docs/public/CNAME`。

注意：私有仓库使用 GitHub Pages 需要付费计划（GitHub Pro / Team / Enterprise）；免费账号只能对公开仓库发布 Pages。

## 许可

- **笔记内容**（`docs/`、`templates/`、`README.md`、`CONTRIBUTING.md`）：[CC BY-NC-SA 4.0](LICENSE)（署名、非商业性使用、相同方式共享）。
- **站点工具与配置**（`package.json`、`docs/.vitepress/`、`.github/`、`lychee.toml` 等）：[MIT](LICENSE-CODE)。
- CC 许可只覆盖我的复述与整理，不覆盖被引用的课件、论文和视频，那些仍归原权利人所有。
