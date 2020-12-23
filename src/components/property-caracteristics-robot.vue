<template>
  <div class="property-panel" v-if="robot !== undefined">
    <h2>Caracteristics</h2>
    <div class="field">
      <label>Diameter</label>
      <input type="number" v-model.number="robot.diameter" />
    </div>
    <div class="field">
      <label>Linear speed</label>
      <input type="number" v-model.number="robot.linearSpeed" />
    </div>
    <div class="field">
      <label>Angular speed</label>
      <input type="number" v-model.number="robot.angularSpeed" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Robot } from "./../models/core/tangible-objects/movable-objects/robot";

@Options({
  props: {
    robot: Robot,
  },
})
export default class CPropertyCaracteristicsRobot extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
