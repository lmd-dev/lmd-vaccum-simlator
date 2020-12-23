<template>
  <div class="property-panel" v-if="ultrasound !== undefined">
    <h2>Caracteristics</h2>
    <div class="field">
      <label>Min. distance</label>
      <input type="number" v-model.number="ultrasound.minDistance" />
    </div>
    <div class="field">
      <label>Max. distance</label>
      <input type="number" v-model.number="ultrasound.maxDistance" />
    </div>
    <div class="field">
      <label>Horizontal angle</label>
      <input type="number" v-model.number="ultrasound.horizontalAngle" />
    </div>
    <div class="field">
      <label>Distance</label>
      <input type="text" readonly v-model.number="distance" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Ultrasound } from "./../models/core/sensors/ultrasound";

@Options({
  props: {
    ultrasound: Ultrasound,
  },
  computed: {
    distance: function()
    {
      if(this.ultrasound.lastDistance === Infinity)
        return "Infinity";
      else
        return this.ultrasound.lastDistance;
    }
  }
})
export default class CPropertyUltrasoundCaracteristics extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[readonly]{
  text-align: right;
}
</style>
