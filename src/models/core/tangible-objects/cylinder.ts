import { BasicObject } from "../basic-object";
import { Environment } from "../environment";
import { TangibleObject } from "../tangible-object";

/**
 * Represent a tangible cylinder on the environment
 */
export class Cylinder extends TangibleObject
{
    //Diameter of the cylinder (mm)
    private _diameter : number;
    public get diameter() : number { return this._diameter; }
    public set diameter(v : number) { this._diameter = v; }
    
    //Height of the cylinder (mm)
    private _height : number;
    public get height() : number { return this._height; }
    public set height(v : number) { this._height = v; }
    
    /**
     * Constructor
     * @param name Name of the bloc 
     * @param environment Environment where the bloc is present
     * @param parent Parent object of the bloc
     */
    constructor(name: string, environment: Environment, parent: BasicObject = null)
    {
        super('cylinder', name, environment, parent);

        this.diameter = 1000;
        this.height = 1000;
    }

    /**
     * Updates tangible path of the cylinder
     */
    updatePath()
    {

    }
}