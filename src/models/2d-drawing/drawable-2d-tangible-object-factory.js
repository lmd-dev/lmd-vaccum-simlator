import { TangibleObjectFactory } from "../core/tangible-object-factory";
import { Drawable2DBlock } from "./drawable-2d-block";
import { Drawable2DCylinder } from "./drawable-2d-cylinder";
import { Drawable2DRobot } from "./drawable-2d-robot";
/**
 * 2D Drawable tangible objects factory
 */
export class Drawable2DTangibleObjectFactory extends TangibleObjectFactory {
    /**
     * Constructor
     */
    constructor() {
        super();
    }
    /**
     * Creates a 2d drawable tangible object from its type name
     * @param type Type of the object to create
     * @param environment Environment where the created object will envolve
     * @param parent Parent of the object
     */
    create(type, environment, parent = null) {
        switch (type) {
            case 'robot': return new Drawable2DRobot("Robot", environment);
            case 'block': return new Drawable2DBlock("Block", environment, parent);
            case 'cylinder': return new Drawable2DCylinder("Cylinder", environment, parent);
            default: throw `Unknown object type '${type}'.`;
        }
    }
}
//# sourceMappingURL=drawable-2d-tangible-object-factory.js.map