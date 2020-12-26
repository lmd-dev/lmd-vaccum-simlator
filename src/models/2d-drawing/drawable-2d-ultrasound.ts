import { BasicObject } from "../core/basic-object";
import { Environment } from "../core/environment"
import { Ultrasound } from "../core/sensors/ultrasound";
import { IDrawable2DObject } from "./i-drawable-2d-object";

/**
 * Drawable ultrasound sensor
 */
export class Drawable2DUltrasound extends Ultrasound implements IDrawable2DObject
{
    /**
     * Constructor
     * @param name Name of the object 
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(name: string, environment: Environment, parent: BasicObject)
    {
        super(name, environment, parent);
    }

    /**
     * Drawing function of the sensor
     * @param context 2D rendering context to use
     */
    draw(context: CanvasRenderingContext2D)
    {
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