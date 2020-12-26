import { BasicObject } from "../core/basic-object";
import { Environment } from "../core/environment"
import { Block } from "../core/tangible-objects/block"
import { IDrawable2DObject } from "./i-drawable-2d-object";

/**
 * Drawable block
 */
export class Drawable2DBlock extends Block implements IDrawable2DObject
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
     * Drawing function of the block
     * @param context 2D rendering context to use
     */
    draw(context: CanvasRenderingContext2D)
    {
        context.save();

        context.translate(this.position.x, this.position.z);
        context.rotate(this.rotation.y);

        context.beginPath();
        context.rect(-this.width / 2, -this.depth / 2, this.width, this.depth);
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