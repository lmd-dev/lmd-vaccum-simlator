<template>
  <div id="top-bar">
    {{ $root.environment.name }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CTopBar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-bar {
  background-color: #dc30a2;
  flex-shrink: 0;
  height: 37px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
