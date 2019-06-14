<template lang="pug">
v-container(fluid).pa-0
  v-img(:src="require('../assets/thing.png')")
    v-carousel(hide-delimiters, hide-controls)
      v-carousel-item(v-for="(item, i) in items", :key="i", :src="item.src")
    v-layout
      v-flex(xs12).pa-3
        p.subheading.white--text
          | Sint in veniam deserunt aliquip quis amet non est. Consequat non ex velit officia deserunt ullamco ullamco non. Mollit laborum consectetur officia nostrud consectetur officia minim occaecat esse ad quis pariatur. Cillum sit sint quis voluptate veniam id excepteur esse ea dolor. Proident veniam minim fugiat adipisicing occaecat eiusmod consequat irure.
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'HelloWorld',
  props: ['posts'],
})
export default class HelloWorld extends Vue {
  public items = [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
