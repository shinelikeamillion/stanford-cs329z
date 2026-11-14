---
title: 术语表
---

# 术语表

中英对照，按字母顺序。每条标出首次出现的讲次（目前覆盖 L01、L02）；定义是我自己的理解，需要精确表述时请回课件或论文。随着讲义补全继续增补。

| 术语 | 中文 | 解释 | 讲次 |
| --- | --- | --- | --- |
| Act | 行动 | ReAct 轨迹里的外部动作，通常是一次工具调用 | [L01](./lectures/lecture-01.md) |
| Agent | 智能体 | 通过观察环境并采取行动来完成目标的系统；LLM 时代的 agent 以 LLM 为核心 | [L01](./lectures/lecture-01.md) |
| Agent loop | agent 循环 | observe → think → act 的反复循环，直到完成任务 | [L01](./lectures/lecture-01.md) |
| Agent–environment loop | 智能体–环境循环 | RL 视角下状态、动作、奖励之间的交互循环（Sutton & Barto） | [L01](./lectures/lecture-01.md) |
| Agentic system | 智能体系统 | 课程对 “由 LLM 驱动、会观察和行动的系统” 的统称 | [L01](./lectures/lecture-01.md) |
| Attention（self-attention） | 自注意力 | 每个 token 用 Q 匹配（因果 mask 内的）K，按 softmax 权重汇总 V | [L02](./lectures/lecture-02.md) |
| Beam search | 束搜索 | 同时保留若干条得分最高的候选序列并逐步扩展的解码策略 | [L02](./lectures/lecture-02.md) |
| Causal mask | 因果掩码 | 让每个位置只能看到它之前的 token，是 decoder-only 逐 token 生成的前提 | [L02](./lectures/lecture-02.md) |
| Chain-of-Thought（CoT） | 思维链 | 让模型先写出中间推理步骤再作答的提示方法 | [L01](./lectures/lecture-01.md) |
| Compaction | 压缩 | 上下文过长时重写或压缩，需要决定保留什么；丢得太多会丢失关键约束 | [L02](./lectures/lecture-02.md) |
| Compound AI system | 复合 AI 系统 | LLM 加上检索器、工具、代码执行等其他部件组成的系统 | [L01](./lectures/lecture-01.md) |
| Consistency | 一致性 | 同一任务重复运行是否得到同样的结果，可靠性的第一个维度 | [L01](./lectures/lecture-01.md) |
| Constrained decoding | 约束解码 | 在解码时强制输出符合某种结构（如用有限状态机），常用于结构化输出 | [L02](./lectures/lecture-02.md) |
| Context engineering | 上下文工程 | 决定什么信息、按什么顺序、何时进入 agent 的上下文，包括检索与压缩 | [L02](./lectures/lecture-02.md) |
| Context rot | 上下文腐烂 | 上下文越长，模型对其中信息的利用越差 | [L02](./lectures/lecture-02.md) |
| Contract Net Protocol | 合同网协议 | 1980 年提出的多 agent 任务协商协议：发布任务、投标、中标 | [L01](./lectures/lecture-01.md) |
| Cross-entropy loss | 交叉熵损失 | 对真实下一 token 取 −log 概率，语言模型预训练的损失 | [L02](./lectures/lecture-02.md) |
| Decode | 解码阶段 | 逐 token 生成，每步复用 KV cache，受显存带宽限制 | [L02](./lectures/lecture-02.md) |
| Decoder-only Transformer | 仅解码器 Transformer | 嵌入加位置信息，经 N 个（因果自注意力 + 前馈）块，再接 LM head；现代 LLM 的主流结构 | [L02](./lectures/lecture-02.md) |
| DSPy signature | DSPy 签名 | 用带类型的输入输出字段声明一个 LM 调用，由框架翻译成 prompt | [L02](./lectures/lecture-02.md) |
| Environment | 环境 | agent 所处并与之交互的外部世界：桌面、浏览器、App、数据库等 | [L01](./lectures/lecture-01.md) |
| Episodic memory | 情景记忆 | 存储经历的记忆；写入多为追加事件流 | [L01](./lectures/lecture-01.md) |
| Evals | 评测 | agent 工程三层之一，指评测本身及其度量指标 | [L01](./lectures/lecture-01.md) |
| Generative model | 生成式模型 | 学习数据分布、因此可以采样的模型；语言模型属于此类 | [L02](./lectures/lecture-02.md) |
| Hybrid attention | 混合注意力 | 全局 softmax 注意力与线性注意力混合使用，兼顾效率与检索能力 | [L02](./lectures/lecture-02.md) |
| In-context learning | 上下文学习 | 在 prompt 中放示例，不更新权重就让模型学会新任务 | [L01](./lectures/lecture-01.md) |
| KV cache | KV 缓存 | 缓存历史 token 的 K 与 V，避免 decode 时重算；大小随上下文线性增长 | [L02](./lectures/lecture-02.md) |
| Linear attention | 线性注意力 | 去掉 softmax、改变结合顺序，用固定大小的状态递推，复杂度对长度是线性的 | [L02](./lectures/lecture-02.md) |
| LLM Core | LLM 核心 | agent 骨架中负责生成思考与动作的语言模型 | [L01](./lectures/lecture-01.md) |
| MCP（Model Context Protocol） | 模型上下文协议 | 连接 AI 应用与数据、工具的标准化协议 | [L01](./lectures/lecture-01.md) |
| Memory | 记忆 | 在上下文窗口之外保存信息的机制，分 episodic、semantic、procedural | [L01](./lectures/lecture-01.md) |
| Midtraining | 中训练 | 把数据混合调得更偏向目标领域（数学、代码等）的训练阶段，位于预训练与后训练之间 | [L02](./lectures/lecture-02.md) |
| Multi-agent debate | 多智能体辩论 | 多个模型实例互相给出并修改答案，以提高推理正确性 | [L01](./lectures/lecture-01.md) |
| Multi-head attention | 多头注意力 | 多组 W_Q / W_K / W_V 并行计算注意力，拼接后用 W_O 投影回模型维度 | [L02](./lectures/lecture-02.md) |
| Nucleus sampling（top-p） | 核采样 | 在累计概率刚好超过 p 的最小 token 集合里采样 | [L02](./lectures/lecture-02.md) |
| Observation（Obs） | 观察 | 环境返回给 agent 的信息，比如工具的输出 | [L01](./lectures/lecture-01.md) |
| Orchestrator | 编排器 | 负责规划与调度其他 agent 的角色，如 Magentic-One 中的 orchestrator | [L01](./lectures/lecture-01.md) |
| Planning & Reasoning | 规划与推理 | agent 中更新自身内部状态的思考部分 | [L01](./lectures/lecture-01.md) |
| Posttraining | 后训练 | 预训练之后的阶段：指令微调、人类偏好学习、RLVR 等 | [L02](./lectures/lecture-02.md) |
| Prefill | 预填充阶段 | 一次性并行处理整个 prompt 并写入 KV cache，偏算力受限 | [L02](./lectures/lecture-02.md) |
| Procedural memory | 程序性记忆 | 存储技能的记忆，例如 Voyager 的代码技能库 | [L01](./lectures/lecture-01.md) |
| RAG（Retrieval-Augmented Generation） | 检索增强生成 | 检索（Retrieve）→ 增强（Augment）→ 生成（Generate） | [L01](./lectures/lecture-01.md) |
| ReAct | 推理与行动 | Reason + Act，Thought、Act、Obs 交织的轨迹 | [L01](./lectures/lecture-01.md) |
| Recursive Language Model（RLM） | 递归语言模型 | 把长上下文放进环境，让模型用代码与子调用去处理，而不是塞进窗口 | [L02](./lectures/lecture-02.md) |
| Reflexion | 口头反思 | agent 对失败反馈做自然语言反思并保存为 self-hints，不更新权重 | [L01](./lectures/lecture-01.md) |
| Reliability | 可靠性 | 一致性、对扰动的鲁棒性、失败可预测性 | [L01](./lectures/lecture-01.md) |
| RLVR | 可验证奖励强化学习 | 用可程序化验证的奖励（单测、证明、精确匹配、系统状态）做强化学习 | [L02](./lectures/lecture-02.md) |
| Robustness | 鲁棒性 | prompt、工具等出现小而真实的变化时，agent 的表现是否稳定 | [L01](./lectures/lecture-01.md) |
| Roofline model | Roofline 模型 | 用算术强度区分带宽受限与算力受限的性能模型 | [L02](./lectures/lecture-02.md) |
| Self-Consistency（SC） | 自洽性 | 采样多条 CoT 推理路径，选最一致的最终答案 | [L01](./lectures/lecture-01.md) |
| Semantic memory | 语义记忆 | 存储知识的记忆；写入常由 LLM 对事件做推理得到 | [L01](./lectures/lecture-01.md) |
| Skill library | 技能库 | 以可执行代码保存的技能集合，按 embedding 检索 | [L01](./lectures/lecture-01.md) |
| Speculative decoding | 投机解码 | 小模型起草若干 token，大模型并行验证，降低延迟 | [L02](./lectures/lecture-02.md) |
| Sycophancy | 谄媚 | 模型为了迎合用户而给出不真实的赞同或奉承 | [L01](./lectures/lecture-01.md) |
| Task completion ≠ safety compliance | 任务完成不等于安全合规 | 做完任务不代表过程中没有违规行为 | [L01](./lectures/lecture-01.md) |
| Temperature | 温度 | 对 logits 做缩放的采样参数；T 小更确定，T 大更多样 | [L02](./lectures/lecture-02.md) |
| Test-time scaling | 推理时扩展 | 多花推理算力换质量：长 CoT、推理等级、重复采样、自洽性 | [L02](./lectures/lecture-02.md) |
| Thought | 思考 | ReAct 轨迹里的内部推理步骤 | [L01](./lectures/lecture-01.md) |
| Tool call | 工具调用 | 选择工具、填参数、校验、执行四步 | [L01](./lectures/lecture-01.md) |
| Toolformer | — | 让语言模型自监督地学会何时、如何调用 API 的方法 | [L01](./lectures/lecture-01.md) |
| Workflow | 工作流 | 由代码固定步骤的 LLM 系统，区别于由 LLM 决定步骤的 agent | [L01](./lectures/lecture-01.md) |
