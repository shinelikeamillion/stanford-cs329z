---
title: "0001 Workflow 与 Agent 的边界在哪里"
discussion: 1
date: "2026-11-14"
status: draft
lectures: [1]
tags:
  - workflow
  - agent
  - design
---

# 0001 Workflow 与 Agent 的边界在哪里

> 第 1 讲用 “谁来决定步骤” 区分 workflow 与 agent。这条线在真实系统里到底有多清楚？这一页是示范讨论页，结论只是起点，需要之后用更多讲次的内容修正。

## 背景

[L01](../lectures/lecture-01.md) 的 p.56 给出的划分是：

- **Workflow**：代码固定步骤（例：Agentless、AlphaCode 2）。
- **Agent**：LLM 决定步骤（例：SWE-agent）。
- 两者都是 compound AI system。

后面的讲次会回到这个问题：L06 讲两种系统的设计模式，L08 讲多 agent 的编排，L18 把 coding agent 放进评测框架。

## 问题

1. 一个 “代码决定外层流程、LLM 决定内层细节” 的系统，算哪一边？
2. 把 agent 的 loop 写成一个状态机（例如 LangGraph），它还是 agent 吗？
3. 选 workflow 还是 agent，主要由什么决定：任务的开放程度、可接受的成本，还是对可控性的要求？

## 各方观点

| 观点 | 论据 | 出处 |
| --- | --- | --- |
| 看控制权：谁产生下一步，谁就是 agent 的决定者 | 判据清楚，可操作 | L01 p.56 |
| 看连续性：控制权是一条光谱，不是二分 | 真实系统常常是混合体：固定骨架，局部放开 | 待 L06 / L08 补充 |
| 看评测：分别需要不同的评测方式 | workflow 的每一步都可单测，agent 要看整条轨迹 | 待 L13 / L15 补充 |

## 我的结论（暂定）

- 先用 L01 的判据做第一次分类：**下一步由谁决定**。
- 遇到混合系统，就**逐层标注**：外层流程谁决定，内层每一步谁决定，而不是给整个系统贴一个标签。
- 选型时先从最简单的 workflow 起步，只有当步骤无法预先写死时再放开给 LLM。这一条是我的工程直觉，**课件没有这样说**，等读完 L06 的 “Building Effective AI Agents” 再校正。

## 待验证

- [ ] 读 L06 后，对照 Anthropic 的 workflow 模式清单，看上面的 “逐层标注” 是否合理。
- [ ] 读 L13 后，写出 workflow 与 agent 各自的 4-tuple 评测差异。

## 参考

- [Zaharia et al. The Shift from Models to Compound AI Systems](https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/)
- [Anthropic. Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents)
