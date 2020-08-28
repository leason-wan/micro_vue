<template>
  <div id="app">
    <div v-if="loading">
      loading...
    </div>
    <div>
      <div>
        <!-- <micro-slot name="nav" /> -->
        <div id="one"></div>
        <h1>this for one app mounted</h1>
      </div>
      <div>
        <!-- <micro-slot name="content" /> -->
        <div id="two"></div>
        <h1>this for two app mounted</h1>
      </div>    
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loading: false
    }
  }
}
</script>
