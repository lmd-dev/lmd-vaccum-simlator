import { BasicObject } from "./basic-object";
/**
 * All sensors inherit from Sensor class
 */
export class Sensor extends BasicObject {
    /**
     * Constructor
     * @param type Type of the sensor
     * @param name Name of the sensor
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(type, name, environment, parent) {
        super(type, name, environment, parent);
    }
}
//# sourceMappingURL=sensor.js.map