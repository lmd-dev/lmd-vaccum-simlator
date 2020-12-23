import { TangibleObject } from "./tangible-object";
/**
 * Represents a movable object
 */
export class MovableObject extends TangibleObject {
    /**
     * Constructor
     * @param type Type of the object
     * @param name Name of the object
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(type, name, environment, parent = null) {
        super(type, name, environment, parent);
        this._lastIteration = null;
    }
    get lastIteration() { return this._lastIteration; }
    set lastIteration(v) { this._lastIteration = v; }
}
//# sourceMappingURL=movable-object.js.map