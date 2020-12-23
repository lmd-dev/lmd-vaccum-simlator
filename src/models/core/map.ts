import { Path } from './path';

/**
 * Virtual map of the environment constructed by the robot from its sensors
 */
export abstract class Map
{
    //Paths constituing the map
    private _paths : Path[];
    public get paths() : Path[] { return this._paths; }
    
    /**
     * Cosntructor
     */
    constructor()
    {
        this._paths = new Array<Path>();
    }
}