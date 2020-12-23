<template>
  <div class="environment-objects-list-item">
    <div
      class="environment-objects-list-item-title"
      :class="[object.type, { selected: object == $root.selectedObject }]"
      v-on:click="select"
    >
      {{ object.name }}
    </div>
    <div
      class="environment-objects-list-item-children"
      v-if="
        object.children.length > 0 ||
          (object.sensors && object.sensors.length > 0)
      "
    >
      <CEnvironmentObjectsListItem
        v-for="child in object.children.concat(object.sensors)"
        :key="child.name"
        :object="child"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { BasicObject } from "./../models/core/basic-object";
import { Robot } from "./../models/core/tangible-objects/movable-objects/robot";

@Options({
  components: {
    CEnvironmentObjectsListItem,
  },
  props: {
    object: BasicObject,
  },
  methods: {
    //Defines the given object as the selected one
    select: function() {
      this.$root.select(this.object);
    },
  },
})
export default class CEnvironmentObjectsListItem extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.environment-objects-list-item {
  margin-bottom: 6px;
}

.environment-objects-list-item-title {
  cursor: pointer;
  padding-left: 20px;
  box-sizing: border-box;
  background: left no-repeat;
  background-size: 15px;
}

.environment-objects-list-item-title.selected {
  font-weight: bold;
}

.environment-objects-list-item-title.block {
  background-image: url(../assets/img/block.svg);
}

.environment-objects-list-item-title.cylinder {
  background-image: url(../assets/img/cylinder.svg);
}

.environment-objects-list-item-title.robot {
  background-image: url(../assets/img/android.svg);
}

.environment-objects-list-item-title.compass,
.environment-objects-list-item-title.ultrasound {
  background-image: url(../assets/img/sensor.svg);
}

.environment-objects-list-item-children {
  margin-top: 6px;
  margin-left: 20px;
}
</style>
