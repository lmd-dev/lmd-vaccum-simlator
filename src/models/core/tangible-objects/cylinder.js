import { Vector3 } from "@/models/math/vector";
import { TangibleObject } from "../tangible-object";
/**
 * Represent a tangible cylinder on the environment
 */
export class Cylinder extends TangibleObject {
    /**
     * Constructor
     * @param name Name of the bloc
     * @param environment Environment where the bloc is present
     * @param parent Parent object of the bloc
     */
    constructor(name, environment, parent = null) {
        super('cylinder', name, environment, parent);
        this.diameter = 1000;
        this.height = 1000;
    }
    get diameter() { return this._diameter; }
    set diameter(v) { this._diameter = v; }
    get height() { return this._height; }
    set height(v) { this._height = v; }
    /**
     * Updates tangible path of the cylinder
     */
    updateContour() {
        let contour = this.contour.last || this.contour.createPath();
        contour.clear();
        let point = new Vector3();
        point.copy(this.position);
        point.x += this.diameter / 2;
        let angleStep = Math.PI / 16;
        for (let i = 0; i <= Math.PI * 2; i += angleStep) {
            contour.addPoint(point);
            point.rotateY(this.position, angleStep);
        }
        contour.addPoint(point);
    }
}
//# sourceMappingURL=cylinder.js.map