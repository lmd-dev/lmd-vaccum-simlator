import { BasicObject } from "../core/basic-object";
import { Environment } from "../core/environment"
import { Cylinder } from "../core/tangible-objects/cylinder";
import { IDrawable2DObject } from "./i-drawable-2d-object";

/**
 * Drawable cylinder
 */
export class Drawable2DCylinder extends Cylinder implements IDrawable2DObject
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
     * Drawing function of the cylinder
     * @param context 2D rendering context to use
     */
    draw(context: CanvasRenderingContext2D)
    {
        context.save();

        context.translate(this.position.x, this.position.z);
        context.rotate(this.rotation.y);

        context.beginPath();
        context.arc(0, 0, this.diameter / 2, 0, Math.PI * 2);
        context.fill();
        context.stroke();

        //Drawing of the contour
        context.beginPath();
        context.strokeStyle = "blue";
        this.contour.last?.points.forEach((point, index) => {
            if(index == 0)
                context.moveTo(point.x - this.position.x, point.z - this.position.z);
            else
                context.lineTo(point.x - this.position.x, point.z - this.position.z);
        });
        context.stroke();

        context.restore();
    }
}