import { Vector3 } from "../math/vector";
/**
 * Represents a path used to defined the contour of an object or the trajectory of a robot
 */
export class Path {
    /**
     * Constructor
     */
    constructor() {
        this._points = new Array();
    }
    get points() { return this._points; }
    /**
     * Clears the list of points
     */
    clear() {
        this._points.length = 0;
    }
    /**
     * Adds a point at the end ot the list
     * @param point Point to add
     */
    addPoint(point) {
        let p = new Vector3();
        p.copy(point);
        this.points.push(p);
    }
}
//# sourceMappingURL=path.js.map