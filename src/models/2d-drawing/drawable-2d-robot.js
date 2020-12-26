import { Robot } from "../core/tangible-objects/movable-objects/robot";
/**
 * Drawable robot
 */
export class Drawable2DRobot extends Robot {
    /**
     * Constructor
     * @param name Name of the object
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(name, environment) {
        super(name, environment);
    }
    /**
     * Drawing function of the robot
     * @param context 2D rendering context to use
     */
    draw(context) {
        context.save();
        context.translate(this.position.x, this.position.z);
        context.rotate(-this.rotation.y);
        context.fillStyle = "#ef484b";
        context.beginPath();
        context.arc(0, 0, this.diameter / 2, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.beginPath();
        context.arc(this.diameter / 2 - 20, 0, 5, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        this.sensors.forEach((sensor) => {
            if (sensor.draw)
                sensor.draw(context);
        });
        context.restore();
    }
}
//# sourceMappingURL=drawable-2d-robot.js.map