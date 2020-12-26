import { Drawable2DCompass } from "./drawable-2d-compass";
import { Drawable2DUltrasound } from "./drawable-2d-ultrasound";
import { SensorFactory } from './../core/sensor-factory';
/**
 * 2D Drawable sensors factory
 */
export class Drawable2DSensorFactory extends SensorFactory {
    /**
     * Constructor
     */
    constructor() {
        super();
    }
    /**
     * Creates a 2d drawable sensor from its type name
     * @param type Type of the sensor to create
     * @param environment Environment where the sensor will envolve
     * @param parent Parent of the sensor
     */
    create(type, environment, parent) {
        switch (type) {
            case 'compass':
                return new Drawable2DCompass("Compass", environment, parent);
                break;
            case 'ultrasound':
                return new Drawable2DUltrasound("Ultrasound", environment, parent);
                break;
            default: throw `Unknown sensor type '${type}'.`;
        }
    }
}
//# sourceMappingURL=drawable-2d-sensor-factory.js.map