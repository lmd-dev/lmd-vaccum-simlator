import { Sensor } from "../sensor";
/**
 * Sensor emulating an ultrasound proximity sensor
 */
export class Ultrasound extends Sensor {
    /**
     * Constructor
     * @param name Name of the sensor
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(name, environment, parent) {
        super('ultrasound', name, environment, parent);
        this._minDistance = 20;
        this._maxDistance = 3000;
        this._horizontalAngle = (15.0 / 180.0) * Math.PI;
        this._verticalAngle = 0;
        this._lastDistance = Infinity;
    }
    get minDistance() { return this._minDistance; }
    set minDistance(v) { this._minDistance = v; }
    get maxDistance() { return this._maxDistance; }
    set maxDistance(v) { this._maxDistance = v; }
    get horizontalAngle() { return this._horizontalAngle; }
    set horizontalAngle(v) { this._horizontalAngle = v; }
    get verticalAngle() { return this._verticalAngle; }
    set verticalAngle(v) { this._verticalAngle = v; }
    get lastDistance() { return this._lastDistance; }
    /**
     * Returns the distance with the nearest object of the environment
     * @returns Value in mm
     */
    measureDistance() {
        this._lastDistance = Infinity;
        return this._lastDistance;
    }
}
//# sourceMappingURL=ultrasound.js.map