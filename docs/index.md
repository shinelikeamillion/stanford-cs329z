---
layout: home
title: 首页
hero:
  name: CS329Z 学习笔记
  text: Engineering AI Agents
  tagline: Stanford CS329Z（Fall 2026）的非官方个人学习笔记：一讲一页，加讨论、术语表和资源。
  actions:
    - theme: brand
      text: 从 L01 开始
      link: /lectures/lecture-01
    - theme: alt
      text: 课程大纲
      link: /syllabus
    - theme: alt
      text: 官方课程站
      link: https://cs329z.stanford.edu/
features:
  - title: 逐讲笔记
    details: 每一讲一页，覆盖整份课件：核心概念、分节详细笔记、Mermaid 图示、易错点、思考题与延伸阅读。
    link: /lectures/
  - title: 讨论与整理
    details: 问题、各方观点、我的结论和待验证事项，和讲义页分开记录。
    link: /discussions/
  - title: 术语表与资源
    details: 中英对照术语、论文、代码仓库、视频和博客，全部指向官方来源。
    link: /glossary
  - title: 学习进度
    details: 每一讲的笔记状态、阅读与动手练习的完成情况。
    link: /progress
---

::: warning 声明
这是**非官方个人学习笔记**，与 Stanford University 及 CS329Z 课程组没有任何隶属或授权关系。课件、视频、论文的版权归原作者所有，本站只提供官方链接，不托管课件文件。内容可能有错，请以官方材料为准。
:::

## 这门课讲什么

CS329Z 讲怎样把 agentic systems 做成工程：先从零手搓 RAG、工具调用和 agent loop，再看 DSPy 这类框架怎样抽象这些模式，最后落到数据、评测、安全和 coding agent。课程强调从单体语言模型转向 **compound AI systems**（LLM、检索器、工具、优化器一起工作）。

官网的课表是暂定的，可能调整。本站的讲次编号沿用官方课件的文件名（`lecture01.pdf` 等），其中第 14 讲是 Andrew Ng 的炉边谈话，没有课件。

## 怎么用这个站点

1. 想先建立整体印象：读 [L01 导论](./lectures/lecture-01.md)，它也是其余各讲的样板。
2. 想查概念：用顶部的搜索，或者看[术语表](./glossary.md)。
3. 想找原始资料：[资源汇总](./resources.md) 按讲次列出官方课件、视频、阅读和代码。
4. 想看进度：[学习进度](./progress.md)。

## 许可

笔记内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。许可只覆盖我自己的复述与整理，不覆盖被引用的课件、论文与视频。
