<template>
  <div class="property-panel" v-if="cylinder !== undefined">
    <h2>Caracteristics</h2>
    <div class="field">
      <label>Diameter</label>
      <input type="number" v-model.number="cylinder.diameter" />
    </div>
    <div class="field">
      <label>Height</label>
      <input type="number" v-model.number="cylinder.height" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Cylinder } from "./../models/core/tangible-objects/cylinder";

@Options({
  props: {
    cylinder: Cylinder,
  },
})
export default class CPropertyCylinderCaracteristics extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
