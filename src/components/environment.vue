<template>
<div id="environment">
    <CEnvironmentActions />
    <CEnvironmentObjects />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Environment } from './../models/core/environment';

import CEnvironmentActions from './environment-actions.vue';
import CEnvironmentObjects from './environment-objects.vue';

@Options({
    components: {
        CEnvironmentActions,
        CEnvironmentObjects
    }
})
export default class CEnvironment extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#environment {
    height: 100%;
    flex-shrink: 0;
    width: 300px;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
}
</style>