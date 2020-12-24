import { Path } from "./path";

export class PathsManager
{
    private _paths : Path[];
    public get paths() : Path[] { return this._paths; }
    
    constructor()
    {
        this._paths = new Array<Path>();
    }
}