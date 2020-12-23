import { BasicObject } from "../basic-object";
import { Environment } from "../environment";
import { Sensor } from "../sensor";

/**
 * Sensor emulating a compass
 */
export class Compass extends Sensor
{
    //Last direction measured by the compass (default 0)
    private _lastDirection : number;
    public get lastDirection() : number { return this._lastDirection; }
    
    /**
     * Constructor
     * @param name Name of the sensor 
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(name: string, environment: Environment, parent: BasicObject)
    {
        super('compass', name, environment, parent);

        this._lastDirection = 0;
    }

    /**
     * Returns the direction from the north measured by the compass (angle in radians)
     */
    measureDirection(): number
    {
        this._lastDirection = this.absoluteRotation.y;

        return this.lastDirection;
    }
}