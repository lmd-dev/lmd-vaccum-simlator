import { Path } from "./path";
/**
 * Manages paths and all associates features
 */
export class PathsManager {
    /**
     * Constructor
     */
    constructor() {
        this._paths = new Array();
    }
    get paths() { return this._paths; }
    get last() { return this.paths.length ? this.paths[this.paths.length - 1] : null; }
    /**
     * Adds a new path to the collection
     * @returns the created path
     */
    createPath() {
        let path = new Path();
        this.paths.push(path);
        return path;
    }
}
//# sourceMappingURL=paths-manager.js.map