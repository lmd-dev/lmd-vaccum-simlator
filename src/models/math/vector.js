import { __decorate } from "tslib";
import { Serialize } from "../serialize/serialize";
import { serializable } from "../serialize/serialize";
export class Vector3 extends Serialize {
    /**
     * Constructor
     */
    constructor(x = 0, y = 0, z = 0) {
        super();
        this._x = x;
        this._y = y;
        this._z = z;
    }
    get x() { return this._x; }
    ;
    set x(value) { this._x = value; }
    ;
    get y() { return this._y; }
    ;
    set y(value) { this._y = value; }
    ;
    get z() { return this._z; }
    ;
    set z(value) { this._z = value; }
    ;
    /**
     * Defines the three coordinates in one shot
     * @param x
     * @param y
     * @param z
     */
    setXYZ(x, y, z = this._z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Includes the points in the bounding box result
     */
    getBoundingBox(minPoint, maxPoint) {
        if (minPoint.x > this.x)
            minPoint.x = this.x;
        if (maxPoint.x < this.x)
            maxPoint.x = this.x;
        if (minPoint.y > this.y)
            minPoint.y = this.y;
        if (maxPoint.y < this.y)
            maxPoint.y = this.y;
        if (minPoint.z > this.z)
            minPoint.z = this.z;
        if (maxPoint.z < this.z)
            maxPoint.z = this.z;
    }
    /**
     * Copies data from another Point
     */
    copy(point) {
        this.setXYZ(point.x, point.y, point.z);
        return this;
    }
    /**
     * Return true if the given point is equel to the current point
     */
    isEqual(point) {
        return (this.x == point.x && this.y == point.y && this.z == point.z);
    }
    /**
     * Indique si deux points sont diff�rents
     */
    isNotEqual(point) {
        return !this.isEqual(point);
    }
    /**
     * Moves the point coordinates
     */
    move(point) {
        this.x += point.x;
        this.y += point.y;
        this.z += point.z;
        return this;
    }
    /**
     * Makes the substraction of two point and returns the resulting point
     */
    substract(point) {
        let result = new Vector3();
        result.setXYZ(point.x - this.x, point.y - this.y, point.z - this.z);
        return result;
    }
    /**
     * Returns the cross product of thwo points
     */
    crossProduct(point) {
        let result = new Vector3();
        result.setXYZ(this.y * point.z - this.z * point.y, this.z * point.x - this.x * point.z, this.x * point.y - this.y * point.x);
        return result;
    }
    /**
     * Rotates the point
     */
    rotate(center, angleX, angleY, angleZ) {
        //Changement de repere :
        this.move(new Vector3(-center.x, -center.y, -center.z));
        var temp = new Vector3();
        temp.copy(this);
        //Rotation sur X :
        if (angleX != 0) {
            temp.z = this.z * Math.cos(angleX) - this.y * Math.sin(angleX);
            temp.y = this.z * Math.sin(angleX) + this.y * Math.cos(angleX);
            this.copy(temp);
        }
        //Rotation sur Y :
        if (angleY != 0) {
            temp.x = this.x * Math.cos(angleY) - this.z * Math.sin(angleY);
            temp.z = this.x * Math.sin(angleY) + this.z * Math.cos(angleY);
            this.copy(temp);
        }
        //Rotation sur Z :
        if (angleZ != 0) {
            temp.x = this.x * Math.cos(angleZ) - this.y * Math.sin(angleZ);
            temp.y = this.x * Math.sin(angleZ) + this.y * Math.cos(angleZ);
            this.copy(temp);
        }
        //Retoure au repere d'origine
        this.move(new Vector3(center.x, center.y, center.z));
    }
    //Fonction de rotation sur l'axe des X
    rotateX(center, angle) {
        this.rotate(center, angle, 0.0, 0.0);
    }
    //Fonction de rotation sur l'axe des Y
    rotateY(center, angle) {
        this.rotate(center, 0.0, angle, 0.0);
    }
    //Fonction de rotation sur l'axe des Z
    rotateZ(center, angle) {
        this.rotate(center, 0.0, 0.0, angle);
    }
    /**
     * Retourne une chaine de caract�re d�crivant le point
     */
    toString() {
        return '(' + this.x + ' ; ' + this.y + ' ; ' + this.z + ')';
    }
}
__decorate([
    serializable()
], Vector3.prototype, "_x", void 0);
__decorate([
    serializable()
], Vector3.prototype, "_y", void 0);
__decorate([
    serializable()
], Vector3.prototype, "_z", void 0);
//# sourceMappingURL=vector.js.map