import { BasicObject } from "./basic-object";
import { Environment } from "./environment";
import { TangibleObject } from "./tangible-object";

/**
 * Represents a movable object
 */
export abstract class MovableObject extends TangibleObject
{
    //Time when the last loop has been realised
    private _lastIteration : DOMHighResTimeStamp | null;
    protected get lastIteration() : DOMHighResTimeStamp | null { return this._lastIteration; }
    protected set lastIteration(v : DOMHighResTimeStamp) { this._lastIteration = v; }
    
    /**
     * Constructor
     * @param type Type of the object 
     * @param name Name of the object
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(type: string, name: string, environment: Environment, parent: BasicObject = null)
    {
        super(type, name, environment, parent);

        this._lastIteration = null;
    }

    /**
     * Loop function used to animate the object
     */
    abstract loop();

    /**
     * Updates the position of the movable object
     */
    abstract updatePosition(elapsedTime: number);
}