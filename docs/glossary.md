---
title: 术语表
---

# 术语表

中英对照，按字母顺序。每条标出首次出现的讲次；定义是我自己的理解，需要精确表述时请回课件或论文。随着讲义补全继续增补。

| 术语 | 中文 | 解释 | 讲次 |
| --- | --- | --- | --- |
| Act | 行动 | ReAct 轨迹里的外部动作，通常是一次工具调用 | [L01](./lectures/lecture-01.md) |
| Agent | 智能体 | 通过观察环境并采取行动来完成目标的系统；LLM 时代的 agent 以 LLM 为核心 | [L01](./lectures/lecture-01.md) |
| Agent loop | agent 循环 | observe → think → act 的反复循环，直到完成任务 | [L01](./lectures/lecture-01.md) |
| Agent–environment loop | 智能体–环境循环 | RL 视角下状态、动作、奖励之间的交互循环（Sutton & Barto） | [L01](./lectures/lecture-01.md) |
| Agentic system | 智能体系统 | 课程对 “由 LLM 驱动、会观察和行动的系统” 的统称 | [L01](./lectures/lecture-01.md) |
| Chain-of-Thought（CoT） | 思维链 | 让模型先写出中间推理步骤再作答的提示方法 | [L01](./lectures/lecture-01.md) |
| Compound AI system | 复合 AI 系统 | LLM 加上检索器、工具、代码执行等其他部件组成的系统 | [L01](./lectures/lecture-01.md) |
| Consistency | 一致性 | 同一任务重复运行是否得到同样的结果，可靠性的第一个维度 | [L01](./lectures/lecture-01.md) |
| Contract Net Protocol | 合同网协议 | 1980 年提出的多 agent 任务协商协议：发布任务、投标、中标 | [L01](./lectures/lecture-01.md) |
| Environment | 环境 | agent 所处并与之交互的外部世界：桌面、浏览器、App、数据库等 | [L01](./lectures/lecture-01.md) |
| Episodic memory | 情景记忆 | 存储经历的记忆；写入多为追加事件流 | [L01](./lectures/lecture-01.md) |
| Evals | 评测 | agent 工程三层之一，指评测本身及其度量指标 | [L01](./lectures/lecture-01.md) |
| In-context learning | 上下文学习 | 在 prompt 中放示例，不更新权重就让模型学会新任务 | [L01](./lectures/lecture-01.md) |
| LLM Core | LLM 核心 | agent 骨架中负责生成思考与动作的语言模型 | [L01](./lectures/lecture-01.md) |
| MCP（Model Context Protocol） | 模型上下文协议 | 连接 AI 应用与数据、工具的标准化协议 | [L01](./lectures/lecture-01.md) |
| Memory | 记忆 | 在上下文窗口之外保存信息的机制，分 episodic、semantic、procedural | [L01](./lectures/lecture-01.md) |
| Multi-agent debate | 多智能体辩论 | 多个模型实例互相给出并修改答案，以提高推理正确性 | [L01](./lectures/lecture-01.md) |
| Observation（Obs） | 观察 | 环境返回给 agent 的信息，比如工具的输出 | [L01](./lectures/lecture-01.md) |
| Orchestrator | 编排器 | 负责规划与调度其他 agent 的角色，如 Magentic-One 中的 orchestrator | [L01](./lectures/lecture-01.md) |
| Planning & Reasoning | 规划与推理 | agent 中更新自身内部状态的思考部分 | [L01](./lectures/lecture-01.md) |
| Procedural memory | 程序性记忆 | 存储技能的记忆，例如 Voyager 的代码技能库 | [L01](./lectures/lecture-01.md) |
| RAG（Retrieval-Augmented Generation） | 检索增强生成 | 检索（Retrieve）→ 增强（Augment）→ 生成（Generate） | [L01](./lectures/lecture-01.md) |
| ReAct | 推理与行动 | Reason + Act，Thought、Act、Obs 交织的轨迹 | [L01](./lectures/lecture-01.md) |
| Reflexion | 口头反思 | agent 对失败反馈做自然语言反思并保存为 self-hints，不更新权重 | [L01](./lectures/lecture-01.md) |
| Reliability | 可靠性 | 一致性、对扰动的鲁棒性、失败可预测性 | [L01](./lectures/lecture-01.md) |
| Robustness | 鲁棒性 | prompt、工具等出现小而真实的变化时，agent 的表现是否稳定 | [L01](./lectures/lecture-01.md) |
| Self-Consistency（SC） | 自洽性 | 采样多条 CoT 推理路径，选最一致的最终答案 | [L01](./lectures/lecture-01.md) |
| Semantic memory | 语义记忆 | 存储知识的记忆；写入常由 LLM 对事件做推理得到 | [L01](./lectures/lecture-01.md) |
| Skill library | 技能库 | 以可执行代码保存的技能集合，按 embedding 检索 | [L01](./lectures/lecture-01.md) |
| Sycophancy | 谄媚 | 模型为了迎合用户而给出不真实的赞同或奉承 | [L01](./lectures/lecture-01.md) |
| Task completion ≠ safety compliance | 任务完成不等于安全合规 | 做完任务不代表过程中没有违规行为 | [L01](./lectures/lecture-01.md) |
| Thought | 思考 | ReAct 轨迹里的内部推理步骤 | [L01](./lectures/lecture-01.md) |
| Tool call | 工具调用 | 选择工具、填参数、校验、执行四步 | [L01](./lectures/lecture-01.md) |
| Toolformer | — | 让语言模型自监督地学会何时、如何调用 API 的方法 | [L01](./lectures/lecture-01.md) |
| Workflow | 工作流 | 由代码固定步骤的 LLM 系统，区别于由 LLM 决定步骤的 agent | [L01](./lectures/lecture-01.md) |
