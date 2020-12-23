import { __decorate } from "tslib";
import { Vector3 } from "../math/vector";
import { Serialize, serializable } from "../serialize/serialize";
/**
 * The BasicObject underlie all other objects of the environment
 */
export class BasicObject extends Serialize {
    /**
     * Constructor
     * @param type Type of the object
     * @param name Name of the object
     * @param environment Environment where the objet evolve
     * @param parent Parent of the object
     */
    constructor(type, name, environment, parent = null) {
        super();
        this._type = type;
        this._name = name;
        this._parent = parent;
        this._children = new Array();
        this._environment = environment;
        this._position = new Vector3();
        this._rotation = new Vector3();
    }
    get type() { return this._type; }
    get name() { return this._name; }
    set name(v) { this._name = v; }
    get parent() { return this._parent; }
    set parent(v) { this._parent = v; }
    get children() { return this._children; }
    get environment() { return this._environment; }
    get position() { return this._position; }
    get rotation() { return this._rotation; }
    //Returns the absolute position of the object
    get absolutePosition() {
        let absolutePosition = new Vector3();
        absolutePosition.copy(this.rotation);
        if (this.parent)
            absolutePosition.move(this.parent.absolutePosition);
        return absolutePosition;
    }
    //returns the absolute rotation angles of the object
    get absoluteRotation() {
        let absoluteRotation = new Vector3();
        absoluteRotation.copy(this.rotation);
        if (this.parent)
            absoluteRotation.move(this.parent.absoluteRotation);
        return absoluteRotation;
    }
}
__decorate([
    serializable()
], BasicObject.prototype, "_type", void 0);
__decorate([
    serializable()
], BasicObject.prototype, "_name", void 0);
__decorate([
    serializable(BasicObject, { list: true })
], BasicObject.prototype, "_children", void 0);
__decorate([
    serializable(Vector3)
], BasicObject.prototype, "_position", void 0);
__decorate([
    serializable(Vector3)
], BasicObject.prototype, "_rotation", void 0);
//# sourceMappingURL=basic-object.js.map