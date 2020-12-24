import { Vector3 } from "../math/vector";

/**
 * Represents a path of an object. Used to detect collision between tangible objects
 */
export class Path
{
    private _points : Vector3[];
    public get points() : Vector3[] { return this._points; }
        
    /**
     * Constructor
     */
    constructor()
    {
        this._points = new Array<Vector3>();
    }
}