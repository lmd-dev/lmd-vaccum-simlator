import { Vector3 } from "../math/vector";

/**
 * Represents a path used to defined the contour of an object or the trajectory of a robot
 */
export class Path
{
    //Points of the path
    private _points : Vector3[];
    public get points() : Vector3[] { return this._points; }
        
    /**
     * Constructor
     */
    constructor()
    {
        this._points = new Array<Vector3>();
    }

    /**
     * Clears the list of points
     */
    clear()
    {
        this._points.length = 0;
    }

    /**
     * Adds a point at the end ot the list
     * @param point Point to add
     */
    addPoint(point: Vector3)
    {
        let p = new Vector3();
        p.copy(point);
        this.points.push(p);
    }
}