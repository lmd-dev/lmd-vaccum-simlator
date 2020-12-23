<template>
  <div v-if="$root.selectedObject" id="properties">
    <CPropertyInformation />
    <CPropertyPosition :object="$root.selectedObject" />
    <CPropertyBlockCaracteristics v-if="$root.selectedObject.type === 'block'" :block="$root.selectedObject" />
    <CPropertyCylinderCaracteristics v-if="$root.selectedObject.type === 'cylinder'" :cylinder="$root.selectedObject" />
    <CPropertyRobotCaracteristics v-if="$root.selectedObject.type === 'robot'" :robot="$root.selectedObject" />
    <CPropertyRobotControl v-if="$root.selectedObject.type === 'robot'" :robot="$root.selectedObject" />
    <CPropertyRobotSensors v-if="$root.selectedObject.type === 'robot'" :robot="$root.selectedObject" />
  </div>
  <div v-else id="properties">
    <p class="empty-selection">Aucune sélection</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Robot } from "./../models/core/tangible-objects/movable-objects/robot";
import CPropertyInformation from "./property-information.vue";
import CPropertyPosition from "./property-position.vue";
import CPropertyBlockCaracteristics from "./property-block-caracteristics.vue";
import CPropertyCylinderCaracteristics from "./property-cylinder-caracteristics.vue";
import CPropertyRobotCaracteristics from "./property-robot-caracteristics.vue";
import CPropertyRobotControl from "./property-robot-control.vue";
import CPropertyRobotSensors from "./property-robot-sensors.vue";

@Options({
  components: {
    CPropertyInformation,
    CPropertyPosition,
    CPropertyBlockCaracteristics,
    CPropertyCylinderCaracteristics,
    CPropertyRobotCaracteristics,
    CPropertyRobotControl,
    CPropertyRobotSensors,
  },
})
export default class CProperties extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#properties {
  height: 100%;
  /*flex-shrink: 0;*/
  width: 300px;
  min-width: 300px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  overflow: auto;
}

.empty-selection {
  font-style: italic;
  text-align: center;
}
</style>

<style>
@import "../assets/css/field.css";
</style>
