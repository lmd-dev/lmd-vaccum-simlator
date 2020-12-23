<template>
  <div class="property-panel" v-if="ultrasound !== undefined">
    <h3>{{ultrasound.name}} (ultrasound)</h3>
    <div class="field">
      <label>Distance</label>
      <input type="number" readonly v-model.number="ultrasound.lastDistance" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Ultrasound } from "./../models/core/sensors/ultrasound";

@Options({
  props: {
    ultrasound: Ultrasound,
  },
  methods: {
    forceRender: function() {
      this.$forceUpdate();

      this._refreshTimer = setTimeout(() => {this.forceRender();}, 100);
    }
  },
  mounted: function()
  {
    this.forceRender();
  },
  beforeUnmount: function()
  {
    clearTimeout(this._refreshTimer);
  }
})
export default class CSensorUltrasound extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
