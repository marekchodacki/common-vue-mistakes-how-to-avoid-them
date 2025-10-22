<script setup lang="ts">
import { course } from '@/_data/course'
</script>

<template>
  <h1>{{ course.title }}</h1>
  <div class="lessons">
    <ul>
      <li v-for="(lesson, index) in course.lessons" :key="lesson.id" class="lesson-link">
        <RouterLink :to="lesson.slug" v-if="lesson.key"
          >Lesson {{ index + 1 }}: {{ lesson.subject }}</RouterLink
        >
        <span class="disabled" v-else>Lesson {{ index + 1 }}: {{ lesson.subject }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lessons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 600px;
}
.lesson-link a {
  transition: color 0.3s ease;
}
.lesson-link a:hover {
  color: var(--color-sky-500);
}
.disabled {
  color: var(--color-neutral-800);
  user-select: none;
}
</style>
