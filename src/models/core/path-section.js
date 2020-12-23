import { Vector3 } from "../math/vector";
/**
 * Represents a section of a path
 */
export class PathSection {
    /**
     * Constructor
     * @param start Start coordinates of the section
     * @param end End coodinates of the section
     */
    constructor(start = null, end = null) {
        this._start = new Vector3();
        this._end = new Vector3();
        if (start)
            this._start.copy(start);
        if (end)
            this._end.copy(end);
    }
    get start() { return this._start; }
    get end() { return this._end; }
}
//# sourceMappingURL=path-section.js.map