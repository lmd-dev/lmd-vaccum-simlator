import { BasicObject } from "./basic-object";
import { Environment } from "./environment";
import { Block } from "./tangible-objects/block";
import { Cylinder } from "./tangible-objects/cylinder";
import { Robot } from "./tangible-objects/movable-objects/robot";

/**
 * Tangible objects factory
 */
export class TangibleObjectFactory
{
    /**
     * Creates a tangible object from its type name
     * @param type Type of the object to create
     * @param environment Environment where the created object will envolve
     * @param parent Parent of the object
     */
    create(type: string, environment: Environment, parent: BasicObject = null): BasicObject
    {
        switch(type)
        {
            case 'robot': return new Robot("Robot", environment); 
            case 'block': return new Block("Block", environment, parent); 
            case 'cylinder': return new Cylinder("Cylinder", environment, parent); 
            default: throw `Unknown object type '${type}'.`;
        }
    }
}
