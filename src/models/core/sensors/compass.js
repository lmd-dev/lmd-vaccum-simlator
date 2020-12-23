import { Sensor } from "../sensor";
/**
 * Sensor emulating a compass
 */
export class Compass extends Sensor {
    /**
     * Constructor
     * @param name Name of the sensor
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(name, environment, parent) {
        super('compass', name, environment, parent);
        this._lastDirection = 0;
    }
    get lastDirection() { return this._lastDirection; }
    /**
     * Returns the direction from the north measured by the compass (angle in radians)
     */
    measureDirection() {
        this._lastDirection = this.absoluteRotation.y;
        return this.lastDirection;
    }
}
//# sourceMappingURL=compass.js.map