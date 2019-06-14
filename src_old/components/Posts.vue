<template lang="pug">
.container
    h1(v-for="post in posts") {{ post }}
</template>

<script>
export default {
  name: "Posts",
  props: ["posts"],
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>