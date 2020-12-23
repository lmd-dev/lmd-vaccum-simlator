import { BasicObject } from './basic-object';
import { Environment } from './environment';
import { Path } from './path';

/**
 * Represents a tangible object
 */
export abstract class TangibleObject extends BasicObject
{
    /**
     * Paths used to detect collisions with other tangible object
     */
    private _paths : Path[];
    public get paths() : Path[] { return this._paths; }
    
    /**
     * Constructor
     * @param type Type of the object 
     * @param name Name of the object
     * @param environment Environment where the object evovle
     * @param parent Parent object
     */
    constructor(type: string, name: string, environment: Environment, parent: BasicObject)
    {
        super(type, name, environment, parent);

        this._paths = new Array<Path>();
    }

    /**
     * Updates the object
     */
    update()
    {
        this.updatePath();
    }

    /**
     * Updates paths of the object
     */
    abstract updatePath();
}