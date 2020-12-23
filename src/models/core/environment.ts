import { BasicObject } from "./basic-object";
import { TangibleObject } from "./tangible-object";
import { TangibleObjectFactory } from "./tangible-object-factory";

/**
 * Represents the simulation environment which contains all the objects (robot, obstacle, sensors)
 */
export class Environment
{
    /**
     * Name of the environment
     */
    private _name : string;
    public get name() : string { return this._name; }
    public set name(v : string) { this._name = v; }    
        
    /**
     * Objects present in this environment
     */
    private _objects: BasicObject[];
    public get objects(): BasicObject[] { return this._objects; }

    /**
     * Constructor
     */
    constructor()
    {
        this._name = "New environment";
        this._objects = new Array<BasicObject>();
    }

    addObject(type: string): BasicObject
    {
        try {
            const o = TangibleObjectFactory.create(type, this);
            this.objects.push(o);
            return o;
        }
        catch(e)
        {
            console.error(e);
            return null;
        }
    }
}