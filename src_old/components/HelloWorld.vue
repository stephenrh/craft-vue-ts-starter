<template lang="pug">
.container
  h1(v-for="post in posts") {{ post.title }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export default class extends Vue {
  mounted() {
    console.log('Ok, its going')
  }
  $props: ["posts"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>