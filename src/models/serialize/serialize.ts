/**
 * Parameters of serializable property
 * list : The property is an array/list of item with the defined type
 */
export interface SerializableOptions
{
    list?: boolean;
}

/**
 * Property details 
 * type : Type of the property
 * options : Parameters affecting the property
 */
export interface SerializableProperty
{
    type: any;
    options: SerializableOptions;
}

/**
 * Serializable decorator
 * @param type Type of the property
 * @param options Parameters affecting the property
 */
export function serializable(type?: any, options?: SerializableOptions)
{
    return function (target: Serialize, propertyName: string)
    {
        target.addSerializableProperty(propertyName, type, options);
    }
}

/**
 * Serialize class
 */
export class Serialize
{
    //List of serializable properties
    private _serializableProperties: Map<string, SerializableProperty>;

    /**
     * Add a property to the serializable properties list
     * @propertyName : Name of the property
     * @type : Type of the property
     * @options : Parameters affecting the property
     */
    addSerializableProperty(propertyName: string, type: any, options: SerializableOptions)
    {
        if (this._serializableProperties === undefined)
            this._serializableProperties = new Map<string, SerializableProperty>();

        this._serializableProperties.set(propertyName, { type: type, options: options });
    }

    /**
     * Unserialize properties content from JS Object
     * @param data
     */
    unserialize(data: unknown)
    {
        if (data && this._serializableProperties)
        {
            Object.getOwnPropertyNames(data).forEach((propertyName) =>
            {
                let localPropertyName = propertyName;

                if (this._serializableProperties.has(propertyName) === false)
                    localPropertyName = "_" + propertyName;

                if (this._serializableProperties.has(localPropertyName))
                {
                    const { type, options } = this._serializableProperties.get(localPropertyName);

                    const isArray = options?.list ?? false;

                    if (isArray)
                    {
                        this[localPropertyName] = data[propertyName].map((item) =>
                        {
                            if (type)
                            {
                                let object = new type();

                                if (object instanceof Serialize)
                                {
                                    object.unserialize(item);
                                    return object;
                                }
                            }
                            else
                                return item;
                        });
                    }
                    else if (type && new type() instanceof Serialize)
                    {
                        if (this[localPropertyName] !== undefined)
                            this[localPropertyName].unserialize(data[propertyName]);
                        else
                        {
                            this[localPropertyName] = new type();
                            this[localPropertyName].unserialize(data[propertyName]);
                        }
                    }
                    else
                        this[localPropertyName] = data[propertyName];
                }
            });
        }
    }

    /**
     * Serialize serializable property content to JS object
     */
    serialize(): any
    {
        let serializedData = {};

        this._serializableProperties.forEach((propertyInfo: SerializableProperty, propertyName: string) =>
        {
            const { type, options } = propertyInfo;

            const isArray = options?.list ?? false;

            if (isArray)
            {
                serializedData[propertyName] = this[propertyName].map((item) =>
                {
                    if (type)
                    {
                        let object = new type();

                        if (object instanceof Serialize)
                        {
                            return object.serialize();
                        }
                    }
                    else
                        return item;
                });
            }
            else if (type && new type() instanceof Serialize)
            {
                if (this[propertyName] !== undefined)
                    serializedData[propertyName] = this[propertyName].serialize();
            }
            else
                serializedData[propertyName] = this[propertyName];
        });

        return serializedData;
    }
}