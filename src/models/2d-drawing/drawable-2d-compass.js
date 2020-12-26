import { Compass } from "../core/sensors/compass";
/**
 * Drawable ultrasound sensor
 */
export class Drawable2DCompass extends Compass {
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
        context.restore();
    }
}
//# sourceMappingURL=drawable-2d-compass.js.map