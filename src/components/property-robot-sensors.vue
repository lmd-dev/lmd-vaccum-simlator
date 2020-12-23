<template>
  <div class="property-panel" v-if="robot !== undefined">
    <h2>Sensors</h2>
    <div id="sensors-actions">
      <select id="cb-sensor-type">
        <option value="compass">Compass</option>
        <option value="ultrasound">Ultrasound</option>
      </select>
      <button class="add" v-on:click="addSensor">+</button>
    </div>
    <div v-for="sensor in robot.sensors" :key="sensor.name">
      <CSensorCompass v-if="sensor.type == 'compass'" :compass="sensor" />
      <CSensorUltrasound v-else-if="sensor.type == 'ultrasound'" :ultrasound="sensor" />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Robot } from "./../models/core/tangible-objects/movable-objects/robot";
import CSensorCompass from "./sensor-compass.vue";
import CSensorUltrasound from "./sensor-ultrasound.vue";

@Options({
  components: {
    CSensorCompass,
    CSensorUltrasound,
  },
  props: {
    robot: Robot,
  },
  methods: {
    addSensor: function()
    {
      let sensorType = (<HTMLInputElement>document.querySelector('#cb-sensor-type')).value;

      this.robot.addSensor(sensorType);
    }
  },
})
export default class CPropertyRobotSensors extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sensors-actions{
  display: flex;
}

#cb-sensor-type {
  width: 100%;
  margin-right: 10px;
}

#sensors-list {
  padding: 10px;
  border: 1px solid #000;
  box-sizing: border-box;
  height: 400px;
  margin-top: 10px;
}
</style>
