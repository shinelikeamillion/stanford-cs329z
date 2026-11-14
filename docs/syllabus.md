---
title: 课程大纲与日程
---

# 课程大纲与日程

信息来自[官方课程站](https://cs329z.stanford.edu/)与 [Logistics](https://cs329z.stanford.edu/logistics.html)，最后核对日期：2026-11-14。官网的日程是暂定的，如有出入以官网为准。时间一律是**太平洋时间（PT）**。

## 基本信息

| 项目 | 内容 |
| --- | --- |
| 课程 | CS329Z: Engineering AI Agents |
| 学期 | Stanford 2026–2027 Autumn |
| 讲师 | Diyi Yang、Michael Ryan、John Yang |
| 上课时间 | 周一、周三 1:30–2:50 p.m. PT，Skilling Auditorium |
| 先修 | CS 224N / 224U / 224V / CS 336，或同等的 NLP 背景 |
| 联系 | 课程 Ed 讨论区；其他事务邮件 `cs329z-staff@lists.stanford.edu` |
| 官方入口 | [课程站](https://cs329z.stanford.edu/) · [Logistics](https://cs329z.stanford.edu/logistics.html) · [Project](https://cs329z.stanford.edu/project.html) |

## 评分

| 项目 | 占比 |
| --- | --- |
| 课程项目（Proposal 5%、Midway report 5%、Midpoint demo 5%、Final submission 15%、Final system demo 10%） | 40% |
| 作业 | 15% |
| 作业测验（15 分钟口头检查） | 15% |
| Paper video | 10% |
| Peer review | 20% |

课程鼓励把生成式 AI 当作学习的合作者，但要能讲清楚自己提交的内容；项目报告正文不能让 AI 代写。细则见官方 Logistics 页。

## 日程总览

“笔记” 一栏表示本站的状态：**完成**是已写好的完整笔记，**占位**是只有标题与官方链接。

| 讲次 | 日期（PT） | 主题 | 官方材料 | 笔记 |
| --- | --- | --- | --- | --- |
| [L01](./lectures/lecture-01.md) | 9/23 三 | Introduction：What Are Agentic Systems? | 课件、视频 | 完成 |
| [L02](./lectures/lecture-02.md) | 9/28 一 | LLMs for Builders | 课件、视频 | 占位 |
| [L03](./lectures/lecture-03.md) | 9/30 三 | Retrieval-Augmented Generation (RAG) | 课件、视频 | 占位 |
| [L04](./lectures/lecture-04.md) | 10/5 一 | Tool Use & Function Calling | 课件、视频 | 占位 |
| [L05](./lectures/lecture-05.md) | 10/7 三 | Frameworks & Orchestration | 课件、视频、代码 | 占位 |
| [L06](./lectures/lecture-06.md) | 10/12 一 | Agent Design Patterns & Scaffolds | 课件 | 占位 |
| [L07](./lectures/lecture-07.md) | 10/14 三 | Agent Memory Architectures | 课件 | 占位 |
| [L08](./lectures/lecture-08.md) | 10/19 一 | Multi-Agent Systems | 课件 | 占位 |
| [L09](./lectures/lecture-09.md) | 10/21 三 | Optimization | 课件 | 占位 |
| [L10](./lectures/lecture-10.md) | 10/26 一 | 嘉宾：Terminal-Bench | 课件 | 占位 |
| [L11](./lectures/lecture-11.md) | 10/28 三 | What Data Do Agents Need? | 课件 | 占位 |
| [L12](./lectures/lecture-12.md) | 11/2 一 | Data Selection & Quality | 课件 | 占位 |
| [L13](./lectures/lecture-13.md) | 11/4 三 | Evaluation Fundamentals & Benchmark Design | 课件 | 占位 |
| [L14](./lectures/lecture-14.md) | 11/9 一 | 炉边谈话：Andrew Ng | 无课件、无公开视频 | 占位 |
| [L15](./lectures/lecture-15.md) | 11/11 三 | LLM-as-Judge & Evaluation Infrastructure | 课件 | 占位 |
| [L16](./lectures/lecture-16.md) | 11/16 一 | 嘉宾：SWE-bench | 暂无 | 占位 |
| [L17](./lectures/lecture-17.md) | 11/18 三 | Agent Safety & Guardrails | 暂无 | 占位 |
| — | 11/23、11/25 | 感恩节，停课 | — | — |
| [L18](./lectures/lecture-18.md) | 11/30 一 | Coding & Software Agents | 暂无 | 占位 |
| [L19](./lectures/lecture-19.md) | 12/2 三 | Personal Agents | 暂无 | 占位 |
| — | 12/9 三 | Final Project Demo Day（3:30–6:30 p.m. PT，地点待定） | — | — |

::: info 编号说明
官方课件文件名是 `lecture01.pdf`…`lecture13.pdf`、`lecture15.pdf`，没有 `lecture14.pdf`，因为 11/9 是炉边谈话。本站沿用这个编号，并把后面的讲次顺延（L16 起）。L19 在官网上早先写作 Proactive Agents，现在是 Personal Agents；以官网当前标题为准。
:::

## 作业与论文视频

| 项目 | 说明 | 官方入口 |
| --- | --- | --- |
| HW1：Build an Agentic Harness | 从零搭建 agent harness，不用现成 agent 框架；脚手架仓库带详细讲义 | [assignment1-harness](https://github.com/cs329z/assignment1-harness) |
| HW2：Evaluate an Agent | 给现成 agent 设计评测：代码 grader、LLM-as-judge、4-tuple 任务、错误分析 | [assignment2-harness](https://github.com/cs329z/assignment2-harness) |
| Paper video | 选一篇课上没讲过的 agent 论文，录 10–15 分钟讲解 | [讲义 PDF](https://web.stanford.edu/class/cs329z/assignments/paper_video.pdf) |
| 课程项目 | 1–3 人组队，围绕 agent 的搭建、数据、评测或安全 | [Project 页](https://cs329z.stanford.edu/project.html) |

自学者不必追官方截止日期，只作对照。
