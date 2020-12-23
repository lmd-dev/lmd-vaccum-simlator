import { BasicObject } from "./basic-object";
import { Environment } from "./environment";

/**
 * All sensors inherit from Sensor class
 */
export abstract class Sensor extends BasicObject
{
    /**
     * Constructor
     * @param type Type of the sensor 
     * @param name Name of the sensor
     * @param environment Environment where the sensor evolve
     * @param parent Parent object of the sensor
     */
    constructor(type: string, name: string, environment: Environment, parent: BasicObject)
    {
        super(type, name, environment, parent);
    }
}