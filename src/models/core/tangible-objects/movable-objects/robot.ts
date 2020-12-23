import { Vector3 } from "../../../math/vector";
import { serializable } from "../../../serialize/serialize";
import { Environment } from "../../environment";
import { MovableObject } from "../../movable-object";
import { Sensor } from "../../sensor";
import { SensorFactory } from "../../sensor-factory";
import { Compass } from "../../sensors/compass";
import { Ultrasound } from "../../sensors/ultrasound";

/**
 * Represents the robot in the simulation environment
 */
export class Robot extends MovableObject
{
    //Diameter of the robot (mm) 
    @serializable()
    private _diameter: number;
    public get diameter(): number { return this._diameter; }
    public set diameter(value: number) { this._diameter = value; }

    //Nominal linear speed (m/s)
    @serializable()
    private _linearSpeed: number;
    public get linearSpeed(): number { return this._linearSpeed; }
    public set linearSpeed(value: number) { this._linearSpeed = value; }

    //Nominal angular speed (rad/s)    
    @serializable()
    private _angularSpeed: number;
    public get angularSpeed(): number { return this._angularSpeed; }
    public set angularSpeed(value: number) { this._angularSpeed = value; }

    //Real linear speed of the robot at the current time
    private _currentLinearSpeed: number;
    public get currentLinearSpeed(): number { return this._currentLinearSpeed; }

    //Real angular speed of the robot at the current time
    private _currentAngularSpeed: number;
    public get currentAngularSpeed(): number { return this._currentAngularSpeed; }

    //Sensors associated to the robot
    @serializable(Sensor, { list: true })
    private _sensors: Sensor[];
    public get sensors(): Sensor[] { return this._sensors; }

    /**
     * Constructor
     * @param name Name of the robot
     * @param environment Environment where the robot evolve
     * @param diameter Diameter of the robot (mm)
     * @param linearSpeed Nominal linear speed of the robot
     * @param angularSpeed Nominal angular speed of the robot
     */
    constructor(name: string, environment: Environment)
    {
        super('robot', name, environment, null);

        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = 0;
        this._diameter = 250;
        this._linearSpeed = 100;
        this._angularSpeed = Math.PI / 4;
        this._sensors = new Array<Sensor>();
        this.lastIteration = null;

        this.loop();
    }

    /**
     * 
     * @param type Add sensor of the given type to the robot
     * @returns Added sensor
     */
    addSensor(type: string): Sensor
    {
        try {
            let sensor = SensorFactory.create(type, this.environment, this);
            this.sensors.push(sensor);
        console.log(this.sensors);

            return sensor;
        }
        catch(e)
        {
            console.error(e);
            return null;
        }

    }

    /**
     * Loop function of the robot
     */
    loop()
    {
        let elapsedTime = 0;
        let now = performance.now();

        if (this.lastIteration !== null)
        {
            elapsedTime = now - this.lastIteration;
        }

        this.updatePosition(elapsedTime);

        //Update sensors for test
        this.sensors.forEach((sensor) => {
            if(sensor instanceof Compass)
                sensor.measureDirection();
            else if(sensor instanceof Ultrasound)
                sensor.measureDistance();
        });

        this.lastIteration = now;

        setTimeout(() => { this.loop(); }, 100);
    }

    /**
     * Updates tangible path of the robot
     */
    updatePath()
    {

    }

    /**
     * Starts robot move forward
     */
    moveForward()
    {
        this._currentLinearSpeed = this._linearSpeed;
        this._currentAngularSpeed = 0;
    }

    /**
     * Turns the robot to the left
     */
    turnLeft()
    {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = this._angularSpeed;
    }

    /**
     * Turns the robot to the right
     */
    turnRight()
    {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = -this._angularSpeed;
    }

    /**
     * Stops moving of the robot
     */
    stop()
    {
        this._currentLinearSpeed = 0;
        this._currentAngularSpeed = 0;
    }

    /**
     * Updates the position of the robot from the given elapsed time
     * @param elapsedTime (ms)
     */
    updatePosition(elapsedTime: number)
    {
        if (this._currentLinearSpeed !== 0)
        {
            let distance = (elapsedTime / 1000) * this._currentLinearSpeed;
            let vector = new Vector3(distance, 0, 0);
            vector.rotateY(new Vector3(), -this.rotation.y);
            this.position.move(vector);
        }
        else if (this._currentAngularSpeed !== 0)
        {
            this.rotation.y += this._currentAngularSpeed * (elapsedTime / 1000);
        }
    }
}