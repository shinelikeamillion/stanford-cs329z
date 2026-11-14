import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { lectures } from './lectures'

// Deployed under https://<user>.github.io/<repo>/ → CI sets BASE=/<repo>/.
const base = process.env.BASE ?? '/'
// GITHUB_REPOSITORY is "<owner>/<repo>" inside GitHub Actions; unset locally.
const repo = process.env.GITHUB_REPOSITORY

const lectureItems = lectures.map((l) => ({
  text: `L${String(l.n).padStart(2, '0')} ${l.short}`,
  link: `/lectures/lecture-${String(l.n).padStart(2, '0')}`,
}))

export default withMermaid(
  defineConfig({
    title: 'CS329Z 学习笔记',
    titleTemplate: ':title | CS329Z 学习笔记',
    description:
      'Stanford CS329Z: Engineering AI Agents (Fall 2026) 非官方个人学习笔记：逐讲整理、讨论、术语表与资源。',
    lang: 'zh-Hans',
    base,
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ['**/README.md'],
    head: [
      ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
      ['meta', { name: 'robots', content: 'index, follow' }],
    ],
    markdown: {
      lineNumbers: false,
    },
    vite: {
      build: {
        // Mermaid is large by design; it is loaded lazily on pages that contain diagrams.
        chunkSizeWarningLimit: 3000,
      },
    },
    themeConfig: {
      logo: '/favicon.svg',
      nav: [
        { text: '首页', link: '/' },
        { text: '课程大纲', link: '/syllabus' },
        { text: '讲义笔记', link: '/lectures/', activeMatch: '/lectures/' },
        { text: '讨论', link: '/discussions/', activeMatch: '/discussions/' },
        {
          text: '参考',
          items: [
            { text: '术语表', link: '/glossary' },
            { text: '资源', link: '/resources' },
            { text: '学习进度', link: '/progress' },
          ],
        },
        { text: '官方课程站', link: 'https://cs329z.stanford.edu/' },
      ],
      sidebar: [
        {
          text: '开始',
          items: [
            { text: '首页', link: '/' },
            { text: '课程大纲与日程', link: '/syllabus' },
            { text: '学习进度', link: '/progress' },
          ],
        },
        {
          text: '讲义笔记',
          collapsed: false,
          items: [{ text: '总览', link: '/lectures/' }, ...lectureItems],
        },
        {
          text: '讨论与整理',
          items: [
            { text: '讨论索引', link: '/discussions/' },
            { text: '0001 Workflow 与 Agent 的边界', link: '/discussions/0001-workflow-vs-agent' },
          ],
        },
        {
          text: '参考',
          items: [
            { text: '术语表', link: '/glossary' },
            { text: '资源汇总', link: '/resources' },
          ],
        },
      ],
      outline: { level: [2, 3], label: '本页目录' },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
                modal: {
                  displayDetails: '显示详细列表',
                  resetButtonTitle: '清除查询',
                  backButtonTitle: '关闭搜索',
                  noResultsText: '没有找到结果',
                  footer: {
                    selectText: '选择',
                    selectKeyAriaLabel: '回车',
                    navigateText: '切换',
                    navigateUpKeyAriaLabel: '上箭头',
                    navigateDownKeyAriaLabel: '下箭头',
                    closeText: '关闭',
                    closeKeyAriaLabel: 'esc',
                  },
                },
              },
            },
          },
        },
      },
      docFooter: { prev: '上一页', next: '下一页' },
      lastUpdated: { text: '最后更新' },
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '回到顶部',
      darkModeSwitchLabel: '外观',
      lightModeSwitchTitle: '切换到浅色',
      darkModeSwitchTitle: '切换到深色',
      footer: {
        message:
          '非官方个人学习笔记，与 Stanford University 及 CS329Z 课程组无任何隶属关系。笔记内容采用 CC BY-NC-SA 4.0 许可。',
        copyright: '课件、视频与论文版权归原作者所有，本站只提供官方链接。',
      },
      ...(repo
        ? {
            socialLinks: [{ icon: 'github', link: `https://github.com/${repo}` }],
            editLink: {
              pattern: `https://github.com/${repo}/edit/main/docs/:path`,
              text: '在 GitHub 上编辑此页',
            },
          }
        : {}),
    },
    mermaid: {
      theme: 'default',
      securityLevel: 'strict',
    },
    mermaidPlugin: {
      class: 'mermaid',
    },
  }),
)
