<template>
  <div v-if="$root.selectedObject" id="properties">
    <CPropertyInformation />
    <CPropertyPosition :object="$root.selectedObject" />
    <CPropertyCaracteristicsBlock v-if="$root.selectedObject.type === 'block'" :block="$root.selectedObject" />
    <CPropertyCaracteristicsCylinder v-if="$root.selectedObject.type === 'cylinder'" :cylinder="$root.selectedObject" />
    <CPropertyCaracteristicsRobot v-if="$root.selectedObject.type === 'robot'" :robot="$root.selectedObject" />
    <CPropertyControlRobot v-if="$root.selectedObject.type === 'robot'" :robot="$root.selectedObject" />
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
import CPropertyCaracteristicsBlock from "./property-caracteristics-block.vue";
import CPropertyCaracteristicsCylinder from "./property-caracteristics-cylinder.vue";
import CPropertyCaracteristicsRobot from "./property-caracteristics-robot.vue";
import CPropertyControlRobot from "./property-control-robot.vue";

@Options({
  components: {
    CPropertyInformation,
    CPropertyPosition,
    CPropertyCaracteristicsBlock,
    CPropertyCaracteristicsCylinder,
    CPropertyCaracteristicsRobot,
    CPropertyControlRobot,
  },
})
export default class CProperties extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#properties {
  height: 100%;
  flex-shrink: 0;
  width: 300px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.empty-selection {
  font-style: italic;
  text-align: center;
}
</style>

<style>
@import "../assets/css/field.css";
</style>
