import { VehicleType } from "../enums/vehicle-type.enum";

export class Vehicle {
    constructor(
        public id: string,
        public plates: string,
        public niv: string,
        public brand: string,
        public type: VehicleType,
        public user: string
    ) {}


    public static fromObject( object: {[key: string]: any} ): Vehicle {
        const { id, plates, niv, brand, type, user } = object
    
        return new Vehicle(id, plates, niv, brand, type, user)
      }
}