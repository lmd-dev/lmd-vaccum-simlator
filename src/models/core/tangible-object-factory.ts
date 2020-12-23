import { BasicObject } from "./basic-object";
import { Environment } from "./environment";
import { Block } from "./tangible-objects/block";
import { Cylinder } from "./tangible-objects/cylinder";
import { Robot } from "./tangible-objects/movable-objects/robot";

export class TangibleObjectFactory
{
    static create(type: string, environment: Environment, parent: BasicObject = null): BasicObject
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
