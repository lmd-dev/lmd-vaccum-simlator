import { BasicObject } from './basic-object';
import { PathsManager } from './paths-manager';
/**
 * Represents a tangible object
 */
export class TangibleObject extends BasicObject {
    /**
     * Constructor
     * @param type Type of the object
     * @param name Name of the object
     * @param environment Environment where the object evovle
     * @param parent Parent object
     */
    constructor(type, name, environment, parent) {
        super(type, name, environment, parent);
        this._contour = new PathsManager;
    }
    get contour() { return this._contour; }
    /**
     * Updates the object
     */
    update() {
        this.updateContour();
    }
}
//# sourceMappingURL=tangible-object.js.map