<template>
  <div class="property-panel" id="property-position">
    <div>
      <div>
        <h2>Position</h2>
        <div class="field">
          <label>X</label>
          <input type="number" v-model.number="object.position.x" />
        </div>
        <div class="field">
          <label>Y</label>
          <input type="number" v-model.number="object.position.y" />
        </div>
        <div class="field">
          <label>Z</label>
          <input type="number" v-model.number="object.position.z" />
        </div>
      </div>
      <div>
        <h2>Rotation</h2>
        <div class="field">
          <label>X</label>
          <input type="number" v-model.number="object.rotation.x" />
        </div>
        <div class="field">
          <label>Y</label>
          <input type="number" v-model.number="object.rotation.y" />
        </div>
        <div class="field">
          <label>Z</label>
          <input type="number" v-model.number="object.rotation.z" />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { BasicObject } from "./../models/core/basic-object";

@Options({
  props: {
    object: BasicObject,
  }
})
export default class CPropertyPosition extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#property-position > div {
  display: flex;
}

#property-position > div > div {
  width: 100%;
  margin-right: 20px;
}

#property-position > div > div:last-child {
  margin-right: 0;
}

#property-position .field label {
  width: 20px;
}
</style>
