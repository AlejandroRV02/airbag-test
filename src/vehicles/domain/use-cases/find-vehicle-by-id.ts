import { Vehicle } from "../entity/vehicle.entity";
import { IVehicleRepository } from "../repositories/vehicle.repository";

interface IFindByIdVehicle {
    execute(id: string): Promise<Vehicle>
}

export class FindByIdVehicle implements IFindByIdVehicle {

    constructor(private readonly repository: IVehicleRepository) {}

    execute(id: string): Promise<Vehicle> {
        
        return this.repository.findById(id)

    }

}