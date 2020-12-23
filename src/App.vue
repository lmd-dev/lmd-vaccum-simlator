<template>
  <CTopBar />
  <CContent :environment="environment" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CTopBar from './components/top-bar.vue';
import CContent from './components/content.vue';
import { BasicObject } from './models/core/basic-object';
import { Environment } from './models/core/environment';
import { Robot } from './models/core/tangible-objects/movable-objects/robot';

@Options({
  components: {
    CTopBar,
    CContent
  },
  data: function()
  {
    return {
      environment: new Environment(),
      selectedObject: null,
    }
  },
  methods: {
    //Defines the given object as the selected one
    select: function(object: BasicObject)
    {
      this.selectedObject = object;
    },
    //Add a new object of the given type to the environment
    addObject: function(type: string){
      this.selectedObject = this.environment.addObject(type) ?? this.selectedObject;
    }
  }
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/css/font-roboto.css";

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  font-size: 12px;
  font-family: Roboto, sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size:14px;
  font-weight: bold; 
  text-transform: uppercase;
  margin-top: 0;
}

h3 {
  font-size:12px;
  font-weight: bold; 
  text-transform: uppercase;
}

hr {
  height: 1px;
  border: none;
  background: #D4D4D4;
  margin: 20px 0 20px 0;
}

input, select {
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #aaa;
}

input[readonly] {
  background-color: #EEE;
}

input[type="number"]
{
  text-align: right;
}
</style>