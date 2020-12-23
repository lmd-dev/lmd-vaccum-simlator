<template>
  <div class="property-panel" v-if="compass !== undefined">
    <h3>{{compass.name}} (compass)</h3>
    <div class="field">
      <label>Direction</label>
      <input type="number" readonly v-model.number="compass.lastDirection" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Compass } from "./../models/core/sensors/compass";

@Options({
  props: {
    compass: Compass,
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
export default class CSensorCompass extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
