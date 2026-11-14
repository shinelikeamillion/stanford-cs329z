// Single source of truth for the lecture list used by the sidebar.
// Official schedule: https://cs329z.stanford.edu/#schedule  (numbers follow the official slide file names;
// lecture14 is the Andrew Ng fireside chat, which has no slides).
export interface LectureEntry {
  n: number
  short: string
}

export const lectures: LectureEntry[] = [
  { n: 1, short: 'Intro：什么是 Agentic Systems' },
  { n: 2, short: 'LLMs for Builders' },
  { n: 3, short: 'RAG' },
  { n: 4, short: 'Tool Use & Function Calling' },
  { n: 5, short: 'Frameworks & Orchestration' },
  { n: 6, short: 'Design Patterns & Scaffolds' },
  { n: 7, short: 'Memory Architectures' },
  { n: 8, short: 'Multi-Agent Systems' },
  { n: 9, short: 'Optimization' },
  { n: 10, short: '嘉宾：Terminal-Bench' },
  { n: 11, short: 'What Data Do Agents Need?' },
  { n: 12, short: 'Data Selection & Quality' },
  { n: 13, short: 'Evaluation & Benchmark Design' },
  { n: 14, short: '炉边谈话：Andrew Ng' },
  { n: 15, short: 'LLM-as-Judge & Eval Infra' },
  { n: 16, short: '嘉宾：SWE-bench' },
  { n: 17, short: 'Agent Safety & Guardrails' },
  { n: 18, short: 'Coding & Software Agents' },
  { n: 19, short: 'Personal Agents' },
]
