import { BasicObject } from './basic-object';
import { Environment } from './environment';
import { PathsManager } from './paths-manager';

/**
 * Represents a tangible object
 */
export abstract class TangibleObject extends BasicObject
{
    /**
     * Contour of the tangilble object, used to detect collisions with other tangible objects
     */
    private _contour : PathsManager;
    public get contour() : PathsManager { return this._contour; }
    
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

        this._contour = new PathsManager;

        this.update();
    }

    /**
     * Updates the object
     */
    update()
    {
        this.updateContour();
    }

    /**
     * Updates contour of the object
     */
    abstract updateContour();
}