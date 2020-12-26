/**
 * Represents the simulation environment which contains all the objects (robot, obstacle, sensors)
 */
export class Environment {
    /**
     * Constructor
     */
    constructor(tangibleObjectFactory, sensorFactory) {
        this._name = "New environment";
        this._objects = new Array();
        this._tangibleObjectFactory = tangibleObjectFactory;
        this._sensorFactory = sensorFactory;
    }
    get name() { return this._name; }
    set name(v) { this._name = v; }
    get objects() { return this._objects; }
    get tangibleObjectFactory() { return this._tangibleObjectFactory; }
    get sensorFactory() { return this._sensorFactory; }
    addObject(type) {
        try {
            const o = this.tangibleObjectFactory.create(type, this);
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