import { TangibleObjectFactory } from "./tangible-object-factory";
/**
 * Represents the simulation environment which contains all the objects (robot, obstacle, sensors)
 */
export class Environment {
    /**
     * Constructor
     */
    constructor() {
        this._name = "New environment";
        this._objects = new Array();
    }
    get name() { return this._name; }
    set name(v) { this._name = v; }
    get objects() { return this._objects; }
    addObject(type) {
        try {
            const o = TangibleObjectFactory.create(type, this);
            this.objects.push(o);
            return o;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
}
//# sourceMappingURL=environment.js.map