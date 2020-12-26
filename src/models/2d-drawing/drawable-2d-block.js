import { Block } from "../core/tangible-objects/block";
/**
 * Drawable block
 */
export class Drawable2DBlock extends Block {
    /**
     * Constructor
     * @param name Name of the object
     * @param environment Environment where the object evolve
     * @param parent Parent of the object
     */
    constructor(name, environment, parent) {
        super(name, environment, parent);
    }
    /**
     * Drawing function of the block
     * @param context 2D rendering context to use
     */
    draw(context) {
        context.save();
        context.translate(this.position.x, this.position.z);
        context.rotate(this.rotation.y);
        context.beginPath();
        context.rect(-this.width / 2, -this.depth / 2, this.width, this.depth);
        context.fill();
        context.stroke();
        context.restore();
    }
}
//# sourceMappingURL=drawable-2d-block.js.map