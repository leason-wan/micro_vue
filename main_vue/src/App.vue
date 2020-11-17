<template>
  <div id="app">
    <!-- <div v-if="loading">
      loading...
    </div> -->
    <h1>主页</h1>
    <ul>
      <li @click="push('/one')">one</li>
      <li @click="push('/two')">two</li>
    </ul>
    <micro-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    push(url) {
      history.pushState(null, null, url);
    }
  }
}
</script>
