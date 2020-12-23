import { BasicObject } from "./basic-object";
import { Environment } from "./environment";
import { Sensor } from "./sensor";
import { Compass } from "./sensors/compass";
import { Ultrasound } from "./sensors/ultrasound";
import { Robot } from "./tangible-objects/movable-objects/robot";

export class SensorFactory
{
    static create(type: string, environment: Environment, parent: BasicObject): Sensor
    {
        switch(type)
        {
            case 'compass': return new Compass("Compass", environment, parent); break;
            case 'ultrasound': return new Ultrasound("Ultrasound", environment, parent); break;
            default: throw `Unknown sensor type '${type}'.`;
        }
    }
}
