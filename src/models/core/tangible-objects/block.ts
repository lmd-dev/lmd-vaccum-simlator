import { Vector3 } from "@/models/math/vector";
import { BasicObject } from "../basic-object";
import { Environment } from "../environment";
import { TangibleObject } from "../tangible-object";
import { TangibleObjectFactory } from "../tangible-object-factory";

/**
 * Represent a tangible bloc on the environment
 */
export class Block extends TangibleObject
{
    //Width of the bloc (mm)
    private _width : number;
    public get width() : number { return this._width; }
    public set width(v : number) { this._width = v; }

    //Height of the bloc (mm)
    private _height : number;
    public get height() : number { return this._height; }
    public set height(v : number) { this._height = v; }
    
    //Depth of the bloc (mm)
    private _depth : number;
    public get depth() : number { return this._depth; }
    public set depth(v : number) { this._depth = v; }
    
    /**
     * Constructor
     * @param name Name of the bloc 
     * @param environment Environment where the bloc is present
     * @param parent Parent object of the bloc
     */
    constructor(name: string, environment: Environment, parent: BasicObject = null)
    {
        super('block', name, environment, parent);

        this._width = 1000;
        this._height = 1000;
        this._depth = 1000;
    }

    /**
     * Updates the tangible path of the bloc
     */
    updateContour()
    {
        let contour = this.contour.last || this.contour.createPath();
        
        contour.clear();
    
        let point = new Vector3();
        point.copy(this.position);

        point.move(new Vector3(-this.width / 2, 0, -this.depth / 2));
        contour.addPoint(point);

        point.x += this.width;
        contour.addPoint(point);

        point.z += this.depth;
        contour.addPoint(point);

        point.x -= this.width;
        contour.addPoint(point);

        point.z -= this.depth;
        contour.addPoint(point);
    }
}