import { BasicObject } from "./basic-object";
import { SensorFactory } from "./sensor-factory";
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
     * Factory used to create tangible objects
     */
    private readonly _tangibleObjectFactory : TangibleObjectFactory;
    public get tangibleObjectFactory() : TangibleObjectFactory { return this._tangibleObjectFactory; }

    /**
     * Factory used to create sensors
     */
    private readonly _sensorFactory : SensorFactory;
    public get sensorFactory() : SensorFactory { return this._sensorFactory; }
    

    /**
     * Constructor
     */
    constructor(tangibleObjectFactory: TangibleObjectFactory, sensorFactory: SensorFactory)
    {
        this._name = "New environment";
        this._objects = new Array<BasicObject>();
        this._tangibleObjectFactory = tangibleObjectFactory;
        this._sensorFactory = sensorFactory;
    }

    addObject(type: string): BasicObject
    {
        try {
            const o = this.tangibleObjectFactory.create(type, this);
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