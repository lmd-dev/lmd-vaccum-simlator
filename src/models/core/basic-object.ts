import { Vector3 } from "../math/vector";
import { Serialize, serializable } from "../serialize/serialize";
import { Environment as Environment } from "./environment";

/**
 * The BasicObject underlie all other objects of the environment
 */
export abstract class BasicObject extends Serialize
{
    //Type of the object
    @serializable()
    private readonly _type: string;
    public get type(): string { return this._type; }

    //Name of the object
    @serializable()
    private _name: string;
    public get name(): string { return this._name; }
    public set name(v: string) { this._name = v; }

    //Parent of the object
    private _parent: BasicObject;
    public get parent(): BasicObject { return this._parent; }
    public set parent(v: BasicObject) { this._parent = v; }

    //Children objects
    @serializable(BasicObject, { list: true })
    private _children: BasicObject[];
    public get children(): BasicObject[] { return this._children; }

    //Environment where the object evolve
    private readonly _environment: Environment;
    public get environment(): Environment { return this._environment; }

    //Position of the object (relative to its parent if not null, else absolute)
    @serializable(Vector3)
    private _position: Vector3;
    public get position(): Vector3 { return this._position; }

    //Rotation angles of the object (relative to its parent if not null, else absolute)
    @serializable(Vector3)
    private _rotation: Vector3;
    public get rotation(): Vector3 { return this._rotation; }

    //Returns the absolute position of the object
    public get absolutePosition(): Vector3
    {
        let absolutePosition = new Vector3();
        absolutePosition.copy(this.rotation);

        if (this.parent)
            absolutePosition.move(this.parent.absolutePosition);

        return absolutePosition;
    }

    //returns the absolute rotation angles of the object
    public get absoluteRotation(): Vector3
    {
        let absoluteRotation = new Vector3();
        absoluteRotation.copy(this.rotation);

        if (this.parent)
            absoluteRotation.move(this.parent.absoluteRotation);

        return absoluteRotation;
    }

    /**
     * Constructor
     * @param type Type of the object 
     * @param name Name of the object
     * @param environment Environment where the objet evolve
     * @param parent Parent of the object
     */
    constructor(type: string, name: string, environment: Environment, parent: BasicObject = null)
    {
        super();

        this._type = type;
        this._name = name;
        this._parent = parent;
        this._children = new Array<BasicObject>();
        this._environment = environment;
        this._position = new Vector3(0, 0, 0, () => this.update());
        this._rotation = new Vector3(0, 0, 0, () => this.update());
    }

    update()
    {

    }
}


