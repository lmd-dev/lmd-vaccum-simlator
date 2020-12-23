<template>
  <div id="drawing-area">
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Block } from "./../models/core/tangible-objects/block";
import { Cylinder } from "./../models/core/tangible-objects/cylinder";
import { Robot } from "./../models/core/tangible-objects/movable-objects/robot";

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

      this.$root.environment.objects.forEach(item => {
        if(item instanceof Robot)
        {
          this.drawRobot(item);
        }
        else if(item instanceof Block)
        {
          this.drawBlock(item);
        }
        else if(item instanceof Cylinder)
        {
          this.drawCylinder(item);
        }
      });

      this.ctx.restore();
    },
    //Draws a block
    drawBlock(block: Block) {
      this.ctx.save();
      this.ctx.translate(block.position.x, block.position.z);
      this.ctx.rotate(-block.rotation.y);

      this.ctx.beginPath();
      this.ctx.rect(-block.width / 2, -block.depth / 2, block.width, block.depth);

      this.ctx.fillStyle = "#D4D4D4";
      this.ctx.fill();

      this.ctx.strokeStyle = "#000"
      this.ctx.stroke();

      this.ctx.restore();
    },
    //Draws a cylinder
    drawCylinder(cylinder: Cylinder) {
      this.ctx.save();
      this.ctx.translate(cylinder.position.x, cylinder.position.z);
      this.ctx.rotate(-cylinder.rotation.y);

      this.ctx.beginPath();
      this.ctx.arc(0, 0, cylinder.diameter / 2, 0, Math.PI * 2);
      
      this.ctx.fillStyle = "#D4D4D4";
      this.ctx.fill();

      this.ctx.strokeStyle = "#000"
      this.ctx.stroke();

      this.ctx.restore();
    },
    //Draws a robot
    drawRobot(robot: Robot) {
      this.ctx.save();
      this.ctx.translate(robot.position.x, robot.position.z);
      this.ctx.rotate(-robot.rotation.y);

      this.ctx.beginPath();
      this.ctx.arc(0, 0, robot.diameter / 2, 0, Math.PI * 2);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0 + robot.diameter / 2, 0);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();

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
