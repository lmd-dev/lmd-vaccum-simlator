<template>
  <div class="property-panel" v-if="robot !== undefined">
    <h2>Control</h2>
    <div class="control-buttons">
      <span class="control-button forward" v-on:click="moveForward"></span>
    </div>
    <div class="control-buttons">
      <span class="control-button left" v-on:click="turnLeft"></span>
      <span class="control-button stop" v-on:click="stop"></span>
      <span class="control-button right" v-on:click="turnRight"></span>
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
  methods: {
    //Asks the robot to move forward
    moveForward: function() {
      this.robot?.moveForward();
    },
    //Asks the robot to turn to the left
    turnLeft: function() {
      this.robot?.turnLeft();
    },
    //Asks the robot to turn to the right
    turnRight: function() {
      this.robot?.turnRight();
    },
    //Asks the robot to stop
    stop: function() {
      this.robot?.stop();
    },
    //Processes keypress events
    processKeyPressEvent: function(event) {
      if (event.keyCode === 56) this.moveForward();
      else if (event.keyCode === 52) this.turnLeft();
      else if (event.keyCode === 54) this.turnRight();
      else if (event.keyCode === 53) this.stop();
    },
  },
  mounted: function() {
    //Store the keyPressEvent handler to remove it when the component will be destroyed
    this._keyPressEvent = this.processKeyPressEvent.bind(this);
    window.addEventListener("keypress", this._keyPressEvent);
  },
  beforeUnmount: function() {
    //Remove the keepress event listener of window
    window.removeEventListener("keypress", this._keyPressEvent);
    this._keyPressEvent = null;
  },
})
export default class CPropertyRobotControl extends Vue {
  //Event handler associated with the keepress event ilstener of window. Needed to remove it when the component is destroyed 
  private _keyPressEvent : unknown;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.control-buttons:last-child {
  margin-bottom: 0;
}

.control-button {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  margin-right: 20px;
  cursor: pointer;
  background: no-repeat center;
  background-size: 20px;
}

.control-button:last-child {
  margin-right: 0;
}

.control-button.forward {
  background-image: url(../assets/img/forward.svg);
}

.control-button.left {
  background-image: url(../assets/img/left.svg);
}

.control-button.right {
  background-image: url(../assets/img/right.svg);
}

.control-button.stop {
  background-image: url(../assets/img/stop.svg);
}
</style>
