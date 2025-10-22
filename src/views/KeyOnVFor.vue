<script setup lang="ts">
import { shuffle } from '@/helpers'
import { useRefresh } from '@/composables/useRefresh'
import CopyButton from '@/components/CopyButton.vue'

const lesson = {
  title: 'Key on v-for',
  directions: 'fill the same input in each item and click shuffle to check results',
}

const ITEMS = [
  { id: 1, label: 'first name' },
  { id: 2, label: 'last name' },
  { id: 3, label: 'e-mail' },
  { id: 4, label: 'website' },
]
const { items, refreshKey, refresh } = useRefresh(ITEMS)
</script>

<template>
  <h1>{{ lesson.title }}</h1>
  <p class="directions">{{ lesson.directions }}</p>
  <div class="examples" :key="refreshKey">
    <div class="example wrong">
      <h2>No <span class="highlight">key</span></h2>
      <ul>
        <li v-for="item in items">{{ item.label }} <input type="text" /></li>
      </ul>
    </div>
    <div class="example wrong">
      <h2>Using <span class="highlight">index</span> as <span class="highlight">key</span></h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item.label }} <input type="text" /></li>
      </ul>
    </div>
    <div class="example correct">
      <h2>Using <span class="highlight">key</span></h2>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.label }} <input type="text" /></li>
      </ul>
    </div>
  </div>
  <div class="buttons">
    <button @click="refresh" class="btn-refresh">&#x27F3; Refresh</button>
    <button @click="items = shuffle(items)" class="btn-shuffle">&#x1F500; Shuffle</button>
  </div>
  <div class="codes">
    <div class="wrong">
      <p>&#x274C; No <b>key</b></p>
      <p><code>v-for="item in items"</code></p>
    </div>
    <div class="wrong">
      <p>&#x274C; Using <b>index</b> as <b>key</b></p>
      <p><code>v-for="(item, index) in items" :key="index"</code></p>
    </div>
    <div class="correct">
      <p>&#x2705; Using <b>key</b></p>
      <p>
        <code>v-for="item in items" :key="item.id"</code>
        <CopyButton id="code-1" />
      </p>
      <p>
        <code>v-for="item in items" :key="item.label + item.id"</code>
        <CopyButton id="code-2" />
      </p>
      <p>
        <code>v-for="item in items" :key="JSON.stringify(item)"</code>
        <CopyButton id="code-3" />
      </p>
    </div>
  </div>
</template>
