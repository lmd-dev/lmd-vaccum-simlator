import { PathsManager } from './paths-manager';

/**
 * Virtual map of the environment constructed by the robot from its sensors
 */
export abstract class Map
{    
    private _path : PathsManager;
    public get path() : PathsManager { return this._path; }
 
    private _cleanedArea : PathsManager;
    public get cleanedArea() : PathsManager { return this._cleanedArea; }

    private _obstacles : PathsManager;
    public get obstacles() : PathsManager { return this._obstacles; }
       
    /**
     * Cosntructor
     */
    constructor()
    {
        this._path = new PathsManager();
        this._cleanedArea = new PathsManager();
        this._obstacles = new PathsManager();
    }
}