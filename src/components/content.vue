<template>
<div id="content">
    <CEnvironment />
    <CDrawingArea />
    <CProperties />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Environment } from './../models/core/environment';

import CDrawingArea from './drawing-area.vue';
import CEnvironment from './environment.vue';
import CProperties from './properties.vue';

@Options({
    components: {
        CEnvironment,
        CDrawingArea,
        CProperties
    }
})
export default class CContent extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
    display: flex;
    height: 100%;
}
</style>