/**
 * Interface implemented by object which can be drawed using the 2d context of HTML Canvas
 */
export interface IDrawable2DObject
{
    /**
     * Drawing function of the object
     * @param context HTML Canvas 2D Rendering Context
     */
    draw(context: CanvasRenderingContext2D): void;
}