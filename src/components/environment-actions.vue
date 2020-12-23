<template>
<div id="environment-actions">
    <span class="environment-action new" title="New environment"></span>
    <span class="environment-action load" title="Open existing environment"></span>
    <span class="environment-action save" title="Save current environment"></span>
</div>
<hr> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class CEnvironmentActions extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#environment-actions {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.environment-action {
    width: 50px;
    height: 50px;
    margin-right: 30px;
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
}

.environment-action:last-child{
    margin-right: 0;

}

.environment-action.new {
    background-image: url(../assets/img/new.svg)
}

.environment-action.load {
    background-image: url(../assets/img/load.svg)
}

.environment-action.save {
    background-image: url(../assets/img/save.svg)
}
</style>