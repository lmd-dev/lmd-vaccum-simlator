import { Path } from "./path";

/**
 * Manages paths and all associates features
 */
export class PathsManager
{
    //Managed paths
    private _paths : Path[];
    public get paths() : Path[] { return this._paths; }
    
    /**
     * Constructor
     */
    constructor()
    {
        this._paths = new Array<Path>();
    }
}