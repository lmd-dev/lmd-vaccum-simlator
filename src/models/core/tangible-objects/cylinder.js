import { TangibleObject } from "../tangible-object";
/**
 * Represent a tangible cylinder on the environment
 */
export class Cylinder extends TangibleObject {
    /**
     * Constructor
     * @param name Name of the bloc
     * @param environment Environment where the bloc is present
     * @param parent Parent object of the bloc
     */
    constructor(name, environment, parent = null) {
        super('cylinder', name, environment, parent);
        this.diameter = 1000;
        this.height = 1000;
    }
    get diameter() { return this._diameter; }
    set diameter(v) { this._diameter = v; }
    get height() { return this._height; }
    set height(v) { this._height = v; }
    /**
     * Updates tangible path of the cylinder
     */
    updateContour() {
    }
}
//# sourceMappingURL=cylinder.js.map