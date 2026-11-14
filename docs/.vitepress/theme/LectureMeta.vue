<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const fm = computed(() => frontmatter.value)
const isLecture = computed(() => typeof fm.value.lecture === 'number')
const statusLabel = computed(() => {
  switch (fm.value.status) {
    case 'complete':
      return '已完成'
    case 'in-progress':
      return '进行中'
    default:
      return '占位（仅官方链接）'
  }
})
const tags = computed<string[]>(() => (Array.isArray(fm.value.tags) ? fm.value.tags : []))
</script>

<template>
  <div v-if="isLecture" class="lecture-meta">
    <div class="row">
      <span class="badge" :data-status="fm.status">{{ statusLabel }}</span>
      <span v-if="fm.date" class="item">日期（PT）：{{ fm.date }}</span>
      <span v-if="fm.speakers" class="item">主讲：{{ fm.speakers }}</span>
    </div>
    <div class="row links">
      <a v-if="fm.slides" :href="fm.slides" target="_blank" rel="noreferrer">官方课件 PDF</a>
      <a v-if="fm.video" :href="fm.video" target="_blank" rel="noreferrer">官方视频</a>
      <a v-if="fm.code" :href="fm.code" target="_blank" rel="noreferrer">官方代码</a>
      <a :href="fm.schedule || 'https://cs329z.stanford.edu/#schedule'" target="_blank" rel="noreferrer">官方日程</a>
    </div>
    <div v-if="tags.length" class="row">
      <span v-for="t in tags" :key="t" class="tag">#{{ t }}</span>
    </div>
  </div>
</template>
