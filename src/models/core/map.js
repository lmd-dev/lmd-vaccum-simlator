import { PathsManager } from './paths-manager';
/**
 * Virtual map of the environment constructed by the robot from its sensors
 */
export class Map {
    /**
     * Cosntructor
     */
    constructor() {
        this._path = new PathsManager();
        this._cleanedArea = new PathsManager();
        this._obstacles = new PathsManager();
    }
    get path() { return this._path; }
    get cleanedArea() { return this._cleanedArea; }
    get obstacles() { return this._obstacles; }
}
//# sourceMappingURL=map.js.map