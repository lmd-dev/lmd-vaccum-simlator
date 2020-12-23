<template>
<div class="property-panel">
    <h2>Information</h2>
    <div class="field">
        <label>Type</label>
        <input type="text" readonly v-model="$root.selectedObject.type" />
    </div>
    <div class="field">
        <label>Name</label>
        <input type="text" v-model="$root.selectedObject.name" />
    </div>
    <hr>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
    }
})
export default class CPropertyInformation extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>