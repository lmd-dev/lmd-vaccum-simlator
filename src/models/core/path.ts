import { PathSection } from "./path-section";

/**
 * Represents a path of an object. Used to detect collision between tangible objects
 */
export class Path
{
    /**
     * Linear sections of the path
     */
    private _items : PathSection[];
    public get items() : PathSection[] { return this._items; }
    
    /**
     * Constructor
     */
    constructor()
    {
        this._items = new Array<PathSection>();
    }
}