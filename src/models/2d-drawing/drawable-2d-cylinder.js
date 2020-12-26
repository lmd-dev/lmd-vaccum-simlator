import { Cylinder } from "../core/tangible-objects/cylinder";
/**
 * Drawable cylinder
 */
export class Drawable2DCylinder extends Cylinder {
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
     * Drawing function of the cylinder
     * @param context 2D rendering context to use
     */
    draw(context) {
        context.save();
        context.translate(this.position.x, this.position.z);
        context.rotate(this.rotation.y);
        context.beginPath();
        context.arc(0, 0, this.diameter / 2, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.restore();
    }
}
//# sourceMappingURL=drawable-2d-cylinder.js.map