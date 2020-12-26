import { BasicObject } from "../core/basic-object";
import { Environment } from "../core/environment"
import { Robot } from "../core/tangible-objects/movable-objects/robot";
import { IDrawable2DObject } from "./i-drawable-2d-object";

/**
 * Drawable robot
 */
export class Drawable2DRobot extends Robot implements IDrawable2DObject
{
    /**
     * Constructor
     * @param name Name of the object 
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(name: string, environment: Environment)
    {
        super(name, environment);
    }

    /**
     * Drawing function of the robot
     * @param context 2D rendering context to use
     */
    draw(context: CanvasRenderingContext2D)
    {
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
        
        this.sensors.forEach((sensor: any) => {
            if(sensor.draw)
                sensor.draw(context);
        });

        //Drawing of the contour
        context.beginPath();
        context.strokeStyle = "blue";
        context.lineWidth = 3;
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