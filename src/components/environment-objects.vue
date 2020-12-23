<template>
  <div id="environment-objects">
    <h2>Environment</h2>
    <div>
      <span class="environment-object block" title="Add new block" v-on:click="addBlock"></span>
      <span class="environment-object cylinder" title="Add new cylinder" v-on:click="addCylinder"></span>
      <span class="environment-object robot" title="Add new robot" v-on:click="addRobot"></span>
    </div>
    <div id="environment-objects-list" v-if="environment">
      <CEnvironmentObjectsListItem
        v-for="object in environment.objects"
        :key="object.name"
        :object="object"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Environment } from "./../models/core/environment";
import CEnvironmentObjectsListItem from "./environment-objects-list-item.vue";

@Options({
  components: {
    CEnvironmentObjectsListItem,
  },
  data: function() {
    return {
      environment: (<any>this.$root).environment,
    };
  },
  methods: {
    //Adds a new block to the environment
    addBlock: function() { this.$root.addObject("block"); },

    //Adds a new cylinder to the environment
    addCylinder: function() { this.$root.addObject("cylinder"); },

    //Adds a new robot to the environment
    addRobot: function() { this.$root.addObject("robot"); },
  }
})
export default class CEnvironmentObjects extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#environment-objects {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.environment-object {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: center no-repeat;
  background-size: 30px;
  cursor: pointer;
}

.environment-object.block {
  background-image: url(../assets/img/block.svg);
}

.environment-object.cylinder {
  background-image: url(../assets/img/cylinder.svg);
}

.environment-object.robot {
  background-image: url(../assets/img/android.svg);
}

#environment-objects-list {
  height: 100%;
  border: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
}
</style>
