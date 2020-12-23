import { BasicObject } from './basic-object';
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
        this._paths = new Array();
    }
    get paths() { return this._paths; }
    /**
     * Updates the object
     */
    update() {
        this.updatePath();
    }
}
//# sourceMappingURL=tangible-object.js.map