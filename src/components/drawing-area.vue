<template>
  <div id="drawing-area">
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { Ultrasound } from "@/models/core/sensors/ultrasound";
import { Options, Vue } from "vue-class-component";
import { IDrawable2DObject} from './../models/2d-drawing/i-drawable-2d-object';

@Options({
  data: function () {
    return {
      canvas: null,
      ctx: null,
    };
  },
  mounted: function () {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.initializeEvents();
    this.resize();
    this.loop();
  },
  methods: {
    //Initializes main events of the view
    initializeEvents() {
      window.addEventListener("resize", () => {
        this.resize();
      });
    },
    //Drawing loop function
    loop() {
      this.draw();
      setTimeout(() => {
        this.loop();
      }, 30);
    },
    //Resizes the canvas 
    resize() {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;

      this.draw();
    },
    //Draws the environment 
    draw() {
      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.save();
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.scale(0.5, 0.5);

      this.ctx.fillStyle = "#d4d4d4";
      this.ctx.strokeStyle = '#333';
      
      this.$root.environment.objects.forEach(item => {
        if(item.draw)
        {
          item.draw(this.ctx);
        }
      });

      this.ctx.restore();
    },
  },
})
export default class CDrawingArea extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#drawing-area {  
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #EDEDED;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
