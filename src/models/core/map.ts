import { PathsManager } from './paths-manager';

/**
 * Virtual map of the environment constructed by the robot from its sensors
 */
export abstract class Map
{    
    //Path travelled by the robot
    private _path : PathsManager;
    public get path() : PathsManager { return this._path; }
 
    //Area cleaned by the robot
    private _cleanedArea : PathsManager;
    public get cleanedArea() : PathsManager { return this._cleanedArea; }

    //Contours of the obstacles detected by the sensors of the robot
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