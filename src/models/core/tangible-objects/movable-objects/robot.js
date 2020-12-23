import { __decorate } from "tslib";
import { Vector3 } from "../../../math/vector";
import { serializable } from "../../../serialize/serialize";
import { MovableObject } from "../../movable-object";
import { Sensor } from "../../sensor";
import { SensorFactory } from "../../sensor-factory";
import { Compass } from "../../sensors/compass";
import { Ultrasound } from "../../sensors/ultrasound";
/**
 * Represents the robot in the simulation environment
 */
export class Robot extends MovableObject {
    /**
     * Constructor
     * @param name Name of the robot
     * @param environment Environment where the robot evolve
     * @param diameter Diameter of the robot (mm)
     * @param linearSpeed Nominal linear speed of the robot
     * @param angularSpeed Nominal angular speed of the robot
     */
    constructor(name, environment) {
        super('robot', name, environment, null);
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = 0;
        this._diameter = 250;
        this._linearSpeed = 100;
        this._angularSpeed = Math.PI / 4;
        this._sensors = new Array();
        this.lastIteration = null;
        this.loop();
    }
    get diameter() { return this._diameter; }
    set diameter(value) { this._diameter = value; }
    get linearSpeed() { return this._linearSpeed; }
    set linearSpeed(value) { this._linearSpeed = value; }
    get angularSpeed() { return this._angularSpeed; }
    set angularSpeed(value) { this._angularSpeed = value; }
    get currentLinearSpeed() { return this._currentLinearSpeed; }
    get currentAngularSpeed() { return this._currentAngularSpeed; }
    get sensors() { return this._sensors; }
    /**
     *
     * @param type Add sensor of the given type to the robot
     * @returns Added sensor
     */
    addSensor(type) {
        try {
            let sensor = SensorFactory.create(type, this.environment, this);
            this.sensors.push(sensor);
            return sensor;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
    /**
     * Loop function of the robot
     */
    loop() {
        let elapsedTime = 0;
        let now = performance.now();
        if (this.lastIteration !== null) {
            elapsedTime = now - this.lastIteration;
        }
        this.updatePosition(elapsedTime);
        //Update sensors for test
        this.sensors.forEach((sensor) => {
            if (sensor instanceof Compass)
                sensor.measureDirection();
            else if (sensor instanceof Ultrasound)
                sensor.measureDistance();
        });
        this.lastIteration = now;
        setTimeout(() => { this.loop(); }, 100);
    }
    /**
     * Updates tangible path of the robot
     */
    updatePath() {
    }
    /**
     * Starts robot move forward
     */
    moveForward() {
        this._currentLinearSpeed = this._linearSpeed;
        this._currentAngularSpeed = 0;
    }
    /**
     * Turns the robot to the left
     */
    turnLeft() {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = this._angularSpeed;
    }
    /**
     * Turns the robot to the right
     */
    turnRight() {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = -this._angularSpeed;
    }
    /**
     * Stops moving of the robot
     */
    stop() {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = 0;
    }
    /**
     * Updates the position of the robot from the given elapsed time
     * @param elapsedTime (ms)
     */
    updatePosition(elapsedTime) {
        if (this._currentLinearSpeed !== 0) {
            let distance = (elapsedTime / 1000) * this._currentLinearSpeed;
            let vector = new Vector3(distance, 0, 0);
            vector.rotateY(new Vector3(), -this.rotation.y);
            this.position.move(vector);
        }
        else if (this._currentAngularSpeed !== 0) {
            this.rotation.y += this._currentAngularSpeed * (elapsedTime / 1000);
        }
    }
}
__decorate([
    serializable()
], Robot.prototype, "_diameter", void 0);
__decorate([
    serializable()
], Robot.prototype, "_linearSpeed", void 0);
__decorate([
    serializable()
], Robot.prototype, "_angularSpeed", void 0);
__decorate([
    serializable(Sensor, { list: true })
], Robot.prototype, "_sensors", void 0);
//# sourceMappingURL=robot.js.map