<template lang="pug">
v-app
    v-toolbar(color='primary', dark)
        v-toolbar-title {{ title }}
    slot
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    props: ['title'],
})
export default class extends Vue {
    public msg = 'hey'
}
</script>
