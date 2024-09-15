import { UpdateVehicleDto } from "../dtos/update-vehicle.dto";
import { Vehicle } from "../entity/vehicle.entity";
import { IVehicleRepository } from "../repositories/vehicle.repository";

interface IUpdateVehicle {
    execute(id: string, dto: UpdateVehicleDto): Promise<Vehicle>
}

export class UpdateVehicle implements IUpdateVehicle {

    constructor(private readonly repository: IVehicleRepository) {}

    execute(id: string, dto: UpdateVehicleDto): Promise<Vehicle> {
        
        return this.repository.update(id, dto)

    }

}