<template>
  <div class="property-panel" v-if="block !== undefined">
    <h2>Caracteristics</h2>
    <div class="field">
      <label>Width</label>
      <input type="number" v-model.number="block.width" />
    </div>
    <div class="field">
      <label>Height</label>
      <input type="number" v-model.number="block.height" />
    </div>
    <div class="field">
      <label>Depth</label>
      <input type="number" v-model.number="block.depth" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Block } from "./../models/core/tangible-objects/block";

@Options({
  props: {
    block: Block,
  },
})
export default class CPropertyBlockCaracteristics extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
