import { Path } from "./path";

/**
 * Manages paths and all associates features
 */
export class PathsManager
{
    //Managed paths
    private _paths : Path[];
    public get paths() : Path[] { return this._paths; }
    
    public get last() : Path { return this.paths.length ? this.paths[this.paths.length - 1] : null; }
    
    /**
     * Constructor
     */
    constructor()
    {
        this._paths = new Array<Path>();
    }

    /**
     * Adds a new path to the collection
     * @returns the created path
     */
    createPath(): Path
    {
        let path = new Path();

        this.paths.push(path);

        return path;
    }
}