import { Ultrasound } from "../core/sensors/ultrasound";
/**
 * Drawable ultrasound sensor
 */
export class Drawable2DUltrasound extends Ultrasound {
    /**
     * Constructor
     * @param name Name of the object
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(name, environment, parent) {
        super(name, environment, parent);
    }
    /**
     * Drawing function of the sensor
     * @param context 2D rendering context to use
     */
    draw(context) {
        context.save();
        context.translate(this.position.x, this.position.z);
        context.rotate(this.rotation.y);
        context.beginPath();
        context.rotate(-this.horizontalAngle / 2);
        context.moveTo(this.minDistance, 0);
        context.lineTo(this.maxDistance, 0);
        context.arc(0, 0, this.maxDistance, 0, this.horizontalAngle);
        context.rotate(this.horizontalAngle);
        context.lineTo(this.minDistance, 0);
        context.fillStyle = "#4bd1ff";
        context.fill();
        context.restore();
    }
}
//# sourceMappingURL=drawable-2d-ultrasound.js.map