import { BasicObject } from "../basic-object";
import { Environment } from "../environment";
import { Sensor } from "../sensor";

/**
 * Sensor emulating an ultrasound proximity sensor
 */
export class Ultrasound extends Sensor
{
    //Minimum measurable distance
    private _minDistance : number;
    public get minDistance() : number { return this._minDistance; }
    public set minDistance(v : number) { this._minDistance = v; }
    
    //Maximum measurable distance
    private _maxDistance : number;
    public get maxDistance() : number { return this._maxDistance; }
    public set maxDistance(v : number) { this._maxDistance = v; }
    
    //Horizontal spread angle
    private _horizontalAngle : number;
    public get horizontalAngle() : number { return this._horizontalAngle; }
    public set horizontalAngle(v : number) { this._horizontalAngle = v; }

    //Vertical spread angle
    private _verticalAngle : number;
    public get verticalAngle() : number { return this._verticalAngle; }
    public set verticalAngle(v : number) { this._verticalAngle = v; }

    //Last measured distance (mm, default infinity)
    private _lastDistance : number;
    public get lastDistance() : number { return this._lastDistance; }
    
    /**
     * Constructor
     * @param name Name of the sensor 
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(name: string, environment: Environment, parent: BasicObject)
    {
        super('ultrasound', name, environment, parent);

        this._minDistance = 20;
        this._maxDistance = 3000;
        this._horizontalAngle = (15.0 / 180.0) * Math.PI;
        this._verticalAngle = 0;
        this._lastDistance = Infinity;
    }

    /**
     * Returns the distance with the nearest object of the environment
     * @returns Value in mm
     */
    measureDistance(): number
    {
        this._lastDistance = Infinity;

        return this._lastDistance;
    }
}