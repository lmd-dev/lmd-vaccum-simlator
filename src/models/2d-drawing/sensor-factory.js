import { Compass } from "./sensors/compass";
import { Ultrasound } from "./sensors/ultrasound";
export class SensorFactory {
    create(type, environment, parent) {
        switch (type) {
            case 'compass':
                return new Compass("Compass", environment, parent);
                break;
            case 'ultrasound':
                return new Ultrasound("Ultrasound", environment, parent);
                break;
            default: throw `Unknown sensor type '${type}'.`;
        }
    }
}
//# sourceMappingURL=sensor-factory.js.map