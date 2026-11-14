# 写作与维护约定

这个仓库是个人学习笔记，但按公开项目的标准维护：每一次改动都应该能通过 lint 和构建，内容有出处，结构一致。

## 版权红线

1. **不提交课件 PDF、幻灯片图片、截图、课程视频。** `.gitignore` 已拦截 `*.pdf`、`*.pptx`，但请自己也留意。
2. 引用课件时：写自己的话；需要回查时标课件页码（`p.N`）并链接官方 URL。
3. 图示一律用 Mermaid 重画，并在图下方或章节开头注明是自行重画。
4. 论文只写自己的总结并链接 arXiv / 官方页面，不转载全文或大段原文。
5. 不放 Canvas / Ed 里需要登录才能看到的内容，也不放任何账号、密钥、个人联系方式。

## 新增或完善一讲

1. 复制 `templates/lecture.md` 到 `docs/lectures/lecture-NN.md`（覆盖占位页）。
2. 填写 frontmatter：`title`、`lecture`、`date`（PT 日期）、`status`（`placeholder` / `in-progress` / `complete`）、`slides`、`video`、`tags`。
3. 按模板的八个部分写：概览、核心概念、详细笔记、关键图示、重点 / 易错点、讨论与思考题、延伸阅读与资源、与项目的联系。
4. **详细笔记要覆盖整份课件**，按课件顺序分节，标出页码范围；不能只写摘要。
5. 课件之外的补充要标（补充）；拿不准的数字写 “以原图为准”，不要编造。
6. 更新 `docs/progress.md` 里该讲的状态，并在 `docs/glossary.md` 里补新术语。
7. 如果是新增的讨论，复制 `templates/discussion.md` 到 `docs/discussions/NNNN-slug.md`，并在 `docs/discussions/index.md` 与侧边栏（`docs/.vitepress/config.mts`）登记。

## 文风

- 简体中文，保留英文技术术语（首次出现可附中文）。
- 句子短，先结论后细节；表格用来对比，不要用表格装饰。
- 中文与英文 / 数字之间不强制加空格，但全篇保持一致。
- 日期一律写 ISO 格式 `YYYY-MM-DD`；官网时间是太平洋时间（PT），换算成别的时区时要注明。

## 提交前检查

```bash
npm run check    # markdownlint + VitePress 构建（含死链检查）
npm run links    # 外链检查，需要 lychee
```

## 提交信息

使用简短的祈使句，加一个范围前缀：

- `lecture(01): 补全 ReAct 对比表`
- `discussion(0002): 新增记忆分类讨论`
- `site: 升级 VitePress`
- `ci: 增加 lychee 缓存`
- `docs: 更新 README`

## 分支与发布

- `main` 始终可构建，推送到 `main` 会自动部署。
- 较大的改动开分支并走 PR，PR 描述里勾选模板里的检查项。
