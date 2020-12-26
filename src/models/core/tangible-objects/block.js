import { Vector3 } from "@/models/math/vector";
import { TangibleObject } from "../tangible-object";
/**
 * Represent a tangible bloc on the environment
 */
export class Block extends TangibleObject {
    /**
     * Constructor
     * @param name Name of the bloc
     * @param environment Environment where the bloc is present
     * @param parent Parent object of the bloc
     */
    constructor(name, environment, parent = null) {
        super('block', name, environment, parent);
        this._width = 1000;
        this._height = 1000;
        this._depth = 1000;
    }
    get width() { return this._width; }
    set width(v) { this._width = v; }
    get height() { return this._height; }
    set height(v) { this._height = v; }
    get depth() { return this._depth; }
    set depth(v) { this._depth = v; }
    /**
     * Updates the tangible path of the bloc
     */
    updateContour() {
        let contour = this.contour.last || this.contour.createPath();
        contour.clear();
        let point = new Vector3();
        point.copy(this.position);
        point.move(new Vector3(-this.width / 2, 0, -this.depth / 2));
        contour.addPoint(point);
        point.x += this.width;
        contour.addPoint(point);
        point.z += this.depth;
        contour.addPoint(point);
        point.x -= this.width;
        contour.addPoint(point);
        point.z -= this.depth;
        contour.addPoint(point);
    }
}
//# sourceMappingURL=block.js.map