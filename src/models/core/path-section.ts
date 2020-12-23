import { Vector3 } from "../math/vector";

/**
 * Represents a section of a path
 */
export class PathSection
{
    /**
     * Start coordinates of the section
     */
    private _start: Vector3;
    public get start(): Vector3 { return this._start; }

    /**
     * End coordinates of the section
     */
    private _end: Vector3;
    public get end(): Vector3 { return this._end; }

    /**
     * Constructor
     * @param start Start coordinates of the section 
     * @param end End coodinates of the section
     */
    constructor(start: Vector3 = null, end: Vector3 = null)
    {
        this._start = new Vector3();
        this._end = new Vector3();

        if (start)
            this._start.copy(start);

        if (end)
            this._end.copy(end);
    }
}